**intern** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> enters a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named <ClLinks  term={"string"}><i>string</i></ClLinks> into <ClLinks  term={"package"}><i>package</i></ClLinks>. If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose name is the same as <ClLinks  term={"string"}><i>string</i></ClLinks> is already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, it is returned. If no such <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, a new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with the given name is created and entered into <ClLinks  term={"package"}><i>package</i></ClLinks> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>, or as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> if the <ClLinks  term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>; <ClLinks  term={"package"}><i>package</i></ClLinks> becomes the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the created <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



The first value returned by <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that was found or created. The meaning of the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *status*, is as follows: 



:internal 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was found and is <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. 



:external 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was found and is <ClLinks  term={"present"}><i>present</i></ClLinks> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm>. 



:inherited 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was found and is inherited via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> (which implies that the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is internal). 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



No pre-existing <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> was found, so one was created. 







 



 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <ClLinks  term={"string"}><i>string</i></ClLinks> that becomes the new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks  term={"name"}><i>name</i></ClLinks> is the given <ClLinks  term={"string"}><i>string</i></ClLinks> or a copy of it. Once a <ClLinks  term={"string"}><i>string</i></ClLinks> has been given as the *string argument* to <ClLinks  term={"intern"}><i>intern</i></ClLinks> in this situation where a new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is created, the consequences are undefined if a subsequent attempt is made to alter that <ClLinks  term={"string"}><i>string</i></ClLinks>. 



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



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> does not need to do any name conflict checking because it never creates a new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> if there is already an *accessible symbol* with the name given. 



