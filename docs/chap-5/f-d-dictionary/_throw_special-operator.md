**throw** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> *tag result-form →* 



**Arguments and Values:** 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *catch tag*; evaluated. 



*result-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



Data and Control 











<ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> 



**Description:** 



<ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> causes a non-local control transfer to a <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> whose tag is <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 



<ClLinks styled={true} term={"tag"}><i>Tag</i></ClLinks> is evaluated first to produce an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> called the throw tag; then *result-form* is evaluated, and its results are saved. If the *result-form* produces multiple values, then all the values are saved. The most recent outstanding <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> whose <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> is <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to the throw tag is exited; the saved results are returned as the value or values of <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>. 



The transfer of control initiated by <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



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



If there is no outstanding *catch tag* that matches the throw tag, no unwinding of the stack is 











performed, and an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> is signaled. When the error is signaled, the *dynamic environment* is that which was in force at the point of the <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"block"}><b>block</b></ClLinks>, <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> and <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> are normally used when the *exit point* must have *dynamic scope* (*e.g.*, the <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is not lexically enclosed by the <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>), while <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> and <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> are used when *lexical scope* is sufficient. 



