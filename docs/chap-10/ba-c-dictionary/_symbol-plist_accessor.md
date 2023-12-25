**symbol-plist** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> *symbol → plist* 



**(setf (symbol-plist** <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-plist<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm>, *new-plist*—a *property list*. 



**Description:** 



*Accesses* the *property list* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq sym (gensym)) *→* #:G9723 
(symbol-plist sym) *→* () 
(setf (get sym ’prop1) ’val1) *→* VAL1 
(symbol-plist sym) *→* (PROP1 VAL1) 
(setf (get sym ’prop2) ’val2) *→* VAL2 
(symbol-plist sym) *→* (PROP2 VAL2 PROP1 VAL1) 
(setf (symbol-plist sym) (list ’prop3 ’val3)) *→* (PROP3 VAL3) 
(symbol-plist sym) *→* (PROP3 VAL3) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink>, <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



The use of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> should be avoided, since a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *property list* is a global resource that can contain information established and depended upon by unrelated programs in the same *Lisp image*. 







 



 



<DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> 



