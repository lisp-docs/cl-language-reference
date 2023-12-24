**eql** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The value of <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of two objects, *x* and *y*, in the folowing cases: 



1\. If *x* and *y* are <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 



2\. If *x* and *y* are both <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and the same value. 



3\. If they are both <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that represent the same character. 



Otherwise the value of <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



If an implementation supports positive and negative zeros as <ClLinks styled={true} term={"distinct"}><i>distinct</i></ClLinks> values, then (eql 0.0 -0.0) returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. Otherwise, when the syntax -0.0 is read it is interpreted as the value 0.0, and so (eql 0.0 -0.0) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**Examples:**
```lisp

(eql ’a ’b) → false 
(eql ’a ’a) → true 
(eql 3 3) → true 
(eql 3 3.0) → false 
(eql 3.0 3.0) → true 
(eql #c(3 -4) #c(3 -4)) → true 
(eql #c(3 -4.0) #c(3 -4)) → false 
(eql (cons ’a ’b) (cons ’a ’c)) → false 



(eql (cons ’a ’b) (cons ’a ’b)) → false 
(eql ’(a . b) ’(a . b)) 
→ true 
<i><sup>or</sup>→ false</i> 
(progn (setq x (cons ’a ’b)) (eql x x)) → true 
(progn (setq x ’(a . b)) (eql x x)) → true 
(eql #\A #\A) → true 
(eql "Foo" "Foo") 
→ true 
<i><sup>or</sup>→ false</i> 
(eql "Foo" (copy-seq "Foo")) → false 
(eql "FOO" "foo") → false 
Normally (eql 1.0s0 1.0d0) is false, under the assumption that 1.0s0 and 1.0d0 are of distinct data types. However, implementations that do not provide four distinct floating-point formats are permitted to “collapse” the four formats into some smaller number of them; in such an implementation (eql 1.0s0 1.0d0) might be true. 

```
**See Also:** 



<ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>, <ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"char="}><b>char=</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> is the same as <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, except that if the arguments are <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> of the same type then their values are compared. Thus <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> tells whether two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are conceptually the same, whereas <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> tells whether two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are implementationally identical. It is for this reason that <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, not <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, is the default comparison predicate for <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> that take *sequences* as arguments. 



<ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> may not be true of two <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> even when they represent the same value. <ClLinks styled={true} term={"="}><b>=</b></ClLinks> is used to compare mathematical values. 



Two <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> numbers are considered to be <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> if their real parts are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> and their imaginary parts are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>. For example, (eql #C(4 5) #C(4 5)) is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and (eql #C(4 5) #C(4.0 5.0)) is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. Note that while (eql #C(5.0 0.0) 5.0) is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, (eql #C(5 0) 5) is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. In the case of 



(eql #C(5.0 0.0) 5.0) the two arguments are of different types, and so cannot satisfy <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>. In the case of (eql #C(5 0) 5), #C(5 0) is not a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> number, but is automatically reduced to the *integer* 5. 



