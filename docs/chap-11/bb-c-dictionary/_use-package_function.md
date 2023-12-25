**use-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> *packages-to-use* &amp;optional *package →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*packages-to-use*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *package designators*. The KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> may not be supplied. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> cannot be the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> causes <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> to inherit all the *external symbols* of *packages-to-use*. The inherited <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> become <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> as *internal symbols* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



*Packages-to-use* are added to the *use list* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> if they are not there already. All *external symbols* in *packages-to-use* become <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as *internal symbols*. <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> does not cause any new <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to be <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> but only makes them <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> by inheritance. 



<ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> checks for name conflicts between the newly imported symbols and those already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. A name conflict in <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> between two external symbols inherited by <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> from *packages-to-use* may be resolved in favor of either <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by *importing* one of them into <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and making it a shadowing symbol. 



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



The *use list* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> may be modified. 



**See Also:** 



<ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks>, <ClLinks styled={true} term={"package-use-list"}><b>package-use-list</b></ClLinks>, Section 11.1 (Package Concepts) 



**Notes:** 



It is permissible for a *package P*<sub>1</sub> to <ClLinks styled={true} term={"use"}><i>use</i></ClLinks> a *package P*<sub>2</sub> even if *P*<sub>2</sub> already uses *P*<sub>1</sub>. The using of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> is not transitive, so no problem results from the apparent circularity. 







 



 



<ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks> 



