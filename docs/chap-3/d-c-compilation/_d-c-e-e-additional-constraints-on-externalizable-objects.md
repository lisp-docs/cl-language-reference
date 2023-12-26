 



If two *literal objects* appearing in the source code for a single file processed with the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> are the <ClLinks  term={"identical"}><i>identical</i></ClLinks>, the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> must also be the <ClLinks  term={"identical"}><i>identical</i></ClLinks>. With the exception of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> and <ClLinks  term={"package"}><i>packages</i></ClLinks>, any two *literal objects* in <ClLinks  term={"code"}><i>code</i></ClLinks> being processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> may be *coalesced* if and only if they are <ClLinks  term={"similar"}><i>similar</i></ClLinks> ; if they are either both <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> or both <ClLinks  term={"package"}><i>packages</i></ClLinks>, they may only be *coalesced* if and only if they are <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



<ClLinks  term={"object"}><i>Objects</i></ClLinks> containing circular references can be <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> is required to preserve <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>ness of substructures within a <ClLinks  term={"file"}><i>file</i></ClLinks>. Preserving <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>ness means that subobjects that are the <ClLinks  term={"same"}><i>same</i></ClLinks> in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> must be the <ClLinks  term={"same"}><i>same</i></ClLinks> in the corresponding <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. 



In addition, the following are constraints on the handling of *literal objects* by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> : 



<ClLinks  term={"array"}><b>array:</b></ClLinks> If an <ClLinks  term={"array"}><i>array</i></ClLinks> in the source code is a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>, then the corresponding <ClLinks  term={"array"}><i>array</i></ClLinks> in the compiled code will also be a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>. If an <ClLinks  term={"array"}><i>array</i></ClLinks> in the source code is displaced, has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , or is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, the corresponding <ClLinks  term={"array"}><i>array</i></ClLinks> in the compiled code might lack any or all of these qualities. If an <ClLinks  term={"array"}><i>array</i></ClLinks> in the source code has a fill pointer, then the corresponding <ClLinks  term={"array"}><i>array</i></ClLinks> in the compiled code might be only the size implied by the fill pointer.  







**packages:** The loader is required to find the corresponding *package object* as if by calling <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> with the package name as an argument. An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if no <ClLinks  term={"package"}><i>package</i></ClLinks> of that name exists at load time. 



<ClLinks  term={"random-state"}><b>random-state:</b></ClLinks> A constant <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> object cannot be used as the state argument to the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> modifies this data structure. 



**structure, standard-object:** <ClLinks  term={"object"}><i>Objects</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> may appear in compiled constants if there is an appropriate <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> method defined for that <ClLinks  term={"type"}><i>type</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on any <ClLinks  term={"object"}><i>object</i></ClLinks> that is referenced as a *literal object* if the <ClLinks  term={"object"}><i>object</i></ClLinks> is a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, or any of a (possibly empty) <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> set of other *classes*. The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> only calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> once for any given <ClLinks  term={"object"}><i>object</i></ClLinks> within a single <ClLinks  term={"file"}><i>file</i></ClLinks>. 



<ClLinks  term={"symbol"}><b>symbol:</b></ClLinks> In order to guarantee that <GlossaryTerm styled={true} term={"compiled file"}><i>compiled files</i></GlossaryTerm> can be *loaded* correctly, users must ensure that the <ClLinks  term={"package"}><i>packages</i></ClLinks> referenced in those <ClLinks  term={"file"}><i>files</i></ClLinks> are defined consistently at compile time and load time. <GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> must satisfy the following requirements: 



1\. The <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> when a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in the <ClLinks  term={"file"}><i>file</i></ClLinks> is processed by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> must be the same as the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> when the <ClLinks  term={"code"}><i>code</i></ClLinks> corresponding to that <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is executed by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. In particular: 



a. Any <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in a <ClLinks  term={"file"}><i>file</i></ClLinks> that alters the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> must change it to 



a <ClLinks  term={"package"}><i>package</i></ClLinks> of the same <ClLinks  term={"name"}><i>name</i></ClLinks> both at compile time and at load time. 



b. If the first *non-atomic top level form* in the <ClLinks  term={"file"}><i>file</i></ClLinks> is not an <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>, 



then the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at the time <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> is called must be a <ClLinks  term={"package"}><i>package</i></ClLinks> with 



the same <ClLinks  term={"name"}><i>name</i></ClLinks> as the package that was the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at the time 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> was called. 



2\. For all <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> appearing lexically within a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> that were <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> that was the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> during processing of that <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> at compile time, but whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> was another <ClLinks  term={"package"}><i>package</i></ClLinks>, at load time there must be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with the same <ClLinks  term={"name"}><i>name</i></ClLinks> that is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in both the load-time <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> and in the <ClLinks  term={"package"}><i>package</i></ClLinks> with the same <ClLinks  term={"name"}><i>name</i></ClLinks> as the compile-time <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 



3\. For all <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> represented in the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> that were <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> in their <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> at compile time, there must be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with the same <ClLinks  term={"name"}><i>name</i></ClLinks> that is an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the <ClLinks  term={"package"}><i>package</i></ClLinks> with the same <ClLinks  term={"name"}><i>name</i></ClLinks> at load time. 



If any of these conditions do not hold, the <ClLinks  term={"package"}><i>package</i></ClLinks> in which the <ClLinks  term={"loader"}><i>loader</i></ClLinks> looks for the affected <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is unspecified. <ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> are permitted to signal an error or to define this behavior. 











