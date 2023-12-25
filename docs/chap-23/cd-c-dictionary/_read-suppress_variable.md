*∗<DictionaryLink styled={true} term={"read-suppress"}><b>*read-suppress*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the *reader macros* which implement these notations to be able to skip over the printed representation of an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> despite the possibility that the syntax of the skipped <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *Lisp reader* operates normally. 



If the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>, and <DictionaryLink styled={true} term={"read-from-string"}><b>read-from-string</b></DictionaryLink> all return a *primary value* of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> when they complete successfully; however, they continue to parse the representation of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in the normal way, in order to skip over the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, and continue to indicate *end of file* in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> <sub>2</sub> a following <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> will do so, but not signal an error if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> read is not of an appropriate type or syntax. The *standard syntax* and its associated *reader macros* will not construct any new <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> (*e.g.*, when reading the representation of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, no <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid *potential numbers*, invalid patterns of *package markers*, and invalid uses of the <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm> character are suppressed. 



Dispatching macro characters (including <GlossaryTerm styled={true} term={"sharpsign"}><i>sharpsign</i></GlossaryTerm>) 



*Dispatching macro characters* continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. It produces no <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, but is treated as <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub>. 







 



 



\## 



The ## notation always produces <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



No matter what the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink>, parentheses still continue to delimit and construct <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>; the #( notation continues to delimit <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm>; and comments, <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"single-quote"}><i>single-quote</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"backquote"}><i>backquote</i></GlossaryTerm> notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #*hSpacei* continue to signal errors. 



**Examples:**
```lisp

(let ((\*read-suppress\* t)) 
  (mapcar #’read-from-string 
	    ’("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" 
			       "#.(PRINT ’FOO)" "#3AHELLO" "#S(INTEGER)" 
			       "#\*ABC" "#\GARBAGE" "#RALPHA" "#3R444"))) 
*→* (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) 

```
**See Also:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, Chapter 2 (Syntax) 



**Notes:** 



<GlossaryTerm styled={true} term={"programmer"}><i>Programmers</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> that define additional *macro characters* are strongly encouraged to make them respect <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> just as *standardized macro characters* do. That is, when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, they should ignore type errors when reading a following <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that implement *dispatching macro characters* should tolerate <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> as their infix <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> value even if a numeric value would ordinarily be required. 



