**use-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks> *packages-to-use* &amp;optional *package →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*packages-to-use*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"package designator"}><i>package designators</i></GlossaryTerm>. The KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> may not be supplied. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. The <ClLinks  term={"package"}><i>package</i></ClLinks> cannot be the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Description:** 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks> causes <ClLinks  term={"package"}><i>package</i></ClLinks> to inherit all the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *packages-to-use*. The inherited <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> become <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks>. 



*Packages-to-use* are added to the <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks> if they are not there already. All <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> in *packages-to-use* become <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> as <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm>. <ClLinks  term={"use-package"}><b>use-package</b></ClLinks> does not cause any new <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to be <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> but only makes them <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> by inheritance. 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks> checks for name conflicts between the newly imported symbols and those already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. A name conflict in <ClLinks  term={"use-package"}><b>use-package</b></ClLinks> between two external symbols inherited by <ClLinks  term={"package"}><i>package</i></ClLinks> from *packages-to-use* may be resolved in favor of either <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by *importing* one of them into <ClLinks  term={"package"}><i>package</i></ClLinks> and making it a shadowing symbol. 



**Examples:**
```lisp
(export (intern "LAND-FILL" (make-package ’trash)) ’trash) → T 
(find-symbol "LAND-FILL" (make-package ’temp)) → NIL, NIL 
(package-use-list ’temp) → (#<PACKAGE "TEMP">) 
(use-package ’trash ’temp) → T 
(package-use-list ’temp) → (#<PACKAGE "TEMP"> #<PACKAGE "TRASH">) 
(find-symbol "LAND-FILL" ’temp) → TRASH:LAND-FILL, :INHERITED 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks> may be modified. 



**See Also:** 



<ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks>, <ClLinks  term={"package-use-list"}><b>package-use-list</b></ClLinks>, Section 11.1 (Package Concepts) 



**Notes:** 



It is permissible for a *package P*<sub>1</sub> to <ClLinks  term={"use"}><i>use</i></ClLinks> a *package P*<sub>2</sub> even if *P*<sub>2</sub> already uses *P*<sub>1</sub>. The using of <ClLinks  term={"package"}><i>packages</i></ClLinks> is not transitive, so no problem results from the apparent circularity. 







 



 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> 



