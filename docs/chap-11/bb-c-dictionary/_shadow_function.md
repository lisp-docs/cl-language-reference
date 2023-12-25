**shadow** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> *symbol-names* &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*symbol-names*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *string designators*. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



**Description:** 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> assures that <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> with names given by *symbol-names* are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



Specifically, <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is searched for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> with the <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> supplied by *symbol-names*. For each such <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, if a corresponding <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (directly, not by inheritance), then a corresponding <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is created with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, and inserted into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an *internal symbol*. The corresponding <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, whether pre-existing or newly created, is then added, if not already present, to the *shadowing symbols list* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp

(package-shadowing-symbols (make-package ’temp)) *→* NIL 
(find-symbol ’car ’temp) *→* CAR, :INHERITED 
(shadow ’car ’temp) *→* T 
(find-symbol ’car ’temp) *→* TEMP::CAR, :INTERNAL 
(package-shadowing-symbols ’temp) *→* (TEMP::CAR) 
(make-package ’test-1) *→* #<PACKAGE "TEST-1"> 
(intern "TEST" (find-package ’test-1)) *→* TEST-1::TEST, NIL 
(shadow ’test-1::test (find-package ’test-1)) *→* T 



(shadow ’TEST (find-package ’test-1)) *→* T 
(assert (not (null (member ’test-1::test (package-shadowing-symbols 
					  (find-package ’test-1)))))) 
(make-package ’test-2) *→* #<PACKAGE "TEST-2"> 
(intern "TEST" (find-package ’test-2)) *→* TEST-2::TEST, NIL 
(export ’test-2::test (find-package ’test-2)) *→* T 
(use-package ’test-2 (find-package ’test-1)) ;should not error 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> changes the state of the package system in such a way that the package consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink>, Section 11.1 (Package Concepts) 



**Notes:** 



If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with a name in *symbol-names* already exists in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but by inheritance, the inherited symbol becomes *shadowed* <sub>3</sub> by a newly created *internal symbol*. 



