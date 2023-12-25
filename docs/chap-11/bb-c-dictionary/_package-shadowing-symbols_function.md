**package-shadowing-symbols** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink> *package → symbols* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that have been declared as *shadowing symbols* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> by <DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> or <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> (or the equivalent <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> options). All <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> on this <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp

(package-shadowing-symbols (make-package ’temp)) *→* () 
(shadow ’cdr ’temp) *→* T 
(package-shadowing-symbols ’temp) *→* (TEMP::CDR) 
(intern "PILL" ’temp) *→* TEMP::PILL, NIL 
(shadowing-import ’pill ’temp) *→* T 
(package-shadowing-symbols ’temp) *→* (PILL TEMP::CDR) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a *package designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> 



**Notes:** 



Whether the list of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



