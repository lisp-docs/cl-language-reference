 



A *define-modify-macro lambda list* is used by <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. 



A *define-modify-macro lambda list* can contain the *lambda list keywords* shown in Figure 3–20. 



|**&amp;optional &amp;rest**|

| :- |





**Figure 3–20. Lambda List Keywords used by Define-modify-macro Lambda Lists** 



*Define-modify-macro lambda lists* are similar to *ordinary lambda lists*, but do not support keyword arguments. <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> has no need match keyword arguments, and a *rest parameter* is sufficient. *Aux variables* are also not supported, since <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> has no body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> which could refer to such <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. 



