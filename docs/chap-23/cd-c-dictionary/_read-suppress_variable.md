*∗<DictionaryLink  term={"read-suppress"}><b>*read-suppress*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Initial Value:** 



<ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> which implement these notations to be able to skip over the printed representation of an <ClLinks  term={"expression"}><i>expression</i></ClLinks> despite the possibility that the syntax of the skipped <ClLinks  term={"expression"}><i>expression</i></ClLinks> may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is <ClLinks  term={"false"}><i>false</i></ClLinks>, the *Lisp reader* operates normally. 



If the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink>, <DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>, and <DictionaryLink  term={"read-from-string"}><b>read-from-string</b></DictionaryLink> all return a <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when they complete successfully; however, they continue to parse the representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> in the normal way, in order to skip over the <ClLinks  term={"object"}><i>object</i></ClLinks>, and continue to indicate <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to <ClLinks  term={"read"}><i>read</i></ClLinks> <sub>2</sub> a following <ClLinks  term={"object"}><i>object</i></ClLinks> or <ClLinks  term={"token"}><i>token</i></ClLinks> will do so, but not signal an error if the <ClLinks  term={"object"}><i>object</i></ClLinks> read is not of an appropriate type or syntax. The <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> and its associated <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> will not construct any new <ClLinks  term={"object"}><i>objects</i></ClLinks> (*e.g.*, when reading the representation of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, no <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid <GlossaryTerm styled={true} term={"potential number"}><i>potential numbers</i></GlossaryTerm>, invalid patterns of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>, and invalid uses of the <ClLinks  term={"dot"}><i>dot</i></ClLinks> character are suppressed. 



Dispatching macro characters (including <ClLinks  term={"sharpsign"}><i>sharpsign</i></ClLinks>) 



<GlossaryTerm styled={true} term={"dispatching macro character"}><i>Dispatching macro characters</i></GlossaryTerm> continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following <ClLinks  term={"object"}><i>object</i></ClLinks>. It produces no <ClLinks  term={"object"}><i>object</i></ClLinks>, but is treated as <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub>. 







 



 



\## 



The ## notation always produces <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



No matter what the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink>, parentheses still continue to delimit and construct <ClLinks  term={"list"}><i>lists</i></ClLinks>; the #( notation continues to delimit <ClLinks  term={"vector"}><i>vectors</i></ClLinks>; and comments, <ClLinks  term={"string"}><i>strings</i></ClLinks>, and the <ClLinks  term={"single-quote"}><i>single-quote</i></ClLinks> and <ClLinks  term={"backquote"}><i>backquote</i></ClLinks> notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #<ClLinks  term={"space"}><i>⟨Space⟩</i></ClLinks> continue to signal errors. 



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



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, Chapter 2 (Syntax) 



**Notes:** 



<ClLinks  term={"programmer"}><i>Programmers</i></ClLinks> and <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that define additional <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> are strongly encouraged to make them respect <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> just as *standardized macro characters* do. That is, when the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks>, they should ignore type errors when reading a following <ClLinks  term={"object"}><i>object</i></ClLinks> and the <ClLinks  term={"function"}><i>functions</i></ClLinks> that implement <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro characters</i></GlossaryTerm> should tolerate <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as their infix <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> value even if a numeric value would ordinarily be required. 



