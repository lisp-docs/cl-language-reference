**in-package** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> *name → package* 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> ; not evaluated. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



**Description:** 



Causes the the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to become the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>—that is, the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>. If no such <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> already exists, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



Everything <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> does is also performed at compile time if the call appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. 



**Side Effects:** 



The <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> is assigned. If the <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if the specified <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> does not exist. 



**See Also:** 



<DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> 







 



 



