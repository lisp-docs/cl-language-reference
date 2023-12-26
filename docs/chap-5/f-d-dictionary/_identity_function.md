**identity** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> *object → object* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Returns its argument <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Examples:**
```lisp
(identity 101) → 101 
(mapcan #’identity (list (list 1 2 3) ’(4 5 6))) → (1 2 3 4 5 6) 
```
**Notes:** 



<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> is intended for use with functions that require a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> as an argument. 



(eql x (identity x)) returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> for all possible values of *x*, but (eq x (identity x)) might return <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> when *x* is a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> or <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 















<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> could be defined by 



(defun identity (x) x) 



