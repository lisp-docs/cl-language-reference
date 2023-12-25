**make-random-state** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-random-state"}><b>make-random-state</b></ClLinks> &amp;optional *state → new-state* 



**Arguments and Values:** 



*state*—a *random state*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-state*—a *random state object*. 



**Description:** 



Creates a *fresh object* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks> suitable for use as the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks>. 



If *state* is a *random state object*, the *new-state* is a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>5</sub> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. If *state* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the *new-state* is a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>5</sub> of the *current random state*. If *state* is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, the *new-state* is a *fresh random state object* that has been randomly initialized by some means. 



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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *state* is not a *random state*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"random"}><b>random</b></ClLinks>, <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks> 







 



 



**Notes:** 



One important use of <ClLinks styled={true} term={"make-random-state"}><b>make-random-state</b></ClLinks> is to allow the same series of pseudo-random <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> to be generated many times within a single program. 



