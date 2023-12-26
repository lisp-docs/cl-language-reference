**eql** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



The value of <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks> of two objects, *x* and *y*, in the folowing cases: 



1\. If *x* and *y* are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



2\. If *x* and *y* are both <ClLinks  term={"number"}><i>numbers</i></ClLinks> of the same <ClLinks  term={"type"}><i>type</i></ClLinks> and the same value. 



3\. If they are both <ClLinks  term={"character"}><i>characters</i></ClLinks> that represent the same character. 



Otherwise the value of <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



If an implementation supports positive and negative zeros as <ClLinks  term={"distinct"}><i>distinct</i></ClLinks> values, then (eql 0.0 -0.0) returns <ClLinks  term={"false"}><i>false</i></ClLinks>. Otherwise, when the syntax -0.0 is read it is interpreted as the value 0.0, and so (eql 0.0 -0.0) returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



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



<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, <ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"char="}><b>char=</b></ClLinks> 



**Notes:** 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is the same as <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, except that if the arguments are <ClLinks  term={"character"}><i>characters</i></ClLinks> or <ClLinks  term={"number"}><i>numbers</i></ClLinks> of the same type then their values are compared. Thus <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> tells whether two <ClLinks  term={"object"}><i>objects</i></ClLinks> are conceptually the same, whereas <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> tells whether two <ClLinks  term={"object"}><i>objects</i></ClLinks> are implementationally identical. It is for this reason that <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, not <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, is the default comparison predicate for <ClLinks  term={"operator"}><i>operators</i></ClLinks> that take *sequences* as arguments. 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> may not be true of two <ClLinks  term={"float"}><i>floats</i></ClLinks> even when they represent the same value. <ClLinks  term={"="}><b>=</b></ClLinks> is used to compare mathematical values. 



Two <ClLinks  term={"complex"}><i>complex</i></ClLinks> numbers are considered to be <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> if their real parts are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> and their imaginary parts are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>. For example, (eql #C(4 5) #C(4 5)) is <ClLinks  term={"true"}><i>true</i></ClLinks> and (eql #C(4 5) #C(4.0 5.0)) is <ClLinks  term={"false"}><i>false</i></ClLinks>. Note that while (eql #C(5.0 0.0) 5.0) is <ClLinks  term={"false"}><i>false</i></ClLinks>, (eql #C(5 0) 5) is <ClLinks  term={"true"}><i>true</i></ClLinks>. In the case of 



(eql #C(5.0 0.0) 5.0) the two arguments are of different types, and so cannot satisfy <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>. In the case of (eql #C(5 0) 5), #C(5 0) is not a <ClLinks  term={"complex"}><i>complex</i></ClLinks> number, but is automatically reduced to the *integer* 5. 



