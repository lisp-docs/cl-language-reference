**unexport** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> reverts external <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> to internal status; it undoes the effect of <DictionaryLink  term={"export"}><b>export</b></DictionaryLink>. 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> works only on *symbols present* in <ClLinks  term={"package"}><i>package</i></ClLinks>, switching them back to internal status. If <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> is given a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> in <ClLinks  term={"package"}><i>package</i></ClLinks>, it does nothing. 



**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(export (intern "CONTRABAND" (make-package ’temp)) ’temp) → T 
(find-symbol "CONTRABAND") → NIL, NIL 
(use-package ’temp) → T 
(find-symbol "CONTRABAND") → CONTRABAND, :INHERITED 
(unexport ’contraband ’temp) → T 
(find-symbol "CONTRABAND") → NIL, NIL 
```
**Side Effects:** 



Package system is modified. 



**Affected By:** 



Current state of the package system. 



**Exceptional Situations:** 



If <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> is given a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> at all, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



The consequences are undefined if <ClLinks  term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> or the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>. 



 



 



**See Also:** 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink>, Section 11.1 (Package Concepts) 



