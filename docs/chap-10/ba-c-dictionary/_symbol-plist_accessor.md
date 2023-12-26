**symbol-plist** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> *symbol → plist* 



<!-- **(setf (symbol-plist** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>**)** *new-plist<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (symbol-plist** *symbol***)** *new-plist***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"plist"}><i>plist</i></ClLinks>, *new-plist*—a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink>, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



The use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> should be avoided, since a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> is a global resource that can contain information established and depended upon by unrelated programs in the same *Lisp image*. 







 



 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> 



