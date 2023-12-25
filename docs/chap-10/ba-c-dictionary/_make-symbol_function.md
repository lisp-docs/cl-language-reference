**make-symbol** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-symbol"}><b>make-symbol</b></ClLinks> *name → new-symbol* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



*new-symbol*—a <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*. 



**Description:** 



<ClLinks styled={true} term={"make-symbol"}><b>make-symbol</b></ClLinks> creates and returns a <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the given <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. The *new-symbol* is neither <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> nor <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> and has a *null property list*. 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that becomes the *new-symbol*’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the given <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or a copy of it. Once a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> has been given as the *name argument* to *make-symbol*, the consequences are undefined if a subsequent attempt is made to alter that <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"copy-symbol"}><b>copy-symbol</b></ClLinks> 



**Notes:** 



No attempt is made by <ClLinks styled={true} term={"make-symbol"}><b>make-symbol</b></ClLinks> to convert the case of the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to uppercase. The only case conversion which ever occurs for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is done by the *Lisp reader* . The program interface to <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> creation retains case, and the program interface to interning symbols is case-sensitive. 







 



 



<ClLinks styled={true} term={"copy-symbol"}><b>copy-symbol</b></ClLinks> 



