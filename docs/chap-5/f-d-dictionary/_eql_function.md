**eql** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The value of <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of two objects, *x* and *y*, in the folowing cases: 



1\. If *x* and *y* are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



2\. If *x* and *y* are both <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and the same value. 



3\. If they are both <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that represent the same character. 



Otherwise the value of <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



If an implementation supports positive and negative zeros as <GlossaryTerm styled={true} term={"distinct"}><i>distinct</i></GlossaryTerm> values, then (eql 0.0 -0.0) returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. Otherwise, when the syntax -0.0 is read it is interpreted as the value 0.0, and so (eql 0.0 -0.0) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp

(eql ’a ’b) *→ false* 
(eql ’a ’a) *→ true* 
(eql 3 3) *→ true* 
(eql 3 3.0) *→ false* 
(eql 3.0 3.0) *→ true* 
(eql #c(3 -4) #c(3 -4)) *→ true* 
(eql #c(3 -4.0) #c(3 -4)) *→ false* 
(eql (cons ’a ’b) (cons ’a ’c)) *→ false* 



(eql (cons ’a ’b) (cons ’a ’b)) *→ false* 
(eql ’(a . b) ’(a . b)) 
*→ true* 
<i><sup>or</sup>→ false</i> 
(progn (setq x (cons ’a ’b)) (eql x x)) *→ true* 
(progn (setq x ’(a . b)) (eql x x)) *→ true* 
(eql #\A #\A) *→ true* 
(eql "Foo" "Foo") 
*→ true* 
<i><sup>or</sup>→ false</i> 
(eql "Foo" (copy-seq "Foo")) *→ false* 
(eql "FOO" "foo") *→ false* 
Normally (eql 1.0s0 1.0d0) is false, under the assumption that 1.0s0 and 1.0d0 are of distinct data types. However, implementations that do not provide four distinct floating-point formats are permitted to “collapse” the four formats into some smaller number of them; in such an implementation (eql 1.0s0 1.0d0) might be true. 

```
**See Also:** 



<DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>, <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is the same as <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, except that if the arguments are <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> of the same type then their values are compared. Thus <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> tells whether two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are conceptually the same, whereas <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> tells whether two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are implementationally identical. It is for this reason that <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, not <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, is the default comparison predicate for <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> that take *sequences* as arguments. 



<DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> may not be true of two <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm> even when they represent the same value. <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is used to compare mathematical values. 



Two <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> numbers are considered to be <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> if their real parts are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> and their imaginary parts are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>. For example, (eql #C(4 5) #C(4 5)) is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and (eql #C(4 5) #C(4.0 5.0)) is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. Note that while (eql #C(5.0 0.0) 5.0) is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, (eql #C(5 0) 5) is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. In the case of 



(eql #C(5.0 0.0) 5.0) the two arguments are of different types, and so cannot satisfy <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>. In the case of (eql #C(5 0) 5), #C(5 0) is not a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number, but is automatically reduced to the *integer* 5. 



