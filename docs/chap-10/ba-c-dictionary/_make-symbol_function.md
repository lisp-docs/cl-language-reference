**make-symbol** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> *name → new-symbol* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*new-symbol*—a <ClLinks  term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*. 



**Description:** 



<DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> creates and returns a <ClLinks  term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol* whose <ClLinks  term={"name"}><i>name</i></ClLinks> is the given <ClLinks  term={"name"}><i>name</i></ClLinks>. The *new-symbol* is neither <ClLinks  term={"bound"}><i>bound</i></ClLinks> nor <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> and has a *null property list*. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <ClLinks  term={"string"}><i>string</i></ClLinks> that becomes the *new-symbol*’s <ClLinks  term={"name"}><i>name</i></ClLinks> is the given <ClLinks  term={"name"}><i>name</i></ClLinks> or a copy of it. Once a <ClLinks  term={"string"}><i>string</i></ClLinks> has been given as the *name argument* to *make-symbol*, the consequences are undefined if a subsequent attempt is made to alter that <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Examples:**
```lisp
(setq temp-string "temp") → "temp" 
(setq temp-symbol (make-symbol temp-string)) → #:|temp| 
(symbol-name temp-symbol) → "temp" 
(eq (symbol-name temp-symbol) temp-string) → implementation-dependent 
(find-symbol "temp") → NIL, NIL 
(eq (make-symbol temp-string) (make-symbol temp-string)) → false 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"name"}><i>name</i></ClLinks> is not a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> 



**Notes:** 



No attempt is made by <DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> to convert the case of the <ClLinks  term={"name"}><i>name</i></ClLinks> to uppercase. The only case conversion which ever occurs for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is done by the *Lisp reader* . The program interface to <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> creation retains case, and the program interface to interning symbols is case-sensitive. 







 



 



<DictionaryLink  term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> 



