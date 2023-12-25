**compiler-macro-function** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> &amp;optional *environment → function* 



**(setf (compiler-macro-function** <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> &amp;optional *environment<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-function***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *function name*. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, *new-function*—a *compiler macro function*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



*Accesses* the *compiler macro function* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, if any, in the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>.  







A value of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> denotes the absence of a *compiler macro function* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



**Exceptional Situations:** 



The consequences are undefined if <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> in a use of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink>, Section 3.2.2.1 (Compiler Macros) 



