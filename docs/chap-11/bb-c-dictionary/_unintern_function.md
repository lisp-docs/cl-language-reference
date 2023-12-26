**unintern** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *package → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> removes <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> from <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, it is removed from <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> and also from <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"shadowing symbols list"}><i>shadowing symbols list</i></GlossaryTerm> if it is present there. If <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> for <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is made to have no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"symbol"}><i>Symbol</i></GlossaryTerm> may continue to be <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> by inheritance. 



Use of <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can result in a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that has no recorded <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>, but that in fact is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in some <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. Common Lisp does not check for this pathological case, and such <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are always printed preceded by #:. 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if it removes <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> otherwise. 



**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(setq temps-unpack (intern "UNPACK" (make-package ’temp))) → TEMP::UNPACK 
(unintern temps-unpack ’temp) → T 
(find-symbol "UNPACK" ’temp) → NIL, NIL 
temps-unpack → #:UNPACK 
```
**Side Effects:** 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> changes the state of the package system in such a way that the consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 







 



 



**Exceptional Situations:** 



Giving a shadowing symbol to <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. If package A uses packages B and C, A contains a shadowing symbol x, and B and C each contain external symbols named x, then removing the shadowing symbol x from A will reveal a name conflict between b:x and c:x if those two <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are distinct. In this case <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> will signal an error. 



**See Also:** 



Section 11.1 (Package Concepts) 



