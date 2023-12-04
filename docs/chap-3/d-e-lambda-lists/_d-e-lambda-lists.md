 



A *lambda list* is a *list* that specifies a set of *parameters* (sometimes called *lambda variables*) and a protocol for receiving *values* for those *parameters*. 



There are several kinds of *lambda lists*. 



|**Context Kind of Lambda List**|

| :- |

|<p>**defun** *form ordinary lambda list* </p><p>**defmacro** *form macro lambda list* </p><p>*lambda expression ordinary lambda list* </p><p>**flet** local *function* definition *ordinary lambda list* </p><p>**labels** local *function* definition *ordinary lambda list* </p><p>**handler-case** *clause* specification *ordinary lambda list* </p><p>**restart-case** *clause* specification *ordinary lambda list* </p><p>**macrolet** local *macro* definition *macro lambda list* </p><p>**define-method-combination** *ordinary lambda list* </p><p>**define-method-combination** :arguments option *define-method-combination arguments lambda list***defstruct** :constructor option *boa lambda list* </p><p>**defgeneric** *form generic function lambda list* **defgeneric** *method* clause *specialized lambda list* </p><p>**defmethod** *form specialized lambda list* </p><p>**defsetf** *form defsetf lambda list* </p><p>**define-setf-expander** *form macro lambda list* </p><p>**deftype** *form deftype lambda list* </p><p>**destructuring-bind** *form destructuring lambda list* **define-compiler-macro** *form macro lambda list* </p><p>**define-modify-macro** *form define-modify-macro lambda list*</p>|





\* 



**Figure 3–10. What Kind of Lambda Lists to Use** 



Figure 3–11 lists some *defined names* that are applicable to *lambda lists*. 



|**lambda-list-keywords lambda-parameters-limit**|

| :- |





**Figure 3–11. Defined names applicable to lambda lists** 



