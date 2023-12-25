**unexport** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> reverts external <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> to internal status; it undoes the effect of <ClLinks styled={true} term={"export"}><b>export</b></ClLinks>. 



<ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> works only on *symbols present* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, switching them back to internal status. If <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> is given a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> as an *internal symbol* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it does nothing. 



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



If <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> is given a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> at all, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



The consequences are undefined if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



 



 



**See Also:** 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks>, Section 11.1 (Package Concepts) 



