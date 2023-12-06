**with-package-iterator** *Macro* 



**Syntax:** 



**with-package-iterator** (*name package-list-form* &amp;rest *symbol-types*) *\{declaration\}*\* *\{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



*name*—a *symbol*. 



*package-list-form*—a *form*; evaluated once to produce a *package-list*. 



*package-list*—a *designator* for a list of *package designators*. 



*symbol-type*—one of the *symbols* :internal, :external, or :inherited. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* of the *forms*. 



**Description:** 



Within the lexical scope of the body *forms*, the *name* is defined via **macrolet** such that successive invocations of (*name*) will return the *symbols*, one by one, from the *packages* in *package-list*. 



It is unspecified whether *symbols* inherited from multiple *packages* are returned more than once. The order of *symbols* returned does not necessarily reflect the order of *packages* in *package-list*. When *package-list* has more than one element, it is unspecified whether duplicate *symbols* are returned once or more than once. 



*Symbol-types* controls which *symbols* that are *accessible* in a *package* are returned as follows: 



 



 



**with-package-iterator** 



:internal 



The *symbols* that are *present* in the *package*, but that are not *exported*. 



:external 



The *symbols* that are *present* in the *package* and are *exported*. 



:inherited 



The *symbols* that are *exported* by used *packages* and that are not *shadowed*. 



When more than one argument is supplied for *symbol-types*, a *symbol* is returned if its *accessibility* matches any one of the *symbol-types* supplied. Implementations may extend this syntax by recognizing additional symbol accessibility types. 



An invocation of (*name*) returns four values as follows: 



1\. A flag that indicates whether a *symbol* is returned (true means that a *symbol* is returned). 2. A *symbol* that is *accessible* in one the indicated *packages*. 



3\. The accessibility type for that *symbol*; *i.e.*, one of the symbols :internal, :external, or :inherited. 



4\. The *package* from which the *symbol* was obtained. The *package* is one of the *packages* present or named in *package-list*. 



After all *symbols* have been returned by successive invocations of (*name*), then only one value is returned, namely **nil**. 



The meaning of the second, third, and fourth *values* is that the returned *symbol* is *accessible* in the returned *package* in the way indicated by the second return value as follows: 



:internal 



Means *present* and not *exported*. 



:external 



Means *present* and *exported*. 



:inherited 



Means not *present* (thus not *shadowed*) but inherited from some used *package*. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the **with-package-iterator** form such as by returning some *closure* over the invocation *form*. 



Any number of invocations of **with-package-iterator** can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all those *macros* have distinct names. 







 



 



**with-package-iterator** 



**Examples:**
```lisp
 



The following function should return **t** on any *package*, and signal an error if the usage of **with-package-iterator** does not agree with the corresponding usage of **do-symbols**. 



(defun test-package-iterator (package) 



(unless (packagep package) 



(setq package (find-package package))) 



(let ((all-entries ’()) 



(generated-entries ’())) 



(do-symbols (x package) 



(multiple-value-bind (symbol accessibility) 



(find-symbol (symbol-name x) package) 



(push (list symbol accessibility) all-entries))) 



(with-package-iterator (generator-fn package 



:internal :external :inherited) 



(loop 



(multiple-value-bind (more? symbol accessibility pkg) 



(generator-fn) 



(unless more? (return)) 



(let ((l (multiple-value-list (find-symbol (symbol-name symbol) 



package)))) 



(unless (equal l (list symbol accessibility)) 



(error "Symbol &#126;S not found as &#126;S in package &#126;A [&#126;S]" 



symbol accessibility (package-name package) l)) 



(push l generated-entries))))) 



(unless (and (subsetp all-entries generated-entries :test #’equal) 



(subsetp generated-entries all-entries :test #’equal)) 



(error "Generated entries and Do-Symbols entries don’t correspond")) 



t)) 



The following function prints out every *present symbol* (possibly more than once): 



(defun print-all-symbols () 



(with-package-iterator (next-symbol (list-all-packages) 



:internal :external) 



(loop 



(multiple-value-bind (more? symbol) (next-symbol) 



(if more? 



(print symbol) 



(return)))))) 




```
**Exceptional Situations:** 



**with-package-iterator** signals an error of *type* **program-error** if no *symbol-types* are supplied or if a *symbol-type* is not recognized by the implementation is supplied. 



The consequences are undefined if the local function named *name established* by 



 



 



**with-package-iterator** is called after it has returned *false* as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



