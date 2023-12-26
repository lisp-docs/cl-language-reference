**export** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink> makes one or more <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> (whether directly or by inheritance) be <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



If any of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> has no effect on that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an internal symbol, it is simply changed to external status. If it is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, it is first *imported* into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, then <GlossaryTerm  term={"exported"}><i>exported</i></GlossaryTerm>. (The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is then <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> whether or not <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> continues to use the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> through which the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> was originally inherited.) 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink> makes each *symbol accessible* to all the <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. All of these <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> are checked for name conflicts: (export *s p*) does (find-symbol (symbol-name *s*) *q*) for each package *q* in (package-used-by-list *p*). Note that in the usual case of an <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> during the initial definition of a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, the result of <DictionaryLink  term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and the name-conflict checking takes negligible time. When multiple changes are to be made, for example when <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> is given a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, it is permissible for the implementation to process each change separately, so that aborting from a name conflict caused by any but the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> does not unexport the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. However, aborting from a name-conflict error caused by <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> of one of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> does not leave that *symbol accessible* to some <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> and <GlossaryTerm  term={"inaccessible"}><i>inaccessible</i></GlossaryTerm> to others; with respect to each of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> processed, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> behaves as if it were as an atomic operation. 







 



 



A name conflict in <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> between one of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> being exported and a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> that would inherit the newly-exported <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> may be resolved in favor of the exported <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by uninterning the other one, or in favor of the already-present <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by making it a shadowing symbol. 



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



If any of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> at all in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled that is <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> by permitting the <GlossaryTerm  term={"user"}><i>user</i></GlossaryTerm> to interactively specify whether that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> should be *imported*. 



**See Also:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>, Section 11.1 (Package Concepts) 



