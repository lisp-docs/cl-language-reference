 



<GlossaryTerm  term={"declaration"}><i>Declarations</i></GlossaryTerm> can be divided into two kinds: those that apply to the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> or <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>; and those that do not apply to <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. 



A <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> that appears at the head of a binding <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and applies to a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> or *function binding* made by that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declaration</i></GlossaryTerm>; such a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> affects both the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> and any references within the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of the <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>Declarations</i></GlossaryTerm> that are not <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm> are called <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"free declaration"}><i>free declaration</i></GlossaryTerm> in a *form F*1 that applies to a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a *name N established* by some *form F*2 of which *F*1 is a <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> affects only references to *N* within *F*1; it does not to apply to other references to *N* outside of *F*1, nor does it affect the manner in which the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of *N* by *F*2 is *established*. 



<GlossaryTerm  term={"declaration"}><i>Declarations</i></GlossaryTerm> that do not apply to <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> can only appear as <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



The <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declaration</i></GlossaryTerm> is the same as the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> to which it applies; for <GlossaryTerm styled={true} term={"special variable"}><i>special variables</i></GlossaryTerm>, this means the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> that the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> would have had had it been a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm>. 



Unless explicitly stated otherwise, the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"free declaration"}><i>free declaration</i></GlossaryTerm> includes only the body <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> at whose head it appears, and no other <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm>. The <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> specifically does not include <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> established by the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> containing the <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>. 



Some <GlossaryTerm styled={true} term={"iteration form"}><i>iteration forms</i></GlossaryTerm> include step, end-test, or result <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> that are also included in the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm> that appear in the <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. Specifically, the <GlossaryTerm styled={true} term={"iteration form"}><i>iteration forms</i></GlossaryTerm> and <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> involved are: 



*•* <DictionaryLink  term={"do"}><b>do</b></DictionaryLink>, <DictionaryLink  term={"do"}><b>do\*</b></DictionaryLink>: *step-forms*, *end-test-form*, and *result-forms*. 



*•* <DictionaryLink  term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink  term={"dotimes"}><b>dotimes</b></DictionaryLink>: *result-form* 



*•* <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>: *result-form*  







