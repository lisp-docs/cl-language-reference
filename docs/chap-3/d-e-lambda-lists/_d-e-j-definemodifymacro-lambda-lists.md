 



A *define-modify-macro lambda list* is used by <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>. 



A *define-modify-macro lambda list* can contain the *lambda list keywords* shown in Figure 3–20. 



|**&amp;optional &amp;rest**|

| :- |





**Figure 3–20. Lambda List Keywords used by Define-modify-macro Lambda Lists** 



*Define-modify-macro lambda lists* are similar to *ordinary lambda lists*, but do not support keyword arguments. <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> has no need match keyword arguments, and a *rest parameter* is sufficient. *Aux variables* are also not supported, since <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> has no body <ClLinks  term={"form"}><i>forms</i></ClLinks> which could refer to such <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. See the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>. 



