**symbol-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks> *symbol → contents* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*contents*—a *package object* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns the *home package* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



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



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, <ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> 



