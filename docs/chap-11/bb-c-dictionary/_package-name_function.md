**package-name** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"package-name"}><b>package-name</b></ClLinks> *package → name* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"package-name"}><b>package-name</b></ClLinks> returns the <ClLinks  term={"string"}><i>string</i></ClLinks> that names <ClLinks  term={"package"}><i>package</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the *package designator* is a *package object* that has no name (see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks>). 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



