**symbol-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink> *symbol → contents* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*contents*—a *package object* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns the *home package* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Examples:**
```lisp

(in-package "CL-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(symbol-package ’car) *→* #<PACKAGE "COMMON-LISP"> 
(symbol-package ’bus) *→* #<PACKAGE "COMMON-LISP-USER"> 
(symbol-package :optional) *→* #<PACKAGE "KEYWORD"> 
;; Gensyms are uninterned, so have no home package. 
(symbol-package (gensym)) *→* NIL 
(make-package ’pk1) *→* #<PACKAGE "PK1"> 
(intern "SAMPLE1" "PK1") *→* PK1::SAMPLE1, NIL 
(export (find-symbol "SAMPLE1" "PK1") "PK1") *→* T 
(make-package ’pk2 :use ’(pk1)) *→* #<PACKAGE "PK2"> 
(find-symbol "SAMPLE1" "PK2") *→* PK1:SAMPLE1, :INHERITED 
(symbol-package ’pk1::sample1) *→* #<PACKAGE "PK1"> 
(symbol-package ’pk2::sample1) *→* #<PACKAGE "PK1"> 
(symbol-package ’pk1::sample2) *→* #<PACKAGE "PK1"> 
(symbol-package ’pk2::sample2) *→* #<PACKAGE "PK2"> 
;; The next several forms create a scenario in which a symbol 
;; is not really uninterned, but is "apparently uninterned", 
;; and so SYMBOL-PACKAGE still returns NIL. 
(setq s3 ’pk1::sample3) *→* PK1::SAMPLE3 
(import s3 ’pk2) *→* T 
(unintern s3 ’pk1) *→* T 
(symbol-package s3) *→* NIL 
(eq s3 ’pk2::sample3) *→* T 

```
**Affected By:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> 



