**eql** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



The value of <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of two objects, *x* and *y*, in the folowing cases: 



1\. If *x* and *y* are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



2\. If *x* and *y* are both <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and the same value. 



3\. If they are both <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that represent the same character. 



Otherwise the value of <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



If an implementation supports positive and negative zeros as <GlossaryTerm  term={"distinct"}><i>distinct</i></GlossaryTerm> values, then (eql 0.0 -0.0) returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Otherwise, when the syntax -0.0 is read it is interpreted as the value 0.0, and so (eql 0.0 -0.0) returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



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



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is the same as <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, except that if the arguments are <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> or <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> of the same type then their values are compared. Thus <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> tells whether two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are conceptually the same, whereas <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> tells whether two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are implementationally identical. It is for this reason that <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, not <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, is the default comparison predicate for <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> that take *sequences* as arguments. 



<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> may not be true of two <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm> even when they represent the same value. <ClLinks  term={"="}><b>=</b></ClLinks> is used to compare mathematical values. 



Two <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> numbers are considered to be <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> if their real parts are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> and their imaginary parts are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>. For example, (eql #C(4 5) #C(4 5)) is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and (eql #C(4 5) #C(4.0 5.0)) is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Note that while (eql #C(5.0 0.0) 5.0) is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, (eql #C(5 0) 5) is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. In the case of 



(eql #C(5.0 0.0) 5.0) the two arguments are of different types, and so cannot satisfy <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>. In the case of (eql #C(5 0) 5), #C(5 0) is not a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> number, but is automatically reduced to the *integer* 5. 



