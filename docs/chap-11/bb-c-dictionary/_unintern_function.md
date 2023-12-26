**unintern** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *package → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> removes <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> from <ClLinks  term={"package"}><i>package</i></ClLinks>. If <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, it is removed from <ClLinks  term={"package"}><i>package</i></ClLinks> and also from <ClLinks  term={"package"}><i>package</i></ClLinks>’s <GlossaryTerm styled={true} term={"shadowing symbols list"}><i>shadowing symbols list</i></GlossaryTerm> if it is present there. If <ClLinks  term={"package"}><i>package</i></ClLinks> is the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> for <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is made to have no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"symbol"}><i>Symbol</i></GlossaryTerm> may continue to be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> by inheritance. 



Use of <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can result in a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that has no recorded <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>, but that in fact is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in some <ClLinks  term={"package"}><i>package</i></ClLinks>. Common Lisp does not check for this pathological case, and such <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are always printed preceded by #:. 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if it removes <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> otherwise. 



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



Giving a shadowing symbol to <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. If package A uses packages B and C, A contains a shadowing symbol x, and B and C each contain external symbols named x, then removing the shadowing symbol x from A will reveal a name conflict between b:x and c:x if those two <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are distinct. In this case <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> will signal an error. 



**See Also:** 



Section 11.1 (Package Concepts) 



