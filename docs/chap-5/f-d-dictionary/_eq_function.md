**eq** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if its <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> are the same, identical <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 

**Examples:**
```lisp
(eq ’a ’b) → false 
(eq ’a ’a) → true 
(eq 3 3) 
→ true 
<i><sup>or</sup>→ false</i> 
(eq 3 3.0) → false 
(eq 3.0 3.0) 
→ true 
<i><sup>or</sup>→ false</i> 

**eq** 
(eq #c(3 -4) #c(3 -4)) 
→ true 
<i><sup>or</sup>→ false</i> 
(eq #c(3 -4.0) #c(3 -4)) → false 
(eq (cons ’a ’b) (cons ’a ’c)) → false 
(eq (cons ’a ’b) (cons ’a ’b)) → false 
(eq ’(a . b) ’(a . b)) 
→ true 
<i><sup>or</sup>→ false</i> 
(progn (setq x (cons ’a ’b)) (eq x x)) → true 
(progn (setq x ’(a . b)) (eq x x)) → true 
(eq #\A #\A) 
→ true 
<i><sup>or</sup>→ false</i> 
(let ((x "Foo")) (eq x x)) → true 
(eq "Foo" "Foo") 
→ true 
<i><sup>or</sup>→ false</i> 
(eq "Foo" (copy-seq "Foo")) → false 
(eq "FOO" "foo") → false 
(eq "string-seq" (copy-seq "string-seq")) → false 
(let ((x 5)) (eq x x)) 
→ true 
<i><sup>or</sup>→ false</i> 
```
**See Also:** 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, <DictionaryLink  term={"="}><b>=</b></DictionaryLink>, Section 3.2 (Compilation) 



**Notes:** 



<GlossaryTerm  term={"object"}><i>Objects</i></GlossaryTerm> that appear the same when printed are not necessarily <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to each other. <GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> that print the same usually are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to each other because of the use of the <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> function. However, <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> with the same value need not be <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, and two similar <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm> are usually not <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. 



An implementation is permitted to make “copies” of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> and <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> at any time. The effect is that Common Lisp makes no guarantee that <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> is true even when both its arguments are “the same thing” if that thing is a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



Most Common Lisp <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> use <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> rather than <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to compare objects, or else they default to <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> and only use <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> if specifically requested to do so. However, the following <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> are defined to use <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> in a way that cannot be overridden by the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> which employs them: 



Data and Control 











|<p>**catch getf throw** </p><p>**get remf** </p><p>**get-properties remprop**</p>|

| :- |





**Figure 5–11. Operators that always prefer EQ over EQL** 



