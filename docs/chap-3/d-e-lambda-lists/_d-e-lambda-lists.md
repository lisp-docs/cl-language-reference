 



A *lambda list* is a <ClLinks  term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> (sometimes called *lambda variables*) and a protocol for receiving <ClLinks  term={"value"}><i>values</i></ClLinks> for those <ClLinks  term={"parameter"}><i>parameters</i></ClLinks>. 



There are several kinds of *lambda lists*. 



|**Context Kind of Lambda List**|

| :- |

|<p><ClLinks  term={"defun"}><b>defun</b></ClLinks> *form ordinary lambda list* </p><p><ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> *form macro lambda list* </p><p>*lambda expression ordinary lambda list* </p><p><ClLinks  term={"flet"}><b>flet</b></ClLinks> local <ClLinks  term={"function"}><i>function</i></ClLinks> definition *ordinary lambda list* </p><p><ClLinks  term={"labels"}><b>labels</b></ClLinks> local <ClLinks  term={"function"}><i>function</i></ClLinks> definition *ordinary lambda list* </p><p><ClLinks  term={"handler-case"}><b>handler-case</b></ClLinks> *clause* specification *ordinary lambda list* </p><p><ClLinks  term={"restart-case"}><b>restart-case</b></ClLinks> *clause* specification *ordinary lambda list* </p><p><ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> local <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition *macro lambda list* </p><p><ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks> *ordinary lambda list* </p><p><ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks> :arguments option *define-method-combination arguments lambda list<ClLinks  term={"t"}><b>*defstruct</b></ClLinks> :constructor option *boa lambda list* </p><p><ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> *form generic function lambda list* <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks  term={"method"}><i>method</i></ClLinks> clause *specialized lambda list* </p><p><ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> *form specialized lambda list* </p><p><ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> *form defsetf lambda list* </p><p><ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> *form macro lambda list* </p><p><ClLinks  term={"deftype"}><b>deftype</b></ClLinks> *form deftype lambda list* </p><p><ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> *form destructuring lambda list* <ClLinks  term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks> *form macro lambda list* </p><p><ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> *form define-modify-macro lambda list*</p>|





\* 



**Figure 3–10. What Kind of Lambda Lists to Use** 



Figure 3–11 lists some *defined names* that are applicable to *lambda lists*. 



|**lambda-list-keywords lambda-parameters-limit**|

| :- |





**Figure 3–11. Defined names applicable to lambda lists** 



