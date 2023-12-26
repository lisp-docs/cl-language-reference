**shadowing-import** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> —a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> is like <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, but it does not signal an error even if the importation of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> would shadow some <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



<DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> inserts each of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an internal symbol, regardless of whether another <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name is shadowed by this action. If a different <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name is already <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is first <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm> from <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is added to <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s shadowing-symbols list. 







 



 



<DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> does name-conflict checking to the extent that it checks whether a distinct existing <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with the same name is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm>; if so, it is shadowed by the new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, which implies that it must be uninterned if it was <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



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



<DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s shadowing-symbols list is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, <DictionaryLink  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink> 



