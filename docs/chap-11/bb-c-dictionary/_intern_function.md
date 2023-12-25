**intern** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> enters a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose name is the same as <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it is returned. If no such <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, a new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with the given name is created and entered into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an *internal symbol*, or as an *external symbol* if the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> becomes the *home package* of the created <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



The first value returned by <DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that was found or created. The meaning of the *secondary value*, *status*, is as follows: 



:internal 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an *internal symbol*. 



:external 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> as an *external symbol*. 



:inherited 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is inherited via <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> (which implies that the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is internal). 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



No pre-existing <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> was found, so one was created. 







 



 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that becomes the new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the given <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a copy of it. Once a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> has been given as the *string argument* to <GlossaryTerm styled={true} term={"intern"}><i>intern</i></GlossaryTerm> in this situation where a new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is created, the consequences are undefined if a subsequent attempt is made to alter that <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(intern "Never-Before") *→* |Never-Before|, NIL 
(intern "Never-Before") *→* |Never-Before|, :INTERNAL 
(intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, NIL 
(intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, :EXTERNAL 

```
**See Also:** 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink>, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>, Section 2.3.4 (Symbols as Tokens) 



**Notes:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> does not need to do any name conflict checking because it never creates a new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> if there is already an *accessible symbol* with the name given. 



