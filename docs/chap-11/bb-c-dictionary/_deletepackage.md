**delete-package** *Function* 



**Syntax:** 



**delete-package** *package → generalized-boolean* 



**Arguments and Values:** 



*package*—a *package designator* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**delete-package** deletes *package* from all package system data structures. If the operation is successful, **delete-package** returns true, otherwise **nil**. The effect of **delete-package** is that the name and nicknames of *package* cease to be recognized package names. The package *object* is still a *package* (*i.e.*, **packagep** is *true* of it) but **package-name** returns **nil**. The consequences of deleting the COMMON-LISP *package* or the KEYWORD *package* are undefined. The consequences of invoking any other package operation on *package* once it has been deleted are unspecified. In particular, the consequences of invoking **find-symbol**, **intern** and other functions that look for a symbol name in 







 



 



**delete-package** 



a *package* are unspecified if they are called with **\*package\*** bound to the deleted *package* or with the deleted *package* as an argument. 



If *package* is a *package object* that has already been deleted, **delete-package** immediately returns **nil**. 



After this operation completes, the *home package* of any *symbol* whose *home package* had previously been *package* is *implementation-dependent*. Except for this, *symbols accessible* in *package* are not modified in any other way; *symbols* whose *home package* is not *package* remain unchanged. 



**Examples:**
```lisp
 

(setq \*foo-package\* (make-package "FOO" :use nil)) 

(setq \*foo-symbol\* (intern "FOO" \*foo-package\*)) 

(export \*foo-symbol\* \*foo-package\*) 

(setq \*bar-package\* (make-package "BAR" :use ’("FOO"))) 

(setq \*bar-symbol\* (intern "BAR" \*bar-package\*)) 

(export \*foo-symbol\* \*bar-package\*) 

(export \*bar-symbol\* \*bar-package\*) 

(setq \*baz-package\* (make-package "BAZ" :use ’("BAR"))) 

(symbol-package \*foo-symbol\*) *→* #<PACKAGE "FOO"> 

(symbol-package \*bar-symbol\*) *→* #<PACKAGE "BAR"> 

(prin1-to-string \*foo-symbol\*) *→* "FOO:FOO" 

(prin1-to-string \*bar-symbol\*) *→* "BAR:BAR" 

(find-symbol "FOO" \*bar-package\*) *→* FOO:FOO, :EXTERNAL 

(find-symbol "FOO" \*baz-package\*) *→* FOO:FOO, :INHERITED 

(find-symbol "BAR" \*baz-package\*) *→* BAR:BAR, :INHERITED 

(packagep \*foo-package\*) *→ true* 

(packagep \*bar-package\*) *→ true* 

(packagep \*baz-package\*) *→ true* 

(package-name \*foo-package\*) *→* "FOO" 

(package-name \*bar-package\*) *→* "BAR" 

(package-name \*baz-package\*) *→* "BAZ" 

(package-use-list \*foo-package\*) *→* () 

(package-use-list \*bar-package\*) *→* (#<PACKAGE "FOO">) 

(package-use-list \*baz-package\*) *→* (#<PACKAGE "BAR">) 



 

 

**delete-package** 

(package-used-by-list \*foo-package\*) *→* (#<PACKAGE "BAR">) 

(package-used-by-list \*bar-package\*) *→* (#<PACKAGE "BAZ">) 

(package-used-by-list \*baz-package\*) *→* () 

(delete-package \*bar-package\*) 

▷ Error: Package BAZ uses package BAR. 

▷ If continued, BAZ will be made to unuse-package BAR, 

▷ and then BAR will be deleted. 

▷ Type :CONTINUE to continue. 

▷ Debug> :CONTINUE 

*→* T 

(symbol-package \*foo-symbol\*) *→* #<PACKAGE "FOO"> 

(symbol-package \*bar-symbol\*) is unspecified 

(prin1-to-string \*foo-symbol\*) *→* "FOO:FOO" 

(prin1-to-string \*bar-symbol\*) is unspecified 

(find-symbol "FOO" \*bar-package\*) is unspecified 

(find-symbol "FOO" \*baz-package\*) *→* NIL, NIL 

(find-symbol "BAR" \*baz-package\*) *→* NIL, NIL 

(packagep \*foo-package\*) *→* T 

(packagep \*bar-package\*) *→* T 

(packagep \*baz-package\*) *→* T 

(package-name \*foo-package\*) *→* "FOO" 

(package-name \*bar-package\*) *→* NIL 

(package-name \*baz-package\*) *→* "BAZ" 

(package-use-list \*foo-package\*) *→* () 

(package-use-list \*bar-package\*) is unspecified 

(package-use-list \*baz-package\*) *→* () 

(package-used-by-list \*foo-package\*) *→* () 

(package-used-by-list \*bar-package\*) is unspecified 

(package-used-by-list \*baz-package\*) *→* () 


```
**Exceptional Situations:** 



If the *package designator* is a *name* that does not currently name a *package*, a *correctable* error of *type* **package-error** is signaled. If correction is attempted, no deletion action is attempted; instead, **delete-package** immediately returns **nil**. 



If *package* is used by other *packages*, a *correctable* error of *type* **package-error** is signaled. 



 



 



If correction is attempted, **unuse-package** is effectively called to remove any dependencies, causing *package*’s *external symbols* to cease being *accessible* to those *packages* that use *package*. **delete-package** then deletes *package* just as it would have had there been no *packages* that used it. 



**See Also:** 



**unuse-package** 



