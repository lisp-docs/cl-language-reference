**symbol-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"symbol-package"}><b>symbol-package</b></ClLinks> *symbol → contents* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*contents*—a *package object* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns the *home package* of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Examples:**
```lisp
(in-package "CL-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(symbol-package ’car) → #<PACKAGE "COMMON-LISP"> 
(symbol-package ’bus) → #<PACKAGE "COMMON-LISP-USER"> 
(symbol-package :optional) → #<PACKAGE "KEYWORD"> 
;; Gensyms are uninterned, so have no home package. 
(symbol-package (gensym)) → NIL 
(make-package ’pk1) → #<PACKAGE "PK1"> 
(intern "SAMPLE1" "PK1") → PK1::SAMPLE1, NIL 
(export (find-symbol "SAMPLE1" "PK1") "PK1") → T 
(make-package ’pk2 :use ’(pk1)) → #<PACKAGE "PK2"> 
(find-symbol "SAMPLE1" "PK2") → PK1:SAMPLE1, :INHERITED 
(symbol-package ’pk1::sample1) → #<PACKAGE "PK1"> 
(symbol-package ’pk2::sample1) → #<PACKAGE "PK1"> 
(symbol-package ’pk1::sample2) → #<PACKAGE "PK1"> 
(symbol-package ’pk2::sample2) → #<PACKAGE "PK2"> 
;; The next several forms create a scenario in which a symbol 
;; is not really uninterned, but is "apparently uninterned", 
;; and so SYMBOL-PACKAGE still returns NIL. 
(setq s3 ’pk1::sample3) → PK1::SAMPLE3 
(import s3 ’pk2) → T 
(unintern s3 ’pk1) → T 
(symbol-package s3) → NIL 
(eq s3 ’pk2::sample3) → T 
```
**Affected By:** 



<ClLinks  term={"import"}><b>import</b></ClLinks>, <ClLinks  term={"intern"}><b>intern</b></ClLinks>, <ClLinks  term={"unintern"}><b>unintern</b></ClLinks> 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks  term={"intern"}><b>intern</b></ClLinks> 



