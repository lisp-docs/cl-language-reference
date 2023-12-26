**in-package** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> *name → package* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> ; not evaluated. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—the <ClLinks  term={"package"}><i>package</i></ClLinks> named by <ClLinks  term={"name"}><i>name</i></ClLinks>. 



**Description:** 



Causes the the <ClLinks  term={"package"}><i>package</i></ClLinks> named by <ClLinks  term={"name"}><i>name</i></ClLinks> to become the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>—that is, the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>. If no such <ClLinks  term={"package"}><i>package</i></ClLinks> already exists, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



Everything <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> does is also performed at compile time if the call appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. 



**Side Effects:** 



The <ClLinks  term={"variable"}><i>variable</i></ClLinks> <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> is assigned. If the <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if the specified <ClLinks  term={"package"}><i>package</i></ClLinks> does not exist. 



**See Also:** 



<DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> 







 



 



