**lambda** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink> *lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → function 



**Arguments and Values:** 



*lambda-list*—an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>.  







<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Provides a shorthand notation for a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> involving a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> such that: 



(lambda *lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*≡* (function (lambda *lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*)) 



*≡* #’(lambda *lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



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



