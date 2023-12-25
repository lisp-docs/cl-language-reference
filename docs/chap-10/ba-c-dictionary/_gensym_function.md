**gensym** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"gensym"}><b>gensym</b></ClLinks> &amp;optional *x → new-symbol* 



**Arguments and Values:** 



*x*—a <ClLinks  term={"string"}><i>string</i></ClLinks> or a non-negative *integer* . Complicated defaulting behavior; see below. *new-symbol*—a <ClLinks  term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*. 



**Description:** 



Creates and returns a <ClLinks  term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*, as if by calling <ClLinks  term={"make-symbol"}><b>make-symbol</b></ClLinks>. (The only difference between <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> and <ClLinks  term={"make-symbol"}><b>make-symbol</b></ClLinks> is in how the *new-symbol*’s <ClLinks  term={"name"}><i>name</i></ClLinks> is determined.) 



The <ClLinks  term={"name"}><i>name</i></ClLinks> of the *new-symbol* is the concatenation of a prefix, which defaults to "G", and a suffix, which is the decimal representation of a number that defaults to the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks>. 



If *x* is supplied, and is a <ClLinks  term={"string"}><i>string</i></ClLinks>, then that <ClLinks  term={"string"}><i>string</i></ClLinks> is used as a prefix instead of "G" for this call to <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> only. 



If *x* is supplied, and is an *integer* , then that *integer* , instead of the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks>, is used as the suffix for this call to <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> only. 



If and only if no explicit suffix is supplied, <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks> is incremented after it is used. 

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



Might increment <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks>. 



**Affected By:** 



<ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks> 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *x* is not a <ClLinks  term={"string"}><i>string</i></ClLinks> or a non-negative *integer* . 



**See Also:** 



<ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks>, <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks> 



**Notes:** 



The ability to pass a numeric argument to <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> has been deprecated; explicitly <ClLinks  term={"binding"}><i>binding</i></ClLinks> <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks> is now stylistically preferred. (The somewhat baroque conventions for the optional argument are historical in nature, and supported primarily for compatibility with older dialects of Lisp. In modern code, it is recommended that the only kind of argument used be a string prefix. In general, though, to obtain more flexible control of the *new-symbol*’s <ClLinks  term={"name"}><i>name</i></ClLinks>, consider using <ClLinks  term={"make-symbol"}><b>make-symbol</b></ClLinks> instead.) 



