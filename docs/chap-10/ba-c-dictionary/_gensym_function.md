**gensym** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> &amp;optional *x → new-symbol* 



**Arguments and Values:** 



*x*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a non-negative *integer* . Complicated defaulting behavior; see below. *new-symbol*—a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*. 



**Description:** 



Creates and returns a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*, as if by calling <DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink>. (The only difference between <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> and <DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> is in how the *new-symbol*’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is determined.) 



The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *new-symbol* is the concatenation of a prefix, which defaults to "G", and a suffix, which is the decimal representation of a number that defaults to the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>. 



If *x* is supplied, and is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, then that <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is used as a prefix instead of "G" for this call to <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> only. 



If *x* is supplied, and is an *integer* , then that *integer* , instead of the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>, is used as the suffix for this call to <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> only. 



If and only if no explicit suffix is supplied, <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> is incremented after it is used. **Examples:**
```lisp

(setq sym1 (gensym)) *→* #:G3142 
(symbol-package sym1) *→* NIL 
(setq sym2 (gensym 100)) *→* #:G100 
(setq sym3 (gensym 100)) *→* #:G100 
(eq sym2 sym3) *→ false* 
(find-symbol "G100") *→* NIL, NIL 



(gensym "T") *→* #:T3143 
(gensym) *→* #:G3144 

```
**Side Effects:** 



Might increment <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>. 



**Affected By:** 



<DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *x* is not a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a non-negative *integer* . 



**See Also:** 



<DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink>, <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> 



**Notes:** 



The ability to pass a numeric argument to <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> has been deprecated; explicitly <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> is now stylistically preferred. (The somewhat baroque conventions for the optional argument are historical in nature, and supported primarily for compatibility with older dialects of Lisp. In modern code, it is recommended that the only kind of argument used be a string prefix. In general, though, to obtain more flexible control of the *new-symbol*’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, consider using <DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> instead.) 



