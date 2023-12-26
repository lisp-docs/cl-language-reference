**package-name** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> *package → name* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> returns the <ClLinks  term={"string"}><i>string</i></ClLinks> that names <ClLinks  term={"package"}><i>package</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> is a *package object* that has no name (see the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>). 



**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(package-name \*package\*) → "COMMON-LISP-USER" 
(package-name (symbol-package :test)) → "KEYWORD" 
(package-name (find-package ’common-lisp)) → "COMMON-LISP" 
(defvar \*foo-package\* (make-package "FOO")) 

(rename-package "FOO" "FOO0") 
(package-name \*foo-package\*) → "FOO0" 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



