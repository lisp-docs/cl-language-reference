**destructuring-bind** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> *lambda-list expression \{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*lambda-list*—a *destructuring lambda list*. 



<ClLinks  term={"expression"}><i>expression</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of <ClLinks  term={"expression"}><i>expression</i></ClLinks>; then <ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> evaluates <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



The *lambda-list* supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). 

**Examples:**
```lisp
(defun iota (n) (loop for i from 1 to n collect i)) ;helper 
(destructuring-bind ((a &optional (b ’bee)) one two three) 
    ‘((alpha) ,@(iota 3)) 
  (list a b three two one)) → (ALPHA BEE 3 2 1) 
Data and Control 

```
**Exceptional Situations:** 



If the result of evaluating the <ClLinks  term={"expression"}><i>expression</i></ClLinks> does not match the destructuring pattern, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> should be signaled. 



**See Also:** 



<ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> 



