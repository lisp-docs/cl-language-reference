**shadowing-import** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks> —a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> is like <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, but it does not signal an error even if the importation of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> would shadow some <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



<ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> inserts each of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> into <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an internal symbol, regardless of whether another <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of the same name is shadowed by this action. If a different <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of the same name is already <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is first <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> from <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is added to <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s shadowing-symbols list. 







 



 



<ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> does name-conflict checking to the extent that it checks whether a distinct existing <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with the same name is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>; if so, it is shadowed by the new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, which implies that it must be uninterned if it was <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(setq sym (intern "CONFLICT")) → CONFLICT 
(intern "CONFLICT" (make-package ’temp)) → TEMP::CONFLICT, NIL 
(package-shadowing-symbols ’temp) → NIL 
(shadowing-import sym ’temp) → T 
(package-shadowing-symbols ’temp) → (CONFLICT) 

```
**Side Effects:** 



<ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s shadowing-symbols list is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>, <ClLinks styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks> 



