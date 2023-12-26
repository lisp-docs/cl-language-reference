**lambda** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink> *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → function 



**Arguments and Values:** 



*lambda-list*—an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>.  







<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Provides a shorthand notation for a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> involving a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> such that: 



(lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) 



*≡* (function (lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)) 



*≡* #’(lambda *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) 



**Examples:**
```lisp
(funcall (lambda (x) (+ x 3)) 4) → 7 
```
**See Also:** 



<DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink> (symbol) 



**Notes:** 



This macro could be implemented by: 



(defmacro lambda (&amp;whole form &amp;rest bvl-decls-and-body) 



(declare (ignore bvl-decls-and-body)) 



‘#’,form) 



