**make-symbol** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> *name → new-symbol* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*new-symbol*—a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*. 



**Description:** 



<DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> creates and returns a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. The *new-symbol* is neither <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> nor <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> and has a *null property list*. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that becomes the *new-symbol*’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or a copy of it. Once a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> has been given as the *name argument* to *make-symbol*, the consequences are undefined if a subsequent attempt is made to alter that <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq temp-string "temp") *→* "temp" 
(setq temp-symbol (make-symbol temp-string)) *→* #:|temp| 
(symbol-name temp-symbol) *→* "temp" 
(eq (symbol-name temp-symbol) temp-string) *→ implementation-dependent* 
(find-symbol "temp") *→* NIL, NIL 
(eq (make-symbol temp-string) (make-symbol temp-string)) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> 



**Notes:** 



No attempt is made by <DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> to convert the case of the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to uppercase. The only case conversion which ever occurs for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is done by the *Lisp reader* . The program interface to <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> creation retains case, and the program interface to interning symbols is case-sensitive. 







 



 



<DictionaryLink styled={true} term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> 



