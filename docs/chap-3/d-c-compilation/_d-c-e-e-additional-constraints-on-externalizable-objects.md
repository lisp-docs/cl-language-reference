 



If two *literal objects* appearing in the source code for a single file processed with the *file compiler* are the <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>, the corresponding <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in the *compiled code* must also be the <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. With the exception of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>, any two *literal objects* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> being processed by the *file compiler* may be *coalesced* if and only if they are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> ; if they are either both <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> or both <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>, they may only be *coalesced* if and only if they are <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. 



<ClLinks styled={true} term={"object"}><i>Objects</i></ClLinks> containing circular references can be *externalizable objects*. The *file compiler* is required to preserve <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>ness of substructures within a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. Preserving <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>ness means that subobjects that are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> in the *source code* must be the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> in the corresponding *compiled code*. 



In addition, the following are constraints on the handling of *literal objects* by the *file compiler* : 



<ClLinks styled={true} term={"array"}><b>array:</b></ClLinks> If an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the source code is a *simple array*, then the corresponding <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the compiled code will also be a *simple array*. If an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the source code is displaced, has a *fill pointer* , or is *actually adjustable*, the corresponding <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the compiled code might lack any or all of these qualities. If an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the source code has a fill pointer, then the corresponding <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> in the compiled code might be only the size implied by the fill pointer.  







**packages:** The loader is required to find the corresponding *package object* as if by calling <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> with the package name as an argument. An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled if no <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> of that name exists at load time. 



<ClLinks styled={true} term={"random-state"}><b>random-state:</b></ClLinks> A constant *random state* object cannot be used as the state argument to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> because <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> modifies this data structure. 



**structure, standard-object:** <ClLinks styled={true} term={"object"}><i>Objects</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> and <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> may appear in compiled constants if there is an appropriate <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> method defined for that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



The *file compiler* calls <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> on any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is referenced as a *literal object* if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *generalized instance* of <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, or any of a (possibly empty) <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> set of other *classes*. The *file compiler* only calls <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> once for any given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> within a single <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 



<ClLinks styled={true} term={"symbol"}><b>symbol:</b></ClLinks> In order to guarantee that *compiled files* can be *loaded* correctly, users must ensure that the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> referenced in those <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> are defined consistently at compile time and load time. *Conforming programs* must satisfy the following requirements: 



1\. The *current package* when a *top level form* in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is processed by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> must be the same as the *current package* when the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> corresponding to that *top level form* in the *compiled file* is executed by <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. In particular: 



a. Any *top level form* in a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> that alters the *current package* must change it to 



a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> of the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> both at compile time and at load time. 



b. If the first *non-atomic top level form* in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is not an <ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, 



then the *current package* at the time <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> is called must be a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with 



the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as the package that was the *current package* at the time 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> was called. 



2\. For all <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> appearing lexically within a *top level form* that were <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that was the *current package* during processing of that *top level form* at compile time, but whose *home package* was another <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, at load time there must be a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in both the load-time *current package* and in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as the compile-time *home package*. 



3\. For all <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> represented in the *compiled file* that were *external symbols* in their *home package* at compile time, there must be a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is an *external symbol* in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> at load time. 



If any of these conditions do not hold, the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in which the <ClLinks styled={true} term={"loader"}><i>loader</i></ClLinks> looks for the affected <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is unspecified. <ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> are permitted to signal an error or to define this behavior. 











