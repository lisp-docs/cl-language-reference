**export** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



**Description:** 



<DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> makes one or more <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (whether directly or by inheritance) be *external symbols* of that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



If any of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> as an *external symbol* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> has no effect on that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an internal symbol, it is simply changed to external status. If it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> as an *internal symbol* via <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, it is first *imported* into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, then <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. (The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is then <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> whether or not <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> continues to use the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> through which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was originally inherited.) 



<DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> makes each *symbol accessible* to all the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. All of these <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> are checked for name conflicts: (export *s p*) does (find-symbol (symbol-name *s*) *q*) for each package *q* in (package-used-by-list *p*). Note that in the usual case of an <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> during the initial definition of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the result of <DictionaryLink styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and the name-conflict checking takes negligible time. When multiple changes are to be made, for example when <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, it is permissible for the implementation to process each change separately, so that aborting from a name conflict caused by any but the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> does not unexport the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. However, aborting from a name-conflict error caused by <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> of one of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> does not leave that *symbol accessible* to some <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"inaccessible"}><i>inaccessible</i></GlossaryTerm> to others; with respect to each of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> processed, <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> behaves as if it were as an atomic operation. 







 



 



A name conflict in <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> between one of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> being exported and a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that would inherit the newly-exported <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> may be resolved in favor of the exported <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by uninterning the other one, or in favor of the already-present <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by making it a shadowing symbol. 



**Examples:**
```lisp

(make-package ’temp :use nil) *→* #<PACKAGE "TEMP"> 
(use-package ’temp) *→* T 
(intern "TEMP-SYM" ’temp) *→* TEMP::TEMP-SYM, NIL 
(find-symbol "TEMP-SYM") *→* NIL, NIL 
(export (find-symbol "TEMP-SYM" ’temp) ’temp) *→* T 
(find-symbol "TEMP-SYM") *→* TEMP-SYM, :INHERITED 

```
**Side Effects:** 



The package system is modified. 



**Affected By:** 



*Accessible symbols*. 



**Exceptional Situations:** 



If any of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> at all in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled that is <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> by permitting the <GlossaryTerm styled={true} term={"user"}><i>user</i></GlossaryTerm> to interactively specify whether that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> should be *imported*. 



**See Also:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink>, Section 11.1 (Package Concepts) 



