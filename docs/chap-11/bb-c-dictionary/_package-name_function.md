**package-name** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> *package → name* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> returns the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that names <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> is a *package object* that has no name (see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>). 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



