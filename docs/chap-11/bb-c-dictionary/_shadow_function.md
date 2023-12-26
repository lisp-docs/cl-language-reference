**shadow** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> *symbol-names* &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*symbol-names*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string designator"}><i>string designators</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> assures that <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> with names given by *symbol-names* are <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



Specifically, <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is searched for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> with the <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> supplied by *symbol-names*. For each such <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, if a corresponding <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> (directly, not by inheritance), then a corresponding <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is created with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, and inserted into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. The corresponding <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, whether pre-existing or newly created, is then added, if not already present, to the <GlossaryTerm styled={true} term={"shadowing symbols list"}><i>shadowing symbols list</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp
(package-shadowing-symbols (make-package ’temp)) → NIL 
(find-symbol ’car ’temp) → CAR, :INHERITED 
(shadow ’car ’temp) → T 
(find-symbol ’car ’temp) → TEMP::CAR, :INTERNAL 
(package-shadowing-symbols ’temp) → (TEMP::CAR) 
(make-package ’test-1) → #<PACKAGE "TEST-1"> 
(intern "TEST" (find-package ’test-1)) → TEST-1::TEST, NIL 
(shadow ’test-1::test (find-package ’test-1)) → T 

(shadow ’TEST (find-package ’test-1)) → T 
(assert (not (null (member ’test-1::test (package-shadowing-symbols 
					  (find-package ’test-1)))))) 
(make-package ’test-2) → #<PACKAGE "TEST-2"> 
(intern "TEST" (find-package ’test-2)) → TEST-2::TEST, NIL 
(export ’test-2::test (find-package ’test-2)) → T 
(use-package ’test-2 (find-package ’test-1)) ;should not error 
```
**Side Effects:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> changes the state of the package system in such a way that the package consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink>, Section 11.1 (Package Concepts) 



**Notes:** 



If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with a name in *symbol-names* already exists in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, but by inheritance, the inherited symbol becomes *shadowed* <sub>3</sub> by a newly created <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. 



