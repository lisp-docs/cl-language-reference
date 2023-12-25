**eq** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are the same, identical <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 

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



<ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>, <ClLinks styled={true} term={"="}><b>=</b></ClLinks>, Section 3.2 (Compilation) 



**Notes:** 



<ClLinks styled={true} term={"object"}><i>Objects</i></ClLinks> that appear the same when printed are not necessarily <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to each other. <ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> that print the same usually are <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to each other because of the use of the <ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> function. However, <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> with the same value need not be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, and two similar <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> are usually not <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. 



An implementation is permitted to make “copies” of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> and <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> at any time. The effect is that Common Lisp makes no guarantee that <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> is true even when both its arguments are “the same thing” if that thing is a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



Most Common Lisp <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> use <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> rather than <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to compare objects, or else they default to <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> and only use <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> if specifically requested to do so. However, the following <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> are defined to use <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> in a way that cannot be overridden by the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> which employs them: 



Data and Control 











|<p>**catch getf throw** </p><p>**get remf** </p><p>**get-properties remprop**</p>|

| :- |





**Figure 5–11. Operators that always prefer EQ over EQL** 



