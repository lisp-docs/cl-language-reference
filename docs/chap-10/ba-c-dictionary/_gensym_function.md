**gensym** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> &amp;optional *x → new-symbol* 



**Arguments and Values:** 



*x*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a non-negative *integer* . Complicated defaulting behavior; see below. *new-symbol*—a <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*. 



**Description:** 



Creates and returns a <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*, as if by calling <DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink>. (The only difference between <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> and <DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> is in how the *new-symbol*’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is determined.) 



The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the *new-symbol* is the concatenation of a prefix, which defaults to "G", and a suffix, which is the decimal representation of a number that defaults to the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>. 



If *x* is supplied, and is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, then that <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is used as a prefix instead of "G" for this call to <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> only. 



If *x* is supplied, and is an *integer* , then that *integer* , instead of the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>, is used as the suffix for this call to <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> only. 



If and only if no explicit suffix is supplied, <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> is incremented after it is used. 

**Examples:**
```lisp
(setq sym1 (gensym)) → #:G3142 
(symbol-package sym1) → NIL 
(setq sym2 (gensym 100)) → #:G100 
(setq sym3 (gensym 100)) → #:G100 
(eq sym2 sym3) → false 
(find-symbol "G100") → NIL, NIL 

(gensym "T") → #:T3143 
(gensym) → #:G3144 
```
**Side Effects:** 



Might increment <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>. 



**Affected By:** 



<DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *x* is not a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a non-negative *integer* . 



**See Also:** 



<DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink>, <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> 



**Notes:** 



The ability to pass a numeric argument to <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> has been deprecated; explicitly <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink> is now stylistically preferred. (The somewhat baroque conventions for the optional argument are historical in nature, and supported primarily for compatibility with older dialects of Lisp. In modern code, it is recommended that the only kind of argument used be a string prefix. In general, though, to obtain more flexible control of the *new-symbol*’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, consider using <DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> instead.) 



