 



A <GlossaryTerm styled={true} term={"define-modify-macro lambda list"}><i>define-modify-macro lambda list</i></GlossaryTerm> is used by <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"define-modify-macro lambda list"}><i>define-modify-macro lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–20. 



|**&amp;optional &amp;rest**|

| :- |





**Figure 3–20. Lambda List Keywords used by Define-modify-macro Lambda Lists** 



<GlossaryTerm styled={true} term={"define-modify-macro lambda list"}><i>Define-modify-macro lambda lists</i></GlossaryTerm> are similar to <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda lists</i></GlossaryTerm>, but do not support keyword arguments. <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> has no need match keyword arguments, and a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> is sufficient. <GlossaryTerm styled={true} term={"aux variable"}><i>Aux variables</i></GlossaryTerm> are also not supported, since <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> has no body <ClLinks  term={"form"}><i>forms</i></ClLinks> which could refer to such <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. See the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. 



