**when, unless** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"when"}><b>when</b></ClLinks> *test-form \{form\}*\* → \{result\}\* 



<ClLinks  term={"unless"}><b>unless</b></ClLinks> *test-form \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



*test-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks> in a <ClLinks  term={"when"}><b>when</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> if the *test-form yields true* or in an <ClLinks  term={"unless"}><b>unless</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> if the *test-form yields false*; otherwise <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"when"}><b>when</b></ClLinks> and <ClLinks  term={"unless"}><b>unless</b></ClLinks> allow the execution of <ClLinks  term={"form"}><i>forms</i></ClLinks> to be dependent on a single *test-form*. 



In a <ClLinks  term={"when"}><b>when</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>, if the *test-form yields true*, the <ClLinks  term={"form"}><i>forms</i></ClLinks> are *evaluated* in order from left to right and the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks> are returned from the <ClLinks  term={"when"}><b>when</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. Otherwise, if the *test-form yields false*, the <ClLinks  term={"form"}><i>forms</i></ClLinks> are not *evaluated*, and the <ClLinks  term={"when"}><b>when</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 















<DictionaryLink styled={true} term={"when, unless"}><b>when, unless</b></DictionaryLink> 



In an <ClLinks  term={"unless"}><b>unless</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>, if the *test-form yields false*, the <ClLinks  term={"form"}><i>forms</i></ClLinks> are *evaluated* in order from left to right and the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks> are returned from the <ClLinks  term={"unless"}><b>unless</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. Otherwise, if the *test-form yields false*, the <ClLinks  term={"form"}><i>forms</i></ClLinks> are not *evaluated*, and the <ClLinks  term={"unless"}><b>unless</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(when t ’hello) → HELLO 
(unless t ’hello) → NIL 
(when nil ’hello) → NIL 
(unless nil ’hello) → HELLO 
(when t) → NIL 
(unless nil) → NIL 
(when t (prin1 1) (prin1 2) (prin1 3)) 
▷ 123 
→ 3 
(unless t (prin1 1) (prin1 2) (prin1 3)) → NIL 
(when nil (prin1 1) (prin1 2) (prin1 3)) → NIL 
(unless nil (prin1 1) (prin1 2) (prin1 3)) 
▷ 123 
→ 3 
(let ((x 3)) 
  (list (when (oddp x) (incf x) (list x)) 
	(when (oddp x) (incf x) (list x)) 
	(unless (oddp x) (incf x) (list x)) 
	(unless (oddp x) (incf x) (list x)) 
	(if (oddp x) (incf x) (list x)) 
	(if (oddp x) (incf x) (list x)) 
	(if (not (oddp x)) (incf x) (list x)) 
	(if (not (oddp x)) (incf x) (list x)))) 
→ ((4) NIL (5) NIL 6 (6) 7 (7)) 
```
**See Also:** 



<ClLinks  term={"and"}><b>and</b></ClLinks>, <ClLinks  term={"cond"}><b>cond</b></ClLinks>, <ClLinks  term={"if"}><b>if</b></ClLinks>, <ClLinks  term={"or"}><b>or</b></ClLinks> 



**Notes:** 



(when *test \{form\}*<sup>+</sup>) *≡* (and *test* (progn <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (cond (*test \{form\}*<sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (if *test* (progn <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>) nil) 



(when *test \{form\}*<sup>+</sup>) *≡* (unless (not *test*) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>) 



(unless *test \{form\}*<sup>+</sup>) *≡* (cond ((not *test*) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (if *test* nil (progn <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (when (not *test*) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks><sup>+</sup>) 



Data and Control 











