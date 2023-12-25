*∗<DictionaryLink styled={true} term={"print-pretty"}><b>*print-pretty*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



Controls whether the *Lisp printer* calls the *pretty printer* . 



If it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *pretty printer* is not used and a minimum of <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> is output when printing an expression. 



If it is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the *pretty printer* is used, and the *Lisp printer* will endeavor to insert extra <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> where appropriate to make <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> more readable. 



<DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> has an effect even when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(setq \*print-pretty\* ’nil) *→* NIL 
(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil) 
▷ (LET ((A 1) (B 2) (C 3)) (+ A B C)) 
*→* NIL 
(let ((\*print-pretty\* t)) 
  (progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)) 
▷ (LET ((A 1) 
	▷ (B 2) 
	▷ (C 3)) 
    ▷ (+ A B C)) 
*→* NIL 
;; Note that the first two expressions printed by this next form 
;; differ from the second two only in whether escape characters are printed. ;; In all four cases, extra whitespace is inserted by the pretty printer. 
(flet ((test (x) 
	 (let ((\*print-pretty\* t)) 
	   (print x) 
	   (format t "~%~S " x) 
	   (terpri) (princ x) (princ " ") 
	   (format t "~%~A " x)))) 
  (test ’#’(lambda () (list "a" # ’c #’d)))) 
▷ #’(LAMBDA () 
      ▷ (LIST "a" # ’C #’D)) 
▷ #’(LAMBDA () 
      ▷ (LIST "a" # ’C #’D)) 
▷ #’(LAMBDA () 
      ▷ (LIST a b ’C #’D)) 
▷ #’(LAMBDA () 
      ▷ (LIST a b ’C #’D)) 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> 



