**lambda** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks> *lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → function 



**Arguments and Values:** 



*lambda-list*—an *ordinary lambda list*.  







<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Provides a shorthand notation for a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form* involving a *lambda expression* such that: 



(lambda *lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



*≡* (function (lambda *lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*)) 



*≡* #’(lambda *lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



**Examples:**
```lisp

(funcall (lambda (x) (+ x 3)) 4) → 7 

```
**See Also:** 



<ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks> (symbol) 



**Notes:** 



This macro could be implemented by: 



(defmacro lambda (&amp;whole form &amp;rest bvl-decls-and-body) 



(declare (ignore bvl-decls-and-body)) 



‘#’,form) 



