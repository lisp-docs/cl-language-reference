**make-random-state** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-random-state"}><b>make-random-state</b></DictionaryLink> &amp;optional *state → new-state* 



**Arguments and Values:** 



*state*—a <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*new-state*—a *random state object*. 



**Description:** 



Creates a *fresh object* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink> suitable for use as the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"random-state"}><b>\*random-state\*</b></DictionaryLink>. 



If *state* is a *random state object*, the *new-state* is a <GlossaryTerm  term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. If *state* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the *new-state* is a <GlossaryTerm  term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of the <GlossaryTerm styled={true} term={"current random state"}><i>current random state</i></GlossaryTerm>. If *state* is <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, the *new-state* is a *fresh random state object* that has been randomly initialized by some means. 



**Examples:**
```lisp
(let\* ((rs1 (make-random-state nil)) 
	(rs2 (make-random-state t)) 
	(rs3 (make-random-state rs2)) 
	(rs4 nil)) 
       (list (loop for i from 1 to 10 
		   collect (random 100) 
		   when (= i 5) 
		   do (setq rs4 (make-random-state))) 
	     (loop for i from 1 to 10 collect (random 100 rs1)) 
	     (loop for i from 1 to 10 collect (random 100 rs2)) 
	     (loop for i from 1 to 10 collect (random 100 rs3)) 
	     (loop for i from 1 to 10 collect (random 100 rs4)))) 
→ ((29 25 72 57 55 68 24 35 54 65) 
   (29 25 72 57 55 68 24 35 54 65) 
   (93 85 53 99 58 62 2 23 23 59) 
   (93 85 53 99 58 62 2 23 23 59) 
   (68 24 35 54 65 54 55 50 59 49)) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *state* is not a <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"random"}><b>random</b></DictionaryLink>, <DictionaryLink  term={"random-state"}><b>\*random-state\*</b></DictionaryLink> 







 



 



**Notes:** 



One important use of <DictionaryLink  term={"make-random-state"}><b>make-random-state</b></DictionaryLink> is to allow the same series of pseudo-random <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> to be generated many times within a single program. 



