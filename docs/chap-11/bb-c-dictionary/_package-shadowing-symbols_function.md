**package-shadowing-symbols** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink> *package → symbols* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have been declared as <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbols</i></GlossaryTerm> in <ClLinks  term={"package"}><i>package</i></ClLinks> by <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> or <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> (or the equivalent <DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink> options). All <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> on this <ClLinks  term={"list"}><i>list</i></ClLinks> are <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp
(package-shadowing-symbols (make-package ’temp)) → () 
(shadow ’cdr ’temp) → T 
(package-shadowing-symbols ’temp) → (TEMP::CDR) 
(intern "PILL" ’temp) → TEMP::PILL, NIL 
(shadowing-import ’pill ’temp) → T 
(package-shadowing-symbols ’temp) → (PILL TEMP::CDR) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> 



**Notes:** 



Whether the list of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is <ClLinks  term={"fresh"}><i>fresh</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



