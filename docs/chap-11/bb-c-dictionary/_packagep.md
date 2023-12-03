**packagep** *Function* 

**Syntax:** 

**packagep** *object → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is of *type* **package**; otherwise, returns *false*. 

**Examples:** 

(packagep \*package\*) *→ true* 

(packagep ’common-lisp) *→ false* 

(packagep (find-package ’common-lisp)) *→ true* 

**Notes:** 

(packagep *object*) *≡* (typep *object* ’package) 

*∗***package***∗ Variable* 

**Value Type:** 

a *package object*. 

**Initial Value:** 

the COMMON-LISP-USER *package*. 

**Description:** 

Whatever *package object* is currently the *value* of **\*package\*** is referred to as the *current package*. **Examples:** 

(in-package "COMMON-LISP-USER") *→* #&#60;PACKAGE "COMMON-LISP-USER"&#62; 

\*package\* *→* #&#60;PACKAGE "COMMON-LISP-USER"&#62; 

(make-package "SAMPLE-PACKAGE" :use ’("COMMON-LISP")) 

*→* #&#60;PACKAGE "SAMPLE-PACKAGE"&#62; 

(list 



 

 

(symbol-package 

(let ((\*package\* (find-package ’sample-package))) 

(setq \*some-symbol\* (read-from-string "just-testing")))) 

\*package\*) 

*→* (#&#60;PACKAGE "SAMPLE-PACKAGE"&#62; #&#60;PACKAGE "COMMON-LISP-USER"&#62;) 

(list (symbol-package (read-from-string "just-testing")) 

\*package\*) 

*→* (#&#60;PACKAGE "COMMON-LISP-USER"&#62; #&#60;PACKAGE "COMMON-LISP-USER"&#62;) 

(eq ’foo (intern "FOO")) *→ true* 

(eq ’foo (let ((\*package\* (find-package ’sample-package))) 

(intern "FOO"))) 

*→ false* 

**Affected By:** 

**load**, **compile-file**, **in-package** 

**See Also:** 

**compile-file**, **in-package**, **load**, **package** 

