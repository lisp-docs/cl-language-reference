**destructuring-bind** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> *lambda-list expression \{declaration\}*\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*lambda-list*—a *destructuring lambda list*. 



<ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; then <ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> evaluates <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



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



If the result of evaluating the <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> does not match the destructuring pattern, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> should be signaled. 



**See Also:** 



<ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> 



