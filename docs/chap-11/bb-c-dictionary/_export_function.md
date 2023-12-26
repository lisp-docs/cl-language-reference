**export** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"export"}><b>export</b></ClLinks> <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"export"}><b>export</b></ClLinks> makes one or more <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> (whether directly or by inheritance) be <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of that <ClLinks  term={"package"}><i>package</i></ClLinks>. 



If any of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks>, <ClLinks  term={"export"}><b>export</b></ClLinks> has no effect on that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> as an internal symbol, it is simply changed to external status. If it is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> via <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, it is first *imported* into <ClLinks  term={"package"}><i>package</i></ClLinks>, then <ClLinks  term={"exported"}><i>exported</i></ClLinks>. (The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is then <ClLinks  term={"present"}><i>present</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> whether or not <ClLinks  term={"package"}><i>package</i></ClLinks> continues to use the <ClLinks  term={"package"}><i>package</i></ClLinks> through which the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was originally inherited.) 



<ClLinks  term={"export"}><b>export</b></ClLinks> makes each *symbol accessible* to all the <ClLinks  term={"package"}><i>packages</i></ClLinks> that use <ClLinks  term={"package"}><i>package</i></ClLinks>. All of these <ClLinks  term={"package"}><i>packages</i></ClLinks> are checked for name conflicts: (export *s p*) does (find-symbol (symbol-name *s*) *q*) for each package *q* in (package-used-by-list *p*). Note that in the usual case of an <ClLinks  term={"export"}><b>export</b></ClLinks> during the initial definition of a <ClLinks  term={"package"}><i>package</i></ClLinks>, the result of <ClLinks  term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks> and the name-conflict checking takes negligible time. When multiple changes are to be made, for example when <ClLinks  term={"export"}><b>export</b></ClLinks> is given a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, it is permissible for the implementation to process each change separately, so that aborting from a name conflict caused by any but the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"list"}><i>list</i></ClLinks> does not unexport the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"list"}><i>list</i></ClLinks>. However, aborting from a name-conflict error caused by <ClLinks  term={"export"}><b>export</b></ClLinks> of one of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> does not leave that *symbol accessible* to some <ClLinks  term={"package"}><i>packages</i></ClLinks> and <ClLinks  term={"inaccessible"}><i>inaccessible</i></ClLinks> to others; with respect to each of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> processed, <ClLinks  term={"export"}><b>export</b></ClLinks> behaves as if it were as an atomic operation. 







 



 



A name conflict in <ClLinks  term={"export"}><b>export</b></ClLinks> between one of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> being exported and a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks  term={"present"}><i>present</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> that would inherit the newly-exported <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> may be resolved in favor of the exported <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by uninterning the other one, or in favor of the already-present <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by making it a shadowing symbol. 



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



If any of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> at all in <ClLinks  term={"package"}><i>package</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled that is <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> by permitting the <ClLinks  term={"user"}><i>user</i></ClLinks> to interactively specify whether that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> should be *imported*. 



**See Also:** 



<ClLinks  term={"import"}><b>import</b></ClLinks>, <ClLinks  term={"unexport"}><b>unexport</b></ClLinks>, Section 11.1 (Package Concepts) 



