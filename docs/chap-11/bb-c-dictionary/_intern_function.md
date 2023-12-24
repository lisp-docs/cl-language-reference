**intern** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*status*—one of :inherited, :external, :internal, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> enters a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> into <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose name is the same as <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it is returned. If no such <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, a new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with the given name is created and entered into <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an *internal symbol*, or as an *external symbol* if the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> becomes the *home package* of the created <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



The first value returned by <ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that was found or created. The meaning of the *secondary value*, *status*, is as follows: 



:internal 



The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was found and is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an *internal symbol*. 



:external 



The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was found and is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> as an *external symbol*. 



:inherited 



The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was found and is inherited via <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> (which implies that the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is internal). 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



No pre-existing <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was found, so one was created. 







 



 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that becomes the new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the given <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or a copy of it. Once a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> has been given as the *string argument* to <ClLinks styled={true} term={"intern"}><i>intern</i></ClLinks> in this situation where a new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is created, the consequences are undefined if a subsequent attempt is made to alter that <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(intern "Never-Before") → |Never-Before|, NIL 
(intern "Never-Before") → |Never-Before|, :INTERNAL 
(intern "NEVER-BEFORE" "KEYWORD") → :NEVER-BEFORE, NIL 
(intern "NEVER-BEFORE" "KEYWORD") → :NEVER-BEFORE, :EXTERNAL 

```
**See Also:** 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks>, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>, Section 2.3.4 (Symbols as Tokens) 



**Notes:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> does not need to do any name conflict checking because it never creates a new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> if there is already an *accessible symbol* with the name given. 



