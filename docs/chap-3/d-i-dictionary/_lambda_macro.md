**lambda** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink> *lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ function* 



**Arguments and Values:** 



*lambda-list*—an *ordinary lambda list*.  







<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Provides a shorthand notation for a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form* involving a *lambda expression* such that: 



(lambda *lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*≡* (function (lambda *lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*)) 



*≡* #’(lambda *lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



**Examples:**
```lisp

(funcall (lambda (x) (+ x 3)) 4) *→* 7 

```
**See Also:** 



<DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink> (symbol) 



**Notes:** 



This macro could be implemented by: 



(defmacro lambda (&amp;whole form &amp;rest bvl-decls-and-body) 



(declare (ignore bvl-decls-and-body)) 



‘#’,form) 



