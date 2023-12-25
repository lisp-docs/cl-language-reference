**unexport** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"unexport"}><b>unexport</b></ClLinks> <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks  term={"unexport"}><b>unexport</b></ClLinks> reverts external <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> to internal status; it undoes the effect of <ClLinks  term={"export"}><b>export</b></ClLinks>. 



<ClLinks  term={"unexport"}><b>unexport</b></ClLinks> works only on *symbols present* in <ClLinks  term={"package"}><i>package</i></ClLinks>, switching them back to internal status. If <ClLinks  term={"unexport"}><b>unexport</b></ClLinks> is given a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as an *internal symbol* in <ClLinks  term={"package"}><i>package</i></ClLinks>, it does nothing. 



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



If <ClLinks  term={"unexport"}><b>unexport</b></ClLinks> is given a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> at all, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



The consequences are undefined if <ClLinks  term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> or the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>. 



 



 



**See Also:** 



<ClLinks  term={"export"}><b>export</b></ClLinks>, Section 11.1 (Package Concepts) 



