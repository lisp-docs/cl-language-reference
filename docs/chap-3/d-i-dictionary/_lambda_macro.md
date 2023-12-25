**lambda** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"lambda"}><b>lambda</b></ClLinks> *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → function 



**Arguments and Values:** 



*lambda-list*—an *ordinary lambda list*.  







<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Provides a shorthand notation for a <ClLinks  term={"function"}><b>function</b></ClLinks> *special form* involving a *lambda expression* such that: 



(lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) 



*≡* (function (lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)) 



*≡* #’(lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) 



**Examples:**
```lisp
(funcall (lambda (x) (+ x 3)) 4) → 7 
```
**See Also:** 



<ClLinks  term={"lambda"}><b>lambda</b></ClLinks> (symbol) 



**Notes:** 



This macro could be implemented by: 



(defmacro lambda (&amp;whole form &amp;rest bvl-decls-and-body) 



(declare (ignore bvl-decls-and-body)) 



‘#’,form) 



