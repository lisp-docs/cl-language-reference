**in-package** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink> *name → package* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *string designator* ; not evaluated. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



**Description:** 



Causes the the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to become the *current package*—that is, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink>. If no such <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> already exists, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



Everything <DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink> does is also performed at compile time if the call appears as a *top level form*. 



**Side Effects:** 



The <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> is assigned. If the <DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *top level form*, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if the specified <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> does not exist. 



**See Also:** 



<DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> 







 



 



