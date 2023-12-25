**get-properties** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-properties"}><b>get-properties</b></DictionaryLink> *plist indicator-list → indicator, value, tail* 



**Arguments and Values:** 







 



 



<GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm>—a *property list*. 



*indicator-list*—a *proper list* (of <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm>). 



<GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *indicator-list*. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"get-properties"}><b>get-properties</b></DictionaryLink> is used to look up any of several *property list* entries all at once. 



It searches the <GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm> for the first entry whose <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to one of the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in *indicator-list*. If such an entry is found, the <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> returned are the *property indicator* and its associated *property value*, and the <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> returned is the <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm> that begins with the found entry (*i.e.*, whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>). If no such entry is found, the <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> are all <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(setq x ’()) *→* NIL 
(setq \*indicator-list\* ’(prop1 prop2)) *→* (PROP1 PROP2) 
(getf x ’prop1) *→* NIL 
(setf (getf x ’prop1) ’val1) *→* VAL1 
(eq (getf x ’prop1) ’val1) *→ true* 
(get-properties x \*indicator-list\*) *→* PROP1, VAL1, (PROP1 VAL1) 
x *→* (PROP1 VAL1) 

```
**See Also:** 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink>, <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> 



