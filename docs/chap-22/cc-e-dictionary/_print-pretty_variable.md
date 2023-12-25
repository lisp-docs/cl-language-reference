*∗<ClLinks styled={true} term={"print-pretty"}><b>*print-pretty*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



Controls whether the *Lisp printer* calls the *pretty printer* . 



If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *pretty printer* is not used and a minimum of <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> is output when printing an expression. 



If it is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the *pretty printer* is used, and the *Lisp printer* will endeavor to insert extra <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> where appropriate to make <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> more readable. 



<ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> has an effect even when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 







 



 



**Examples:**
```lisp
(setq \*print-pretty\* ’nil) → NIL 
(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil) 
▷ (LET ((A 1) (B 2) (C 3)) (+ A B C)) 
→ NIL 
(let ((\*print-pretty\* t)) 
  (progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)) 
▷ (LET ((A 1) 
	▷ (B 2) 
	▷ (C 3)) 
    ▷ (+ A B C)) 
→ NIL 
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
→ NIL 
```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> 



