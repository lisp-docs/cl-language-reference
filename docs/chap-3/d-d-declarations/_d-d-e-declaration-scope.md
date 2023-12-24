 



<ClLinks styled={true} term={"declaration"}><i>Declarations</i></ClLinks> can be divided into two kinds: those that apply to the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> or <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>; and those that do not apply to <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. 



A <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> that appears at the head of a binding <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and applies to a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or *function binding* made by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is called a *bound declaration*; such a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> affects both the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> and any references within the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>Declarations</i></ClLinks> that are not *bound declarations* are called *free declarations*. 



A *free declaration* in a *form F*1 that applies to a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *name N established* by some *form F*2 of which *F*1 is a <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of *N* by *F*2 is *established*. 



<ClLinks styled={true} term={"declaration"}><i>Declarations</i></ClLinks> that do not apply to <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> can only appear as *free declarations*. 



The <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of a *bound declaration* is the same as the *lexical scope* of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> to which it applies; for *special variables*, this means the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> that the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> would have had had it been a *lexical binding*. 



Unless explicitly stated otherwise, the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of a *free declaration* includes only the body <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> at whose head it appears, and no other <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks>. The <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of *free declarations* specifically does not include *initialization forms* for <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> established by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> containing the <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks>. 



Some *iteration forms* include step, end-test, or result <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> that are also included in the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> that appear in the *iteration form*. Specifically, the *iteration forms* and <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> involved are: 



*•* <ClLinks styled={true} term={"do"}><b>do</b></ClLinks>, <ClLinks styled={true} term={"do"}><b>do\*</b></ClLinks>: *step-forms*, *end-test-form*, and *result-forms*. 



*•* <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks>: *result-form* 



*•* <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks>, <ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks>, <ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks>: *result-form*  







