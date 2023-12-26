**intern** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> enters a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose name is the same as <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, it is returned. If no such <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, a new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with the given name is created and entered into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>, or as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> if the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> becomes the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the created <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



The first value returned by <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that was found or created. The meaning of the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *status*, is as follows: 



:internal 



The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. 



:external 



The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm>. 



:inherited 



The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> was found and is inherited via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> (which implies that the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is internal). 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



No pre-existing <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> was found, so one was created. 







 



 



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that becomes the new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is the given <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a copy of it. Once a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> has been given as the *string argument* to <GlossaryTerm  term={"intern"}><i>intern</i></GlossaryTerm> in this situation where a new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is created, the consequences are undefined if a subsequent attempt is made to alter that <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(intern "Never-Before") → |Never-Before|, NIL 
(intern "Never-Before") → |Never-Before|, :INTERNAL 
(intern "NEVER-BEFORE" "KEYWORD") → :NEVER-BEFORE, NIL 
(intern "NEVER-BEFORE" "KEYWORD") → :NEVER-BEFORE, :EXTERNAL 
```
**See Also:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, Section 2.3.4 (Symbols as Tokens) 



**Notes:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> does not need to do any name conflict checking because it never creates a new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> if there is already an *accessible symbol* with the name given. 



