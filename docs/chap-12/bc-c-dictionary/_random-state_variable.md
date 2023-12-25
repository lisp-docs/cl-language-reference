*∗<DictionaryLink styled={true} term={"*random-state*"}><b>*random-state*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *random state*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The *current random state*, which is used, for example, by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> when a *random state* is not explicitly supplied. 







 



 



**Examples:**
```lisp

(random-state-p \*random-state\*) *→ true* 
(setq snap-shot (make-random-state)) 
;; The series from any given point is random, 
;; but if you backtrack to that point, you get the same series. 
(list (loop for i from 1 to 10 collect (random)) 
      (let ((\*random-state\* snap-shot)) 
	(loop for i from 1 to 10 collect (random))) 
      (loop for i from 1 to 10 collect (random)) 
      (let ((\*random-state\* snap-shot)) 
	(loop for i from 1 to 10 collect (random)))) 
*→* ((19 16 44 19 96 15 76 96 13 61) 
     (19 16 44 19 96 15 76 96 13 61) 
     (16 67 0 43 70 79 58 5 63 50) 
     (16 67 0 43 70 79 58 5 63 50)) 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-random-state"}><b>make-random-state</b></DictionaryLink>, <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>, <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"binding"}><i>Binding</i></GlossaryTerm> <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink> to a different *random state object* correctly saves and restores the old *random state object*. 



