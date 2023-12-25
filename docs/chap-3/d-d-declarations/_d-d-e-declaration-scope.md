 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> can be divided into two kinds: those that apply to the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of <ClLinks  term={"variable"}><i>variables</i></ClLinks> or <ClLinks  term={"function"}><i>functions</i></ClLinks>; and those that do not apply to <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



A <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> that appears at the head of a binding <ClLinks  term={"form"}><i>form</i></ClLinks> and applies to a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *function binding* made by that <ClLinks  term={"form"}><i>form</i></ClLinks> is called a *bound declaration*; such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> affects both the <ClLinks  term={"binding"}><i>binding</i></ClLinks> and any references within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> that are not *bound declarations* are called *free declarations*. 



A *free declaration* in a *form F*1 that applies to a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *name N established* by some *form F*2 of which *F*1 is a <ClLinks  term={"subform"}><i>subform</i></ClLinks> affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of *N* by *F*2 is *established*. 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> that do not apply to <ClLinks  term={"binding"}><i>bindings</i></ClLinks> can only appear as *free declarations*. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a *bound declaration* is the same as the *lexical scope* of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> to which it applies; for *special variables*, this means the <ClLinks  term={"scope"}><i>scope</i></ClLinks> that the <ClLinks  term={"binding"}><i>binding</i></ClLinks> would have had had it been a *lexical binding*. 



Unless explicitly stated otherwise, the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a *free declaration* includes only the body <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> at whose head it appears, and no other <ClLinks  term={"subform"}><i>subforms</i></ClLinks>. The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of *free declarations* specifically does not include *initialization forms* for <ClLinks  term={"binding"}><i>bindings</i></ClLinks> established by the <ClLinks  term={"form"}><i>form</i></ClLinks> containing the <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>. 



Some *iteration forms* include step, end-test, or result <ClLinks  term={"subform"}><i>subforms</i></ClLinks> that are also included in the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> that appear in the *iteration form*. Specifically, the *iteration forms* and <ClLinks  term={"subform"}><i>subforms</i></ClLinks> involved are: 



*•* <ClLinks  term={"do"}><b>do</b></ClLinks>, <ClLinks  term={"do"}><b>do\*</b></ClLinks>: *step-forms*, *end-test-form*, and *result-forms*. 



*•* <ClLinks  term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks  term={"dotimes"}><b>dotimes</b></ClLinks>: *result-form* 



*•* <ClLinks  term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks>, <ClLinks  term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks>, <ClLinks  term={"do-symbols"}><b>do-symbols</b></ClLinks>: *result-form*  







