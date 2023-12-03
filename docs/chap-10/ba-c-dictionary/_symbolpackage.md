**symbol-package** *Function* 

**Syntax:** 

**symbol-package** *symbol → contents* 

**Arguments and Values:** 

*symbol*—a *symbol*. 

*contents*—a *package object* or **nil**. 

**Description:** 

Returns the *home package* of *symbol*. 

**Examples:** 

(in-package "CL-USER") *→* #&#60;PACKAGE "COMMON-LISP-USER"&#62; 

(symbol-package ’car) *→* #&#60;PACKAGE "COMMON-LISP"&#62; 

(symbol-package ’bus) *→* #&#60;PACKAGE "COMMON-LISP-USER"&#62; 

(symbol-package :optional) *→* #&#60;PACKAGE "KEYWORD"&#62; 

;; Gensyms are uninterned, so have no home package. 

(symbol-package (gensym)) *→* NIL 

(make-package ’pk1) *→* #&#60;PACKAGE "PK1"&#62; 

(intern "SAMPLE1" "PK1") *→* PK1::SAMPLE1, NIL 

(export (find-symbol "SAMPLE1" "PK1") "PK1") *→* T 

(make-package ’pk2 :use ’(pk1)) *→* #&#60;PACKAGE "PK2"&#62; 

(find-symbol "SAMPLE1" "PK2") *→* PK1:SAMPLE1, :INHERITED 

(symbol-package ’pk1::sample1) *→* #&#60;PACKAGE "PK1"&#62; 

(symbol-package ’pk2::sample1) *→* #&#60;PACKAGE "PK1"&#62; 

(symbol-package ’pk1::sample2) *→* #&#60;PACKAGE "PK1"&#62; 

(symbol-package ’pk2::sample2) *→* #&#60;PACKAGE "PK2"&#62; 

;; The next several forms create a scenario in which a symbol 

;; is not really uninterned, but is "apparently uninterned", 

;; and so SYMBOL-PACKAGE still returns NIL. 

(setq s3 ’pk1::sample3) *→* PK1::SAMPLE3 

(import s3 ’pk2) *→* T 

(unintern s3 ’pk1) *→* T 

(symbol-package s3) *→* NIL 

(eq s3 ’pk2::sample3) *→* T 

**Affected By:** 

**import**, **intern**, **unintern** 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



 

 

**See Also:** 

**intern** 

