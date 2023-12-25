 



Figure 9–1 lists the *standardized condition types*. Additional *condition types* can be defined by using <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>. 



|**arithmetic-error floating-point-overflow simple-type-error cell-error floating-point-underflow simple-warning condition package-error storage-condition control-error parse-error stream-error division-by-zero print-not-readable style-warning end-of-file program-error type-error error reader-error unbound-slot file-error serious-condition unbound-variable floating-point-inexact simple-condition undefined-function floating-point-invalid-operation simple-error warning**|

| :- |





**Figure 9–1. Standardized Condition Types** 



All <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> types are <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. That is, 



(typep *c* ’condition) *→ true* 



if and only if *c* is a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> must define all specified <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> relationships. Except where noted, all <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> relationships indicated in this document are not mutually exclusive. A <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> inherits the structure of its <GlossaryTerm styled={true} term={"supertype"}><i>supertypes</i></GlossaryTerm>. 



The metaclass of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink> is not specified. <GlossaryTerm styled={true} term={"name"}><i>Names</i></GlossaryTerm> of *condition types* may be used to specify <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> relationships in <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, but the consequences are not specified if an attempt is made to use a *condition type* as a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> in a <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Figure 9–2 shows <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> that define *condition types* and creating <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>. 



|**define-condition make-condition**|

| :- |





**Figure 9–2. Operators that define and create conditions.** 







 



 



Figure 9–3 shows <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of *condition slots*. 



|<p>**arithmetic-error-operands simple-condition-format-arguments arithmetic-error-operation simple-condition-format-control cell-error-name stream-error-stream** </p><p>**file-error-pathname type-error-datum** </p><p>**package-error-package type-error-expected-type** </p><p>**print-not-readable-object unbound-slot-instance**</p>|

| :- |





**Figure 9–3. Operators that read condition slots.** 



