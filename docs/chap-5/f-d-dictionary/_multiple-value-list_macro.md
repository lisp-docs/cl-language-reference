**multiple-value-list** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> *form ! list* 



**Arguments and Values:** 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



Data and Control 



 



 



**Description:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> evaluates <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and creates a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub> it returns. 

**Examples:**
```lisp
(multiple-value-list (floor -3 4)) *!* (-1 1) 
```
**See Also:** 



<DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> and <DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink> are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 



