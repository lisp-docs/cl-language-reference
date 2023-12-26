**throw** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> *tag result-form →* 



**Arguments and Values:** 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>; evaluated. 



*result-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



Data and Control 











<DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> 



**Description:** 



<DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> causes a non-local control transfer to a <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> whose tag is <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



<ClLinks  term={"tag"}><i>Tag</i></ClLinks> is evaluated first to produce an <ClLinks  term={"object"}><i>object</i></ClLinks> called the throw tag; then *result-form* is evaluated, and its results are saved. If the *result-form* produces multiple values, then all the values are saved. The most recent outstanding <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> whose <ClLinks  term={"tag"}><i>tag</i></ClLinks> is <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to the throw tag is exited; the saved results are returned as the value or values of <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>. 



The transfer of control initiated by <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp
(catch ’result 
  (setq i 0 j 0) 
  (loop (incf j 3) (incf i) 
   (if (= i 3) (throw ’result (values i j))))) → 3, 9 
(catch nil 
  (unwind-protect (throw nil 1) 
    (throw nil 2))) → 2 
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
→ :OUTER-CATCH 
```
**Exceptional Situations:** 



If there is no outstanding <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm> that matches the throw tag, no unwinding of the stack is 











performed, and an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"control-error"}><b>control-error</b></DictionaryLink> is signaled. When the error is signaled, the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> is that which was in force at the point of the <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> are normally used when the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> must have <GlossaryTerm styled={true} term={"dynamic scope"}><i>dynamic scope</i></GlossaryTerm> (*e.g.*, the <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is not lexically enclosed by the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>), while <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> and <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> are used when <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> is sufficient. 



