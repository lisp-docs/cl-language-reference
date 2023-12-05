 



A *define-modify-macro lambda list* is used by **define-modify-macro**. 



A *define-modify-macro lambda list* can contain the *lambda list keywords* shown in Figure 3–20. 



|**&amp;optional &amp;rest**|

| :- |





**Figure 3–20. Lambda List Keywords used by Define-modify-macro Lambda Lists** 



*Define-modify-macro lambda lists* are similar to *ordinary lambda lists*, but do not support keyword arguments. **define-modify-macro** has no need match keyword arguments, and a *rest parameter* is sufficient. *Aux variables* are also not supported, since **define-modify-macro** has no body *forms* which could refer to such *bindings*. See the *macro* **define-modify-macro**. 



