**package-shadowing-symbols** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink> *package → symbols* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that have been declared as <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbols</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> by <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> or <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> (or the equivalent <DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink> options). All <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> on this <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> are <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> 



**Notes:** 



Whether the list of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



