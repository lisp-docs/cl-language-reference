 



Figure 9–1 lists the *standardized condition types*. Additional *condition types* can be defined by using <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>. 



|**arithmetic-error floating-point-overflow simple-type-error cell-error floating-point-underflow simple-warning condition package-error storage-condition control-error parse-error stream-error division-by-zero print-not-readable style-warning end-of-file program-error type-error error reader-error unbound-slot file-error serious-condition unbound-variable floating-point-inexact simple-condition undefined-function floating-point-invalid-operation simple-error warning**|

| :- |





**Figure 9–1. Standardized Condition Types** 



All <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> types are <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. That is, 



(typep *c* ’condition) → true 



if and only if *c* is a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



<ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> must define all specified <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> relationships. Except where noted, all <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> relationships indicated in this document are not mutually exclusive. A <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> inherits the structure of its <ClLinks styled={true} term={"supertype"}><i>supertypes</i></ClLinks>. 



The metaclass of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks> is not specified. <ClLinks styled={true} term={"name"}><i>Names</i></ClLinks> of *condition types* may be used to specify <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> relationships in <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, but the consequences are not specified if an attempt is made to use a *condition type* as a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> in a <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



Figure 9–2 shows <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> that define *condition types* and creating <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>. 



|**define-condition make-condition**|

| :- |





**Figure 9–2. Operators that define and create conditions.** 







 



 



Figure 9–3 shows <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> that <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of *condition slots*. 



|<p>**arithmetic-error-operands simple-condition-format-arguments arithmetic-error-operation simple-condition-format-control cell-error-name stream-error-stream** </p><p>**file-error-pathname type-error-datum** </p><p>**package-error-package type-error-expected-type** </p><p>**print-not-readable-object unbound-slot-instance**</p>|

| :- |





**Figure 9–3. Operators that read condition slots.** 



