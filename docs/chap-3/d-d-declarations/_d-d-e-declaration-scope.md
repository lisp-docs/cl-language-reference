 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> can be divided into two kinds: those that apply to the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of <ClLinks  term={"variable"}><i>variables</i></ClLinks> or <ClLinks  term={"function"}><i>functions</i></ClLinks>; and those that do not apply to <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



A <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> that appears at the head of a binding <ClLinks  term={"form"}><i>form</i></ClLinks> and applies to a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *function binding* made by that <ClLinks  term={"form"}><i>form</i></ClLinks> is called a <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declaration</i></GlossaryTerm>; such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> affects both the <ClLinks  term={"binding"}><i>binding</i></ClLinks> and any references within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> that are not <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm> are called <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"free declaration"}><i>free declaration</i></GlossaryTerm> in a *form F*1 that applies to a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *name N established* by some *form F*2 of which *F*1 is a <ClLinks  term={"subform"}><i>subform</i></ClLinks> affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of *N* by *F*2 is *established*. 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> that do not apply to <ClLinks  term={"binding"}><i>bindings</i></ClLinks> can only appear as <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declaration</i></GlossaryTerm> is the same as the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> to which it applies; for <GlossaryTerm styled={true} term={"special variable"}><i>special variables</i></GlossaryTerm>, this means the <ClLinks  term={"scope"}><i>scope</i></ClLinks> that the <ClLinks  term={"binding"}><i>binding</i></ClLinks> would have had had it been a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm>. 



Unless explicitly stated otherwise, the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <GlossaryTerm styled={true} term={"free declaration"}><i>free declaration</i></GlossaryTerm> includes only the body <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> at whose head it appears, and no other <ClLinks  term={"subform"}><i>subforms</i></ClLinks>. The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> specifically does not include <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for <ClLinks  term={"binding"}><i>bindings</i></ClLinks> established by the <ClLinks  term={"form"}><i>form</i></ClLinks> containing the <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>. 



Some <GlossaryTerm styled={true} term={"iteration form"}><i>iteration forms</i></GlossaryTerm> include step, end-test, or result <ClLinks  term={"subform"}><i>subforms</i></ClLinks> that are also included in the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> that appear in the <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. Specifically, the <GlossaryTerm styled={true} term={"iteration form"}><i>iteration forms</i></GlossaryTerm> and <ClLinks  term={"subform"}><i>subforms</i></ClLinks> involved are: 



*•* <ClLinks  term={"do"}><b>do</b></ClLinks>, <ClLinks  term={"do"}><b>do\*</b></ClLinks>: *step-forms*, *end-test-form*, and *result-forms*. 



*•* <ClLinks  term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks  term={"dotimes"}><b>dotimes</b></ClLinks>: *result-form* 



*•* <ClLinks  term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks>, <ClLinks  term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks>, <ClLinks  term={"do-symbols"}><b>do-symbols</b></ClLinks>: *result-form*  







