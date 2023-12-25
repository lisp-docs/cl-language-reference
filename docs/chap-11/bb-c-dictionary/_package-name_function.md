**package-name** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-name"}><b>package-name</b></DictionaryLink> *package → name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"package-name"}><b>package-name</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the *package designator* is a *package object* that has no name (see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>). 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(package-name \*package\*) *→* "COMMON-LISP-USER" 
(package-name (symbol-package :test)) *→* "KEYWORD" 
(package-name (find-package ’common-lisp)) *→* "COMMON-LISP" 
(defvar \*foo-package\* (make-package "FOO")) 



(rename-package "FOO" "FOO0") 
(package-name \*foo-package\*) *→* "FOO0" 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a *package designator* . 



