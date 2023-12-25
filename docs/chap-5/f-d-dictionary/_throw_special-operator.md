**throw** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> *tag result-form →* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *catch tag*; evaluated. 



*result-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



Data and Control 











<DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> causes a non-local control transfer to a <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> whose tag is <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"tag"}><i>Tag</i></GlossaryTerm> is evaluated first to produce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> called the throw tag; then *result-form* is evaluated, and its results are saved. If the *result-form* produces multiple values, then all the values are saved. The most recent outstanding <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> whose <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm> is <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to the throw tag is exited; the saved results are returned as the value or values of <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>. 



The transfer of control initiated by <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp

(catch ’result 
  (setq i 0 j 0) 
  (loop (incf j 3) (incf i) 
   (if (= i 3) (throw ’result (values i j))))) *→* 3, 9 
(catch nil 
  (unwind-protect (throw nil 1) 
    (throw nil 2))) *→* 2 
The consequences of the following are undefined because the **catch** of b is passed over by the first **throw**, hence portable programs must assume that its *dynamic extent* is terminated. The *binding* of the *catch tag* is not yet *disestablished* and therefore it is the target of the second **throw**. 
(catch ’a 
  (catch ’b 
    (unwind-protect (throw ’a 1) 
      (throw ’b 2)))) 
The following prints “The inner catch returns :SECOND-THROW” and then returns :outer-catch. 
(catch ’foo 
  (format t "The inner catch returns ~s.~%" 
	  (catch ’foo 
	    (unwind-protect (throw ’foo :first-throw) 
	      (throw ’foo :second-throw)))) 
  :outer-catch) 
▷ The inner catch returns :SECOND-THROW 
*→* :OUTER-CATCH 

```
**Exceptional Situations:** 



If there is no outstanding *catch tag* that matches the throw tag, no unwinding of the stack is 











performed, and an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> is signaled. When the error is signaled, the *dynamic environment* is that which was in force at the point of the <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> are normally used when the *exit point* must have *dynamic scope* (*e.g.*, the <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is not lexically enclosed by the <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>), while <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> and <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> are used when *lexical scope* is sufficient. 



