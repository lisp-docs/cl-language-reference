**unexport** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> reverts external <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> to internal status; it undoes the effect of <DictionaryLink  term={"export"}><b>export</b></DictionaryLink>. 



<DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> works only on *symbols present* in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, switching them back to internal status. If <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> is given a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, it does nothing. 



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



If <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> is given a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> at all, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



The consequences are undefined if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



 



 



**See Also:** 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink>, Section 11.1 (Package Concepts) 



