**with-package-iterator** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> (*name package-list-form* &amp;rest *symbol-types*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*package-list-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated once to produce a *package-list*. 



*package-list*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a list of *package designators*. 



*symbol-type*—one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> :internal, :external, or :inherited. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Within the lexical scope of the body <ClLinks  term={"form"}><i>forms</i></ClLinks>, the <ClLinks  term={"name"}><i>name</i></ClLinks> is defined via <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> such that successive invocations of (<ClLinks  term={"name"}><i>name</i></ClLinks>) will return the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, one by one, from the <ClLinks  term={"package"}><i>packages</i></ClLinks> in *package-list*. 



It is unspecified whether <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> inherited from multiple <ClLinks  term={"package"}><i>packages</i></ClLinks> are returned more than once. The order of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> returned does not necessarily reflect the order of <ClLinks  term={"package"}><i>packages</i></ClLinks> in *package-list*. When *package-list* has more than one element, it is unspecified whether duplicate <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are returned once or more than once. 



*Symbol-types* controls which <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> are returned as follows: 



 



 



<ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> 



:internal 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks  term={"present"}><i>present</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>, but that are not <ClLinks  term={"exported"}><i>exported</i></ClLinks>. 



:external 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks  term={"present"}><i>present</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> and are <ClLinks  term={"exported"}><i>exported</i></ClLinks>. 



:inherited 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks  term={"exported"}><i>exported</i></ClLinks> by used <ClLinks  term={"package"}><i>packages</i></ClLinks> and that are not *shadowed*. 



When more than one argument is supplied for *symbol-types*, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is returned if its <ClLinks  term={"accessibility"}><i>accessibility</i></ClLinks> matches any one of the *symbol-types* supplied. Implementations may extend this syntax by recognizing additional symbol accessibility types. 



An invocation of (<ClLinks  term={"name"}><i>name</i></ClLinks>) returns four values as follows: 



1\. A flag that indicates whether a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is returned (true means that a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is returned). 2. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in one the indicated <ClLinks  term={"package"}><i>packages</i></ClLinks>. 



3\. The accessibility type for that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>; *i.e.*, one of the symbols :internal, :external, or :inherited. 



4\. The <ClLinks  term={"package"}><i>package</i></ClLinks> from which the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was obtained. The <ClLinks  term={"package"}><i>package</i></ClLinks> is one of the <ClLinks  term={"package"}><i>packages</i></ClLinks> present or named in *package-list*. 



After all <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> have been returned by successive invocations of (<ClLinks  term={"name"}><i>name</i></ClLinks>), then only one value is returned, namely <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



The meaning of the second, third, and fourth <ClLinks  term={"value"}><i>values</i></ClLinks> is that the returned <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the returned <ClLinks  term={"package"}><i>package</i></ClLinks> in the way indicated by the second return value as follows: 



:internal 



Means <ClLinks  term={"present"}><i>present</i></ClLinks> and not <ClLinks  term={"exported"}><i>exported</i></ClLinks>. 



:external 



Means <ClLinks  term={"present"}><i>present</i></ClLinks> and <ClLinks  term={"exported"}><i>exported</i></ClLinks>. 



:inherited 



Means not <ClLinks  term={"present"}><i>present</i></ClLinks> (thus not *shadowed*) but inherited from some used <ClLinks  term={"package"}><i>package</i></ClLinks>. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the <ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> form such as by returning some <ClLinks  term={"closure"}><i>closure</i></ClLinks> over the invocation <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Any number of invocations of <ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all those <ClLinks  term={"macro"}><i>macros</i></ClLinks> have distinct names. 







 



 



<ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> 



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
	     (error "Symbol ~S not found as ~S in package ~A [~S]" 
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



<ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> if no *symbol-types* are supplied or if a *symbol-type* is not recognized by the implementation is supplied. 



The consequences are undefined if the local function named *name established* by 



 



 



<ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> is called after it has returned <ClLinks  term={"false"}><i>false</i></ClLinks> as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



