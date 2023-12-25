**unintern** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *package → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> removes <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> from <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it is removed from <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and also from <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s *shadowing symbols list* if it is present there. If <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is the *home package* for <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is made to have no *home package*. *Symbol* may continue to be <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> by inheritance. 



Use of <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> can result in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that has no recorded *home package*, but that in fact is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in some <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. Common Lisp does not check for this pathological case, and such <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are always printed preceded by #:. 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if it removes <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> otherwise. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(setq temps-unpack (intern "UNPACK" (make-package ’temp))) *→* TEMP::UNPACK 
(unintern temps-unpack ’temp) *→* T 
(find-symbol "UNPACK" ’temp) *→* NIL, NIL 
temps-unpack *→* #:UNPACK 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 







 



 



**Exceptional Situations:** 



Giving a shadowing symbol to <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. If package A uses packages B and C, A contains a shadowing symbol x, and B and C each contain external symbols named x, then removing the shadowing symbol x from A will reveal a name conflict between b:x and c:x if those two <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are distinct. In this case <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> will signal an error. 



**See Also:** 



Section 11.1 (Package Concepts) 



