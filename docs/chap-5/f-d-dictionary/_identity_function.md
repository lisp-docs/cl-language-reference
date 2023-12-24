**identity** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"identity"}><b>identity</b></ClLinks> *object → object* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Returns its argument <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Examples:**
```lisp

(identity 101) → 101 
(mapcan #’identity (list (list 1 2 3) ’(4 5 6))) → (1 2 3 4 5 6) 

```
**Notes:** 



<ClLinks styled={true} term={"identity"}><b>identity</b></ClLinks> is intended for use with functions that require a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> as an argument. 



(eql x (identity x)) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> for all possible values of *x*, but (eq x (identity x)) might return <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> when *x* is a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> or <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 















<ClLinks styled={true} term={"identity"}><b>identity</b></ClLinks> could be defined by 



(defun identity (x) x) 



