*∗<DictionaryLink  term={"read-suppress"}><b>*read-suppress*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Initial Value:** 



<GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> which implement these notations to be able to skip over the printed representation of an <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> despite the possibility that the syntax of the skipped <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, the *Lisp reader* operates normally. 



If the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink>, <DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>, and <DictionaryLink  term={"read-from-string"}><b>read-from-string</b></DictionaryLink> all return a <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when they complete successfully; however, they continue to parse the representation of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> in the normal way, in order to skip over the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, and continue to indicate <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> <sub>2</sub> a following <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> or <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> will do so, but not signal an error if the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> read is not of an appropriate type or syntax. The <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> and its associated <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> will not construct any new <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> (*e.g.*, when reading the representation of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, no <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid <GlossaryTerm styled={true} term={"potential number"}><i>potential numbers</i></GlossaryTerm>, invalid patterns of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>, and invalid uses of the <GlossaryTerm  term={"dot"}><i>dot</i></GlossaryTerm> character are suppressed. 



Dispatching macro characters (including <GlossaryTerm  term={"sharpsign"}><i>sharpsign</i></GlossaryTerm>) 



<GlossaryTerm styled={true} term={"dispatching macro character"}><i>Dispatching macro characters</i></GlossaryTerm> continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. It produces no <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, but is treated as <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub>. 







 



 



\## 



The ## notation always produces <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



No matter what the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink>, parentheses still continue to delimit and construct <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm>; the #( notation continues to delimit <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm>; and comments, <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>, and the <GlossaryTerm  term={"single-quote"}><i>single-quote</i></GlossaryTerm> and <GlossaryTerm  term={"backquote"}><i>backquote</i></GlossaryTerm> notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #<ClLinks  term={"space"}><i>⟨Space⟩</i></ClLinks> continue to signal errors. 



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



<GlossaryTerm  term={"programmer"}><i>Programmers</i></GlossaryTerm> and <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> that define additional <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> are strongly encouraged to make them respect <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> just as *standardized macro characters* do. That is, when the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, they should ignore type errors when reading a following <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> and the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that implement <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro characters</i></GlossaryTerm> should tolerate <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as their infix <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> value even if a numeric value would ordinarily be required. 



