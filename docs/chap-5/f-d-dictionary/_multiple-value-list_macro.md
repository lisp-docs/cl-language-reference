**multiple-value-list** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> *form ! list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Data and Control 



 



 



**Description:** 



<DictionaryLink styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> evaluates <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and creates a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the *multiple values*<sub>2</sub> it returns. **Examples:**
```lisp

(multiple-value-list (floor -3 4)) *!* (-1 1) 

```
**See Also:** 



<DictionaryLink styled={true} term={"values-list"}><b>values-list</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> and <DictionaryLink styled={true} term={"values-list"}><b>values-list</b></DictionaryLink> are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 



