**unintern** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *package → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> removes <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> from <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it is removed from <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and also from <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s *shadowing symbols list* if it is present there. If <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is the *home package* for <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is made to have no *home package*. *Symbol* may continue to be <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> by inheritance. 



Use of <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> can result in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that has no recorded *home package*, but that in fact is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in some <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. Common Lisp does not check for this pathological case, and such <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are always printed preceded by #:. 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if it removes <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> otherwise. 



**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(setq temps-unpack (intern "UNPACK" (make-package ’temp))) → TEMP::UNPACK 
(unintern temps-unpack ’temp) → T 
(find-symbol "UNPACK" ’temp) → NIL, NIL 
temps-unpack → #:UNPACK 
```
**Side Effects:** 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 







 



 



**Exceptional Situations:** 



Giving a shadowing symbol to <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> can uncover a name conflict that had previously been resolved by the shadowing. If package A uses packages B and C, A contains a shadowing symbol x, and B and C each contain external symbols named x, then removing the shadowing symbol x from A will reveal a name conflict between b:x and c:x if those two <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are distinct. In this case <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> will signal an error. 



**See Also:** 



Section 11.1 (Package Concepts) 



