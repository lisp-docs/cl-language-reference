**when, unless** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> *test-form \{form\}*\* *→ \{result\}*\* 



<DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> *test-form \{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



*test-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a <DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> if the *test-form yields true* or in an <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> if the *test-form yields false*; otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> and <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> allow the execution of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> to be dependent on a single *test-form*. 



In a <DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, if the *test-form yields true*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are *evaluated* in order from left to right and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are returned from the <DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Otherwise, if the *test-form yields false*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are not *evaluated*, and the <DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 















**when, unless** 



In an <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, if the *test-form yields false*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are *evaluated* in order from left to right and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are returned from the <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Otherwise, if the *test-form yields false*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are not *evaluated*, and the <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(when t ’hello) *→* HELLO 
(unless t ’hello) *→* NIL 
(when nil ’hello) *→* NIL 
(unless nil ’hello) *→* HELLO 
(when t) *→* NIL 
(unless nil) *→* NIL 
(when t (prin1 1) (prin1 2) (prin1 3)) 
▷ 123 
*→* 3 
(unless t (prin1 1) (prin1 2) (prin1 3)) *→* NIL 
(when nil (prin1 1) (prin1 2) (prin1 3)) *→* NIL 
(unless nil (prin1 1) (prin1 2) (prin1 3)) 
▷ 123 
*→* 3 
(let ((x 3)) 
  (list (when (oddp x) (incf x) (list x)) 
	(when (oddp x) (incf x) (list x)) 
	(unless (oddp x) (incf x) (list x)) 
	(unless (oddp x) (incf x) (list x)) 
	(if (oddp x) (incf x) (list x)) 
	(if (oddp x) (incf x) (list x)) 
	(if (not (oddp x)) (incf x) (list x)) 
	(if (not (oddp x)) (incf x) (list x)))) 
*→* ((4) NIL (5) NIL 6 (6) 7 (7)) 

```
**See Also:** 



<DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink styled={true} term={"if"}><b>if</b></DictionaryLink>, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> 



**Notes:** 



(when *test \{form\}*<sup>+</sup>) *≡* (and *test* (progn <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (cond (*test \{form\}*<sup>+</sup>)) 



(when *test \{form\}*<sup>+</sup>) *≡* (if *test* (progn <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) nil) 



(when *test \{form\}*<sup>+</sup>) *≡* (unless (not *test*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) 



(unless *test \{form\}*<sup>+</sup>) *≡* (cond ((not *test*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (if *test* nil (progn <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>)) 



(unless *test \{form\}*<sup>+</sup>) *≡* (when (not *test*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm><sup>+</sup>) 



Data and Control 











