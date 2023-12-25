**eq** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are the same, identical <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. **Examples:**
```lisp

(eq ’a ’b) *→ false* 
(eq ’a ’a) *→ true* 
(eq 3 3) 
*→ true* 
<i><sup>or</sup>→ false</i> 
(eq 3 3.0) *→ false* 
(eq 3.0 3.0) 
*→ true* 
<i><sup>or</sup>→ false</i> 



**eq** 
(eq #c(3 -4) #c(3 -4)) 
*→ true* 
<i><sup>or</sup>→ false</i> 
(eq #c(3 -4.0) #c(3 -4)) *→ false* 
(eq (cons ’a ’b) (cons ’a ’c)) *→ false* 
(eq (cons ’a ’b) (cons ’a ’b)) *→ false* 
(eq ’(a . b) ’(a . b)) 
*→ true* 
<i><sup>or</sup>→ false</i> 
(progn (setq x (cons ’a ’b)) (eq x x)) *→ true* 
(progn (setq x ’(a . b)) (eq x x)) *→ true* 
(eq #\A #\A) 
*→ true* 
<i><sup>or</sup>→ false</i> 
(let ((x "Foo")) (eq x x)) *→ true* 
(eq "Foo" "Foo") 
*→ true* 
<i><sup>or</sup>→ false</i> 
(eq "Foo" (copy-seq "Foo")) *→ false* 
(eq "FOO" "foo") *→ false* 
(eq "string-seq" (copy-seq "string-seq")) *→ false* 
(let ((x 5)) (eq x x)) 
*→ true* 
<i><sup>or</sup>→ false</i> 

```
**See Also:** 



<DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>, <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, Section 3.2 (Compilation) 



**Notes:** 



<GlossaryTerm styled={true} term={"object"}><i>Objects</i></GlossaryTerm> that appear the same when printed are not necessarily <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to each other. <GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> that print the same usually are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to each other because of the use of the <DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> function. However, <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> with the same value need not be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, and two similar <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are usually not <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



An implementation is permitted to make “copies” of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> at any time. The effect is that Common Lisp makes no guarantee that <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> is true even when both its arguments are “the same thing” if that thing is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



Most Common Lisp <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> use <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to compare objects, or else they default to <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> and only use <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> if specifically requested to do so. However, the following <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> are defined to use <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> in a way that cannot be overridden by the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> which employs them: 



Data and Control 











|<p>**catch getf throw** </p><p>**get remf** </p><p>**get-properties remprop**</p>|

| :- |





**Figure 5–11. Operators that always prefer EQ over EQL** 



