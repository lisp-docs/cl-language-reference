**identity** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> *object → object* 



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



<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> is intended for use with functions that require a <ClLinks  term={"function"}><i>function</i></ClLinks> as an argument. 



(eql x (identity x)) returns <ClLinks  term={"true"}><i>true</i></ClLinks> for all possible values of *x*, but (eq x (identity x)) might return <ClLinks  term={"false"}><i>false</i></ClLinks> when *x* is a <ClLinks  term={"number"}><i>number</i></ClLinks> or <ClLinks  term={"character"}><i>character</i></ClLinks> . 















<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> could be defined by 



(defun identity (x) x) 



