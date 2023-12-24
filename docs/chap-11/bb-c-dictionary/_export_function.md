**export** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



**Description:** 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks> makes one or more <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> (whether directly or by inheritance) be *external symbols* of that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



If any of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> as an *external symbol* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> has no effect on that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an internal symbol, it is simply changed to external status. If it is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> as an *internal symbol* via <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, it is first *imported* into <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, then <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>. (The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is then <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> whether or not <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> continues to use the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> through which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> was originally inherited.) 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks> makes each *symbol accessible* to all the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that use <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. All of these <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> are checked for name conflicts: (export *s p*) does (find-symbol (symbol-name *s*) *q*) for each package *q* in (package-used-by-list *p*). Note that in the usual case of an <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> during the initial definition of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, the result of <ClLinks styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and the name-conflict checking takes negligible time. When multiple changes are to be made, for example when <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> is given a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, it is permissible for the implementation to process each change separately, so that aborting from a name conflict caused by any but the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> does not unexport the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. However, aborting from a name-conflict error caused by <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> of one of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> does not leave that *symbol accessible* to some <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> and <ClLinks styled={true} term={"inaccessible"}><i>inaccessible</i></ClLinks> to others; with respect to each of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> processed, <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> behaves as if it were as an atomic operation. 







 



 



A name conflict in <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> between one of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> being exported and a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that would inherit the newly-exported <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> may be resolved in favor of the exported <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by uninterning the other one, or in favor of the already-present <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by making it a shadowing symbol. 



**Examples:**
```lisp

(make-package ’temp :use nil) → #<PACKAGE "TEMP"> 
(use-package ’temp) → T 
(intern "TEMP-SYM" ’temp) → TEMP::TEMP-SYM, NIL 
(find-symbol "TEMP-SYM") → NIL, NIL 
(export (find-symbol "TEMP-SYM" ’temp) ’temp) → T 
(find-symbol "TEMP-SYM") → TEMP-SYM, :INHERITED 

```
**Side Effects:** 



The package system is modified. 



**Affected By:** 



*Accessible symbols*. 



**Exceptional Situations:** 



If any of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> at all in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled that is <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> by permitting the <ClLinks styled={true} term={"user"}><i>user</i></ClLinks> to interactively specify whether that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> should be *imported*. 



**See Also:** 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks>, Section 11.1 (Package Concepts) 



