 



<GlossaryTerm styled={true} term={"declaration"}><i>Declarations</i></GlossaryTerm> can be divided into two kinds: those that apply to the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>; and those that do not apply to <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> that appears at the head of a binding <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and applies to a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or *function binding* made by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is called a *bound declaration*; such a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> affects both the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> and any references within the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>Declarations</i></GlossaryTerm> that are not *bound declarations* are called *free declarations*. 



A *free declaration* in a *form F*1 that applies to a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *name N established* by some *form F*2 of which *F*1 is a <GlossaryTerm styled={true} term={"subform"}><i>subform</i></GlossaryTerm> affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of *N* by *F*2 is *established*. 



<GlossaryTerm styled={true} term={"declaration"}><i>Declarations</i></GlossaryTerm> that do not apply to <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> can only appear as *free declarations*. 



The <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of a *bound declaration* is the same as the *lexical scope* of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> to which it applies; for *special variables*, this means the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> that the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> would have had had it been a *lexical binding*. 



Unless explicitly stated otherwise, the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of a *free declaration* includes only the body <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> at whose head it appears, and no other <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of *free declarations* specifically does not include *initialization forms* for <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> established by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> containing the <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>. 



Some *iteration forms* include step, end-test, or result <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> that are also included in the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> that appear in the *iteration form*. Specifically, the *iteration forms* and <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> involved are: 



*•* <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>: *step-forms*, *end-test-form*, and *result-forms*. 



*•* <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink>: *result-form* 



*•* <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink>: *result-form*  







