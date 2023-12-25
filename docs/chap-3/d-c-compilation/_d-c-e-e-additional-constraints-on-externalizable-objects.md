 



If two *literal objects* appearing in the source code for a single file processed with the *file compiler* are the <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>, the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the *compiled code* must also be the <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. With the exception of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>, any two *literal objects* in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> being processed by the *file compiler* may be *coalesced* if and only if they are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> ; if they are either both <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> or both <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>, they may only be *coalesced* if and only if they are <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"object"}><i>Objects</i></GlossaryTerm> containing circular references can be *externalizable objects*. The *file compiler* is required to preserve <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>ness of substructures within a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. Preserving <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>ness means that subobjects that are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> in the *source code* must be the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> in the corresponding *compiled code*. 



In addition, the following are constraints on the handling of *literal objects* by the *file compiler* : 



<DictionaryLink styled={true} term={"array"}><b>array:</b></DictionaryLink> If an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the source code is a *simple array*, then the corresponding <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the compiled code will also be a *simple array*. If an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the source code is displaced, has a *fill pointer* , or is *actually adjustable*, the corresponding <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the compiled code might lack any or all of these qualities. If an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the source code has a fill pointer, then the corresponding <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> in the compiled code might be only the size implied by the fill pointer.  







**packages:** The loader is required to find the corresponding *package object* as if by calling <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> with the package name as an argument. An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if no <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> of that name exists at load time. 



<DictionaryLink styled={true} term={"random-state"}><b>random-state:</b></DictionaryLink> A constant *random state* object cannot be used as the state argument to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> modifies this data structure. 



**structure, standard-object:** <GlossaryTerm styled={true} term={"object"}><i>Objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> may appear in compiled constants if there is an appropriate <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> method defined for that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



The *file compiler* calls <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is referenced as a *literal object* if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *generalized instance* of <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, or any of a (possibly empty) <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> set of other *classes*. The *file compiler* only calls <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> once for any given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> within a single <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"symbol"}><b>symbol:</b></DictionaryLink> In order to guarantee that *compiled files* can be *loaded* correctly, users must ensure that the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> referenced in those <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> are defined consistently at compile time and load time. *Conforming programs* must satisfy the following requirements: 



1\. The *current package* when a *top level form* in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> must be the same as the *current package* when the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> corresponding to that *top level form* in the *compiled file* is executed by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. In particular: 



a. Any *top level form* in a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> that alters the *current package* must change it to 



a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> both at compile time and at load time. 



b. If the first *non-atomic top level form* in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is not an <DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, 



then the *current package* at the time <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> is called must be a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with 



the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as the package that was the *current package* at the time 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> was called. 



2\. For all <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> appearing lexically within a *top level form* that were <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that was the *current package* during processing of that *top level form* at compile time, but whose *home package* was another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, at load time there must be a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in both the load-time *current package* and in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as the compile-time *home package*. 



3\. For all <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> represented in the *compiled file* that were *external symbols* in their *home package* at compile time, there must be a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is an *external symbol* in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> at load time. 



If any of these conditions do not hold, the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"loader"}><i>loader</i></GlossaryTerm> looks for the affected <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is unspecified. <GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are permitted to signal an error or to define this behavior. 











