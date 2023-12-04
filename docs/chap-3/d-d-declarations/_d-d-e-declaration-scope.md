 



*Declarations* can be divided into two kinds: those that apply to the *bindings* of *variables* or *functions*; and those that do not apply to *bindings*. 



A *declaration* that appears at the head of a binding *form* and applies to a *variable* or *function binding* made by that *form* is called a *bound declaration*; such a *declaration* affects both the *binding* and any references within the *scope* of the *declaration*. 



*Declarations* that are not *bound declarations* are called *free declarations*. 



A *free declaration* in a *form F*1 that applies to a *binding* for a *name N established* by some *form F*2 of which *F*1 is a *subform* affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the *binding* of *N* by *F*2 is *established*. 



*Declarations* that do not apply to *bindings* can only appear as *free declarations*. 



The *scope* of a *bound declaration* is the same as the *lexical scope* of the *binding* to which it applies; for *special variables*, this means the *scope* that the *binding* would have had had it been a *lexical binding*. 



Unless explicitly stated otherwise, the *scope* of a *free declaration* includes only the body *subforms* of the *form* at whose head it appears, and no other *subforms*. The *scope* of *free declarations* specifically does not include *initialization forms* for *bindings* established by the *form* containing the *declarations*. 



Some *iteration forms* include step, end-test, or result *subforms* that are also included in the *scope* of *declarations* that appear in the *iteration form*. Specifically, the *iteration forms* and *subforms* involved are: 



*•* **do**, **do\***: *step-forms*, *end-test-form*, and *result-forms*. 



*•* **dolist**, **dotimes**: *result-form* 



*•* **do-all-symbols**, **do-external-symbols**, **do-symbols**: *result-form*  







