 



If two *literal objects* appearing in the source code for a single file processed with the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> are the <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>, the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> must also be the <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. With the exception of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> and <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>, any two *literal objects* in <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> being processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> may be *coalesced* if and only if they are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> ; if they are either both <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> or both <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>, they may only be *coalesced* if and only if they are <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. 



<GlossaryTerm  term={"object"}><i>Objects</i></GlossaryTerm> containing circular references can be <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> is required to preserve <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>ness of substructures within a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. Preserving <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>ness means that subobjects that are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> must be the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> in the corresponding <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. 



In addition, the following are constraints on the handling of *literal objects* by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> : 



<ClLinks  term={"array"}><b>array:</b></ClLinks> If an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the source code is a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>, then the corresponding <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the compiled code will also be a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>. If an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the source code is displaced, has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , or is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, the corresponding <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the compiled code might lack any or all of these qualities. If an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the source code has a fill pointer, then the corresponding <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> in the compiled code might be only the size implied by the fill pointer.  







**packages:** The loader is required to find the corresponding *package object* as if by calling <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> with the package name as an argument. An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if no <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> of that name exists at load time. 



<ClLinks  term={"random-state"}><b>random-state:</b></ClLinks> A constant <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> object cannot be used as the state argument to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> modifies this data structure. 



**structure, standard-object:** <GlossaryTerm  term={"object"}><i>Objects</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> may appear in compiled constants if there is an appropriate <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> method defined for that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is referenced as a *literal object* if the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, or any of a (possibly empty) <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> set of other *classes*. The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> only calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> once for any given <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> within a single <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. 



<ClLinks  term={"symbol"}><b>symbol:</b></ClLinks> In order to guarantee that <GlossaryTerm styled={true} term={"compiled file"}><i>compiled files</i></GlossaryTerm> can be *loaded* correctly, users must ensure that the <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> referenced in those <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> are defined consistently at compile time and load time. <GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> must satisfy the following requirements: 



1\. The <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> when a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is processed by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> must be the same as the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> when the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> corresponding to that <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is executed by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. In particular: 



a. Any <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> that alters the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> must change it to 



a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> of the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> both at compile time and at load time. 



b. If the first *non-atomic top level form* in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is not an <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, 



then the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at the time <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> is called must be a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> with 



the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as the package that was the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at the time 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> was called. 



2\. For all <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> appearing lexically within a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> that were <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> that was the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> during processing of that <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> at compile time, but whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> was another <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, at load time there must be a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in both the load-time <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> and in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as the compile-time <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 



3\. For all <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> represented in the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> that were <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> in their <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> at compile time, there must be a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> at load time. 



If any of these conditions do not hold, the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in which the <GlossaryTerm  term={"loader"}><i>loader</i></GlossaryTerm> looks for the affected <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is unspecified. <GlossaryTerm  term={"implementation"}><i>Implementations</i></GlossaryTerm> are permitted to signal an error or to define this behavior. 











