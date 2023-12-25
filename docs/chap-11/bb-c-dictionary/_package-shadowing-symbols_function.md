**package-shadowing-symbols** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks> *package → symbols* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have been declared as *shadowing symbols* in <ClLinks  term={"package"}><i>package</i></ClLinks> by <ClLinks  term={"shadow"}><b>shadow</b></ClLinks> or <ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> (or the equivalent <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> options). All <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> on this <ClLinks  term={"list"}><i>list</i></ClLinks> are <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



**See Also:** 



<ClLinks  term={"shadow"}><b>shadow</b></ClLinks>, <ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> 



**Notes:** 



Whether the list of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is <ClLinks  term={"fresh"}><i>fresh</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



