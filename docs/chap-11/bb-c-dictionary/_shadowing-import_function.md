**shadowing-import** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> —a *package designator* . The default is the *current package*. 



**Description:** 



<DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> is like <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, but it does not signal an error even if the importation of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> would shadow some <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> inserts each of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an internal symbol, regardless of whether another <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name is shadowed by this action. If a different <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name is already <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is first <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> from <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is added to <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s shadowing-symbols list. 







 



 



<DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> does name-conflict checking to the extent that it checks whether a distinct existing <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with the same name is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>; if so, it is shadowed by the new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, which implies that it must be uninterned if it was <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(setq sym (intern "CONFLICT")) *→* CONFLICT 
(intern "CONFLICT" (make-package ’temp)) *→* TEMP::CONFLICT, NIL 
(package-shadowing-symbols ’temp) *→* NIL 
(shadowing-import sym ’temp) *→* T 
(package-shadowing-symbols ’temp) *→* (CONFLICT) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s shadowing-symbols list is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>, <DictionaryLink styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink> 



