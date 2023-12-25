**identity** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"identity"}><b>identity</b></ClLinks> *object → object* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Returns its argument <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Examples:**
```lisp
(identity 101) → 101 
(mapcan #’identity (list (list 1 2 3) ’(4 5 6))) → (1 2 3 4 5 6) 
```
**Notes:** 



<ClLinks  term={"identity"}><b>identity</b></ClLinks> is intended for use with functions that require a <ClLinks  term={"function"}><i>function</i></ClLinks> as an argument. 



(eql x (identity x)) returns <ClLinks  term={"true"}><i>true</i></ClLinks> for all possible values of *x*, but (eq x (identity x)) might return <ClLinks  term={"false"}><i>false</i></ClLinks> when *x* is a <ClLinks  term={"number"}><i>number</i></ClLinks> or <ClLinks  term={"character"}><i>character</i></ClLinks> . 















<ClLinks  term={"identity"}><b>identity</b></ClLinks> could be defined by 



(defun identity (x) x) 



