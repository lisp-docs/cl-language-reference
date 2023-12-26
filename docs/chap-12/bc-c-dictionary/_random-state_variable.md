*∗<DictionaryLink  term={"*random-state*"}><b>*random-state*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm>. 



**Initial Value:** 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The <GlossaryTerm styled={true} term={"current random state"}><i>current random state</i></GlossaryTerm>, which is used, for example, by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> when a <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> is not explicitly supplied. 







 



 



**Examples:**
```lisp
(random-state-p \*random-state\*) → true 
(setq snap-shot (make-random-state)) 
;; The series from any given point is random, 
;; but if you backtrack to that point, you get the same series. 
(list (loop for i from 1 to 10 collect (random)) 
      (let ((\*random-state\* snap-shot)) 
	(loop for i from 1 to 10 collect (random))) 
      (loop for i from 1 to 10 collect (random)) 
      (let ((\*random-state\* snap-shot)) 
	(loop for i from 1 to 10 collect (random)))) 
→ ((19 16 44 19 96 15 76 96 13 61) 
   (19 16 44 19 96 15 76 96 13 61) 
   (16 67 0 43 70 79 58 5 63 50) 
   (16 67 0 43 70 79 58 5 63 50)) 
```
**Affected By:** 



The <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



<DictionaryLink  term={"random"}><b>random</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"make-random-state"}><b>make-random-state</b></DictionaryLink>, <DictionaryLink  term={"random"}><b>random</b></DictionaryLink>, <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink> 



**Notes:** 



<ClLinks  term={"binding"}><i>Binding</i></ClLinks> <DictionaryLink  term={"random-state"}><b>\*random-state\*</b></DictionaryLink> to a different *random state object* correctly saves and restores the old *random state object*. 



