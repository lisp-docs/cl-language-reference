**unuse-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> *packages-to-unuse* &amp;optional *package →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*packages-to-unuse*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package designators*. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> causes <ClLinks  term={"package"}><i>package</i></ClLinks> to cease inheriting all the *external symbols* of *packages-to-unuse*; <ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> undoes the effects of <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. The *packages-to-unuse* are removed from the *use list* of <ClLinks  term={"package"}><i>package</i></ClLinks>. 



Any <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have been *imported* into <ClLinks  term={"package"}><i>package</i></ClLinks> continue to be <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. 

**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(export (intern "SHOES" (make-package ’temp)) ’temp) → T 
(find-symbol "SHOES") → NIL, NIL 
(use-package ’temp) → T 
(find-symbol "SHOES") → SHOES, :INHERITED 
(find (find-package ’temp) (package-use-list ’common-lisp-user)) → #<PACKAGE "TEMP"> (unuse-package ’temp) → T 
(find-symbol "SHOES") → NIL, NIL 
```
**Side Effects:** 



The *use list* of <ClLinks  term={"package"}><i>package</i></ClLinks> is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks  term={"package-use-list"}><b>package-use-list</b></ClLinks> 







 



 



