**compiler-macro-function** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> &amp;optional *environment → function* 



<!-- **(setf (compiler-macro-function** <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> &amp;optional *environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (compiler-macro-function** *name* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, *new-function*—a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, if any, in the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>.  







A value of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> denotes the absence of a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



**Exceptional Situations:** 



The consequences are undefined if <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> is <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> in a use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink>, Section 3.2.2.1 (Compiler Macros) 



