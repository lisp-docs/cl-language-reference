**eq** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"eq"}><b>eq</b></ClLinks> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if its <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are the same, identical <ClLinks  term={"object"}><i>object</i></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 

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



<ClLinks  term={"eql"}><b>eql</b></ClLinks>, <ClLinks  term={"equal"}><b>equal</b></ClLinks>, <ClLinks  term={"equalp"}><b>equalp</b></ClLinks>, <ClLinks  term={"="}><b>=</b></ClLinks>, Section 3.2 (Compilation) 



**Notes:** 



<ClLinks  term={"object"}><i>Objects</i></ClLinks> that appear the same when printed are not necessarily <ClLinks  term={"eq"}><b>eq</b></ClLinks> to each other. <ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> that print the same usually are <ClLinks  term={"eq"}><b>eq</b></ClLinks> to each other because of the use of the <ClLinks  term={"intern"}><b>intern</b></ClLinks> function. However, <ClLinks  term={"number"}><i>numbers</i></ClLinks> with the same value need not be <ClLinks  term={"eq"}><b>eq</b></ClLinks>, and two similar <ClLinks  term={"list"}><i>lists</i></ClLinks> are usually not <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



An implementation is permitted to make “copies” of <ClLinks  term={"character"}><i>characters</i></ClLinks> and <ClLinks  term={"number"}><i>numbers</i></ClLinks> at any time. The effect is that Common Lisp makes no guarantee that <ClLinks  term={"eq"}><b>eq</b></ClLinks> is true even when both its arguments are “the same thing” if that thing is a <ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"number"}><i>number</i></ClLinks> . 



Most Common Lisp <ClLinks  term={"operator"}><i>operators</i></ClLinks> use <ClLinks  term={"eql"}><b>eql</b></ClLinks> rather than <ClLinks  term={"eq"}><b>eq</b></ClLinks> to compare objects, or else they default to <ClLinks  term={"eql"}><b>eql</b></ClLinks> and only use <ClLinks  term={"eq"}><b>eq</b></ClLinks> if specifically requested to do so. However, the following <ClLinks  term={"operator"}><i>operators</i></ClLinks> are defined to use <ClLinks  term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks  term={"eql"}><b>eql</b></ClLinks> in a way that cannot be overridden by the <ClLinks  term={"code"}><i>code</i></ClLinks> which employs them: 



Data and Control 











|<p>**catch getf throw** </p><p>**get remf** </p><p>**get-properties remprop**</p>|

| :- |





**Figure 5–11. Operators that always prefer EQ over EQL** 



