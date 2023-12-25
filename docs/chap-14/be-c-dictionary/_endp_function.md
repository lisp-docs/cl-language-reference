**endp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> *list → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list* or a *circular list*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is the *empty list*. Returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



**Examples:**
```lisp
(endp nil) → true 
(endp ’(1 2)) → false 
(endp (cddr ’(1 2))) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Notes:** 



The purpose of <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> is to test for the end of *proper list*. Since <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> does not descend into a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, it is well-defined to pass it a *dotted list*. However, if shorter “lists” are iteratively produced by calling <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> on such a *dotted list* and those “lists” are tested with <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks>, a situation that has undefined consequences will eventually result when the *non-nil atom* (which is not in fact a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) finally becomes the argument to <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks>. Since this is the usual way in which <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> is used, it is conservative programming style and consistent with the intent of <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> to treat <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks> as simply a function on *proper lists* which happens not to enforce an argument type of *proper list* except when the argument is <ClLinks styled={true} term={"atomic"}><i>atomic</i></ClLinks>. 



