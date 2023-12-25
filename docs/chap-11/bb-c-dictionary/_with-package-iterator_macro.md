**with-package-iterator** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> (*name package-list-form* &amp;rest *symbol-types*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*package-list-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated once to produce a *package-list*. 



*package-list*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a list of *package designators*. 



*symbol-type*—one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> :internal, :external, or :inherited. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Within the lexical scope of the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is defined via <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> such that successive invocations of (<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>) will return the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, one by one, from the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in *package-list*. 



It is unspecified whether <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> inherited from multiple <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> are returned more than once. The order of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> returned does not necessarily reflect the order of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in *package-list*. When *package-list* has more than one element, it is unspecified whether duplicate <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are returned once or more than once. 



*Symbol-types* controls which <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are returned as follows: 



 



 



<DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> 



:internal 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but that are not <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. 



:external 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and are <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. 



:inherited 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm> by used <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> and that are not *shadowed*. 



When more than one argument is supplied for *symbol-types*, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is returned if its <GlossaryTerm styled={true} term={"accessibility"}><i>accessibility</i></GlossaryTerm> matches any one of the *symbol-types* supplied. Implementations may extend this syntax by recognizing additional symbol accessibility types. 



An invocation of (<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>) returns four values as follows: 



1\. A flag that indicates whether a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is returned (true means that a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is returned). 2. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in one the indicated <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. 



3\. The accessibility type for that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; *i.e.*, one of the symbols :internal, :external, or :inherited. 



4\. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> from which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was obtained. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is one of the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> present or named in *package-list*. 



After all <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> have been returned by successive invocations of (<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>), then only one value is returned, namely <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



The meaning of the second, third, and fourth <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> is that the returned <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the returned <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in the way indicated by the second return value as follows: 



:internal 



Means <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> and not <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. 



:external 



Means <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. 



:inherited 



Means not <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> (thus not *shadowed*) but inherited from some used <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the <DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> form such as by returning some <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> over the invocation <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Any number of invocations of <DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all those <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> have distinct names. 







 



 



<DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> 



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



<DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> if no *symbol-types* are supplied or if a *symbol-type* is not recognized by the implementation is supplied. 



The consequences are undefined if the local function named *name established* by 



 



 



<DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> is called after it has returned <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



