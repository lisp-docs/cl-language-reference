**make-random-state** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-random-state"}><b>make-random-state</b></DictionaryLink> &amp;optional *state → new-state* 



**Arguments and Values:** 



*state*—a *random state*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-state*—a *random state object*. 



**Description:** 



Creates a *fresh object* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink> suitable for use as the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink>. 



If *state* is a *random state object*, the *new-state* is a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. If *state* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the *new-state* is a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of the *current random state*. If *state* is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, the *new-state* is a *fresh random state object* that has been randomly initialized by some means. 



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
*→* ((29 25 72 57 55 68 24 35 54 65) 
     (29 25 72 57 55 68 24 35 54 65) 
     (93 85 53 99 58 62 2 23 23 59) 
     (93 85 53 99 58 62 2 23 23 59) 
     (68 24 35 54 65 54 55 50 59 49)) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *state* is not a *random state*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>, <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink> 







 



 



**Notes:** 



One important use of <DictionaryLink styled={true} term={"make-random-state"}><b>make-random-state</b></DictionaryLink> is to allow the same series of pseudo-random <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> to be generated many times within a single program. 



