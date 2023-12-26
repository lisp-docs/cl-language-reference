**when, unless** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"when"}><b>when</b></DictionaryLink> *test-form \{form\}*\* → \{result\}\* 



<DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> *test-form \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



*test-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in a <DictionaryLink  term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> if the *test-form yields true* or in an <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> if the *test-form yields false*; otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"when"}><b>when</b></DictionaryLink> and <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> allow the execution of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be dependent on a single *test-form*. 



In a <DictionaryLink  term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, if the *test-form yields true*, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are *evaluated* in order from left to right and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are returned from the <DictionaryLink  term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Otherwise, if the *test-form yields false*, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are not *evaluated*, and the <DictionaryLink  term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 















<DictionaryLink styled={true} term={"when, unless"}><b>when, unless</b></DictionaryLink> 



In an <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, if the *test-form yields false*, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are *evaluated* in order from left to right and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are returned from the <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Otherwise, if the *test-form yields false*, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are not *evaluated*, and the <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink  term={"if"}><b>if</b></DictionaryLink>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> 



**Notes:** 



(when *test \{form\}*<sup>+</sup>) *≡* (and *test* (progn <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (cond (*test \{form\}*<sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (if *test* (progn <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) nil) 



(when *test \{form\}*<sup>+</sup>) *≡* (unless (not *test*) <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) 



(unless *test \{form\}*<sup>+</sup>) *≡* (cond ((not *test*) <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (if *test* nil (progn <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (when (not *test*) <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) 



Data and Control 











