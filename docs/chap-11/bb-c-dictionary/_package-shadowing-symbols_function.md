**package-shadowing-symbols** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks> *package → symbols* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that have been declared as *shadowing symbols* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> by <ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks> or <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> (or the equivalent <ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks> options). All <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> on this <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp

(package-shadowing-symbols (make-package ’temp)) → () 
(shadow ’cdr ’temp) → T 
(package-shadowing-symbols ’temp) → (TEMP::CDR) 
(intern "PILL" ’temp) → TEMP::PILL, NIL 
(shadowing-import ’pill ’temp) → T 
(package-shadowing-symbols ’temp) → (PILL TEMP::CDR) 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



**See Also:** 



<ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks>, <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> 



**Notes:** 



Whether the list of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



