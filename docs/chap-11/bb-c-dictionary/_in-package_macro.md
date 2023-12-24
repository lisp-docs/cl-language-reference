**in-package** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks> *name → package* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *string designator* ; not evaluated. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> named by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



**Description:** 



Causes the the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> named by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to become the *current package*—that is, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks>. If no such <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> already exists, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



Everything <ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks> does is also performed at compile time if the call appears as a *top level form*. 



**Side Effects:** 



The <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> is assigned. If the <ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *top level form*, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled if the specified <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> does not exist. 



**See Also:** 



<ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> 







 



 



