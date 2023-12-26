**symbol-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink> *symbol → contents* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*contents*—a *package object* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



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



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



**See Also:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> 



