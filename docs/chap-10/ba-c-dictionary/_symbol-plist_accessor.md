**symbol-plist** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> *symbol → plist* 



<!-- **(setf (symbol-plist** <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-plist<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (symbol-plist** *symbol***)** *new-plist***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"plist"}><i>plist</i></GlossaryTerm>, *new-plist*—a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Examples:**
```lisp
(setq sym (gensym)) → #:G9723 
(symbol-plist sym) → () 
(setf (get sym ’prop1) ’val1) → VAL1 
(symbol-plist sym) → (PROP1 VAL1) 
(setf (get sym ’prop2) ’val2) → VAL2 
(symbol-plist sym) → (PROP2 VAL2 PROP1 VAL1) 
(setf (symbol-plist sym) (list ’prop3 ’val3)) → (PROP3 VAL3) 
(symbol-plist sym) → (PROP3 VAL3) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink>, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



The use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> should be avoided, since a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> is a global resource that can contain information established and depended upon by unrelated programs in the same *Lisp image*. 







 



 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> 



