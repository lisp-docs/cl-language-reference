*∗<ClLinks styled={true} term={"read-suppress"}><b>*read-suppress*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the *reader macros* which implement these notations to be able to skip over the printed representation of an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> despite the possibility that the syntax of the skipped <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *Lisp reader* operates normally. 



If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks>, <ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks>, and <ClLinks styled={true} term={"read-from-string"}><b>read-from-string</b></ClLinks> all return a *primary value* of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when they complete successfully; however, they continue to parse the representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in the normal way, in order to skip over the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, and continue to indicate *end of file* in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> <sub>2</sub> a following <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> or <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> will do so, but not signal an error if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> read is not of an appropriate type or syntax. The *standard syntax* and its associated *reader macros* will not construct any new <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> (*e.g.*, when reading the representation of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, no <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid *potential numbers*, invalid patterns of *package markers*, and invalid uses of the <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks> character are suppressed. 



Dispatching macro characters (including <ClLinks styled={true} term={"sharpsign"}><i>sharpsign</i></ClLinks>) 



*Dispatching macro characters* continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. It produces no <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, but is treated as <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub>. 







 



 



\## 



The ## notation always produces <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



No matter what the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks>, parentheses still continue to delimit and construct <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>; the #( notation continues to delimit <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks>; and comments, <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, and the <ClLinks styled={true} term={"single-quote"}><i>single-quote</i></ClLinks> and <ClLinks styled={true} term={"backquote"}><i>backquote</i></ClLinks> notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #<ClLinks styled={true} term={"space"}><i>⟨Space⟩</i></ClLinks> continue to signal errors. 



**Examples:**
```lisp

(let ((\*read-suppress\* t)) 
  (mapcar #’read-from-string 
	    ’("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" 
			       "#.(PRINT ’FOO)" "#3AHELLO" "#S(INTEGER)" 
			       "#\*ABC" "#\GARBAGE" "#RALPHA" "#3R444"))) 
→ (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) 

```
**See Also:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, Chapter 2 (Syntax) 



**Notes:** 



<ClLinks styled={true} term={"programmer"}><i>Programmers</i></ClLinks> and <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> that define additional *macro characters* are strongly encouraged to make them respect <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> just as *standardized macro characters* do. That is, when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, they should ignore type errors when reading a following <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> and the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> that implement *dispatching macro characters* should tolerate <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> as their infix <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> value even if a numeric value would ordinarily be required. 



