**shadowing-import** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks> —a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> is like <ClLinks  term={"import"}><b>import</b></ClLinks>, but it does not signal an error even if the importation of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> would shadow some <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. 



<ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> inserts each of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> into <ClLinks  term={"package"}><i>package</i></ClLinks> as an internal symbol, regardless of whether another <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> of the same name is shadowed by this action. If a different <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> of the same name is already <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is first <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> from <ClLinks  term={"package"}><i>package</i></ClLinks>. The new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is added to <ClLinks  term={"package"}><i>package</i></ClLinks>’s shadowing-symbols list. 







 



 



<ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> does name-conflict checking to the extent that it checks whether a distinct existing <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with the same name is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks>; if so, it is shadowed by the new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, which implies that it must be uninterned if it was <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. 



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



<ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



<ClLinks  term={"package"}><i>package</i></ClLinks>’s shadowing-symbols list is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<ClLinks  term={"import"}><b>import</b></ClLinks>, <ClLinks  term={"unintern"}><b>unintern</b></ClLinks>, <ClLinks  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks> 



