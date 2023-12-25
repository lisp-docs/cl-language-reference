*∗<ClLinks  term={"read-suppress"}><b>*read-suppress*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the *reader macros* which implement these notations to be able to skip over the printed representation of an <ClLinks  term={"expression"}><i>expression</i></ClLinks> despite the possibility that the syntax of the skipped <ClLinks  term={"expression"}><i>expression</i></ClLinks> may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is <ClLinks  term={"false"}><i>false</i></ClLinks>, the *Lisp reader* operates normally. 



If the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"read"}><b>read</b></ClLinks>, <ClLinks  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks>, <ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks>, and <ClLinks  term={"read-from-string"}><b>read-from-string</b></ClLinks> all return a *primary value* of <ClLinks  term={"nil"}><b>nil</b></ClLinks> when they complete successfully; however, they continue to parse the representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> in the normal way, in order to skip over the <ClLinks  term={"object"}><i>object</i></ClLinks>, and continue to indicate *end of file* in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to <ClLinks  term={"read"}><i>read</i></ClLinks> <sub>2</sub> a following <ClLinks  term={"object"}><i>object</i></ClLinks> or <ClLinks  term={"token"}><i>token</i></ClLinks> will do so, but not signal an error if the <ClLinks  term={"object"}><i>object</i></ClLinks> read is not of an appropriate type or syntax. The *standard syntax* and its associated *reader macros* will not construct any new <ClLinks  term={"object"}><i>objects</i></ClLinks> (*e.g.*, when reading the representation of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, no <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid *potential numbers*, invalid patterns of *package markers*, and invalid uses of the <ClLinks  term={"dot"}><i>dot</i></ClLinks> character are suppressed. 



Dispatching macro characters (including <ClLinks  term={"sharpsign"}><i>sharpsign</i></ClLinks>) 



*Dispatching macro characters* continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following <ClLinks  term={"object"}><i>object</i></ClLinks>. It produces no <ClLinks  term={"object"}><i>object</i></ClLinks>, but is treated as <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub>. 







 



 



\## 



The ## notation always produces <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



No matter what the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks>, parentheses still continue to delimit and construct <ClLinks  term={"list"}><i>lists</i></ClLinks>; the #( notation continues to delimit <ClLinks  term={"vector"}><i>vectors</i></ClLinks>; and comments, <ClLinks  term={"string"}><i>strings</i></ClLinks>, and the <ClLinks  term={"single-quote"}><i>single-quote</i></ClLinks> and <ClLinks  term={"backquote"}><i>backquote</i></ClLinks> notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #<ClLinks  term={"space"}><i>⟨Space⟩</i></ClLinks> continue to signal errors. 



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



<ClLinks  term={"read"}><b>read</b></ClLinks>, Chapter 2 (Syntax) 



**Notes:** 



<ClLinks  term={"programmer"}><i>Programmers</i></ClLinks> and <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that define additional *macro characters* are strongly encouraged to make them respect <ClLinks  term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> just as *standardized macro characters* do. That is, when the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks>, they should ignore type errors when reading a following <ClLinks  term={"object"}><i>object</i></ClLinks> and the <ClLinks  term={"function"}><i>functions</i></ClLinks> that implement *dispatching macro characters* should tolerate <ClLinks  term={"nil"}><b>nil</b></ClLinks> as their infix <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> value even if a numeric value would ordinarily be required. 



