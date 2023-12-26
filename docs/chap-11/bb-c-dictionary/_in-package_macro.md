**in-package** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"in-package"}><b>in-package</b></ClLinks> *name → package* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> ; not evaluated. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—the <ClLinks  term={"package"}><i>package</i></ClLinks> named by <ClLinks  term={"name"}><i>name</i></ClLinks>. 



**Description:** 



Causes the the <ClLinks  term={"package"}><i>package</i></ClLinks> named by <ClLinks  term={"name"}><i>name</i></ClLinks> to become the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>—that is, the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"package"}><b>\*package\*</b></ClLinks>. If no such <ClLinks  term={"package"}><i>package</i></ClLinks> already exists, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



Everything <ClLinks  term={"in-package"}><b>in-package</b></ClLinks> does is also performed at compile time if the call appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. 



**Side Effects:** 



The <ClLinks  term={"variable"}><i>variable</i></ClLinks> <ClLinks  term={"package"}><b>\*package\*</b></ClLinks> is assigned. If the <ClLinks  term={"in-package"}><b>in-package</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled if the specified <ClLinks  term={"package"}><i>package</i></ClLinks> does not exist. 



**See Also:** 



<ClLinks  term={"package"}><b>\*package\*</b></ClLinks> 







 



 



