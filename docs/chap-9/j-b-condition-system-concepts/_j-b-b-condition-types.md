 

Figure 9–1 lists the *standardized condition types*. Additional *condition types* can be defined by using **define-condition**. 

|**arithmetic-error floating-point-overflow simple-type-error cell-error floating-point-underflow simple-warning condition package-error storage-condition control-error parse-error stream-error division-by-zero print-not-readable style-warning end-of-file program-error type-error error reader-error unbound-slot file-error serious-condition unbound-variable floating-point-inexact simple-condition undefined-function floating-point-invalid-operation simple-error warning**|
| :- |


**Figure 9–1. Standardized Condition Types** 

All *condition* types are *subtypes* of *type* **condition**. That is, 

(typep *c* ’condition) *→ true* 

if and only if *c* is a *condition*. 

*Implementations* must define all specified *subtype* relationships. Except where noted, all *subtype* relationships indicated in this document are not mutually exclusive. A *condition* inherits the structure of its *supertypes*. 

The metaclass of the *class* **condition** is not specified. *Names* of *condition types* may be used to specify *supertype* relationships in **define-condition**, but the consequences are not specified if an attempt is made to use a *condition type* as a *superclass* in a **defclass** *form*. 

Figure 9–2 shows *operators* that define *condition types* and creating *conditions*. 

|**define-condition make-condition**|
| :- |


**Figure 9–2. Operators that define and create conditions.** 



 

 

Figure 9–3 shows *operators* that *read* the *value* of *condition slots*. 

|&#60;p&#62;**arithmetic-error-operands simple-condition-format-arguments arithmetic-error-operation simple-condition-format-control cell-error-name stream-error-stream** &#60;/p&#62;&#60;p&#62;**file-error-pathname type-error-datum** &#60;/p&#62;&#60;p&#62;**package-error-package type-error-expected-type** &#60;/p&#62;&#60;p&#62;**print-not-readable-object unbound-slot-instance**&#60;/p&#62;|
| :- |


**Figure 9–3. Operators that read condition slots.** 

