**with-package-iterator** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> (*name package-list-form* &amp;rest *symbol-types*) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*package-list-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated once to produce a *package-list*. 



*package-list*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a list of *package designators*. 



*symbol-type*—one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> :internal, :external, or :inherited. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Within the lexical scope of the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is defined via <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> such that successive invocations of (<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) will return the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, one by one, from the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in *package-list*. 



It is unspecified whether <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> inherited from multiple <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> are returned more than once. The order of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> returned does not necessarily reflect the order of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in *package-list*. When *package-list* has more than one element, it is unspecified whether duplicate <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are returned once or more than once. 



*Symbol-types* controls which <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are returned as follows: 



 



 



<ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> 



:internal 



The <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, but that are not <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>. 



:external 



The <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and are <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>. 



:inherited 



The <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks> by used <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> and that are not *shadowed*. 



When more than one argument is supplied for *symbol-types*, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is returned if its <ClLinks styled={true} term={"accessibility"}><i>accessibility</i></ClLinks> matches any one of the *symbol-types* supplied. Implementations may extend this syntax by recognizing additional symbol accessibility types. 



An invocation of (<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) returns four values as follows: 



1\. A flag that indicates whether a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is returned (true means that a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is returned). 2. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in one the indicated <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. 



3\. The accessibility type for that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; *i.e.*, one of the symbols :internal, :external, or :inherited. 



4\. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> from which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was obtained. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is one of the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> present or named in *package-list*. 



After all <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> have been returned by successive invocations of (<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>), then only one value is returned, namely <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



The meaning of the second, third, and fourth <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> is that the returned <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the returned <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in the way indicated by the second return value as follows: 



:internal 



Means <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> and not <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>. 



:external 



Means <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> and <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>. 



:inherited 



Means not <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> (thus not *shadowed*) but inherited from some used <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the <ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> form such as by returning some <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> over the invocation <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



Any number of invocations of <ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all those <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> have distinct names. 







 



 



<ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> 



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



<ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> if no *symbol-types* are supplied or if a *symbol-type* is not recognized by the implementation is supplied. 



The consequences are undefined if the local function named *name established* by 



 



 



<ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> is called after it has returned <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



