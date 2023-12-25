**unexport** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



**Description:** 



<DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> reverts external <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to internal status; it undoes the effect of <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> works only on *symbols present* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, switching them back to internal status. If <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> as an *internal symbol* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it does nothing. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(export (intern "CONTRABAND" (make-package ’temp)) ’temp) *→* T 
(find-symbol "CONTRABAND") *→* NIL, NIL 
(use-package ’temp) *→* T 
(find-symbol "CONTRABAND") *→* CONTRABAND, :INHERITED 
(unexport ’contraband ’temp) *→* T 
(find-symbol "CONTRABAND") *→* NIL, NIL 

```
**Side Effects:** 



Package system is modified. 



**Affected By:** 



Current state of the package system. 



**Exceptional Situations:** 



If <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> at all, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



The consequences are undefined if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



 



 



**See Also:** 



<DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink>, Section 11.1 (Package Concepts) 



