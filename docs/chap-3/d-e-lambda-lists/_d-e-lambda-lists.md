 

A *lambda list* is a *list* that specifies a set of *parameters* (sometimes called *lambda variables*) and a protocol for receiving *values* for those *parameters*. 

There are several kinds of *lambda lists*. 

|**Context Kind of Lambda List**|
| :- |
|&#60;p&#62;**defun** *form ordinary lambda list* &#60;/p&#62;&#60;p&#62;**defmacro** *form macro lambda list* &#60;/p&#62;&#60;p&#62;*lambda expression ordinary lambda list* &#60;/p&#62;&#60;p&#62;**flet** local *function* definition *ordinary lambda list* &#60;/p&#62;&#60;p&#62;**labels** local *function* definition *ordinary lambda list* &#60;/p&#62;&#60;p&#62;**handler-case** *clause* specification *ordinary lambda list* &#60;/p&#62;&#60;p&#62;**restart-case** *clause* specification *ordinary lambda list* &#60;/p&#62;&#60;p&#62;**macrolet** local *macro* definition *macro lambda list* &#60;/p&#62;&#60;p&#62;**define-method-combination** *ordinary lambda list* &#60;/p&#62;&#60;p&#62;**define-method-combination** :arguments option *define-method-combination arguments lambda list***defstruct** :constructor option *boa lambda list* &#60;/p&#62;&#60;p&#62;**defgeneric** *form generic function lambda list* **defgeneric** *method* clause *specialized lambda list* &#60;/p&#62;&#60;p&#62;**defmethod** *form specialized lambda list* &#60;/p&#62;&#60;p&#62;**defsetf** *form defsetf lambda list* &#60;/p&#62;&#60;p&#62;**define-setf-expander** *form macro lambda list* &#60;/p&#62;&#60;p&#62;**deftype** *form deftype lambda list* &#60;/p&#62;&#60;p&#62;**destructuring-bind** *form destructuring lambda list* **define-compiler-macro** *form macro lambda list* &#60;/p&#62;&#60;p&#62;**define-modify-macro** *form define-modify-macro lambda list*&#60;/p&#62;|


\* 

**Figure 3–10. What Kind of Lambda Lists to Use** 

Figure 3–11 lists some *defined names* that are applicable to *lambda lists*. 

|**lambda-list-keywords lambda-parameters-limit**|
| :- |


**Figure 3–11. Defined names applicable to lambda lists** 

