 



A *lambda list* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> (sometimes called *lambda variables*) and a protocol for receiving <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> for those <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>. 



There are several kinds of *lambda lists*. 



|**Context Kind of Lambda List**|

| :- |

|<p><ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> *form ordinary lambda list* </p><p><ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> *form macro lambda list* </p><p>*lambda expression ordinary lambda list* </p><p><ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks> local <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definition *ordinary lambda list* </p><p><ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks> local <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definition *ordinary lambda list* </p><p><ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> *clause* specification *ordinary lambda list* </p><p><ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> *clause* specification *ordinary lambda list* </p><p><ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> local <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definition *macro lambda list* </p><p><ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> *ordinary lambda list* </p><p><ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> :arguments option *define-method-combination arguments lambda list<ClLinks styled={true} term={"t"}><b>*defstruct</b></ClLinks> :constructor option *boa lambda list* </p><p><ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> *form generic function lambda list* <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> clause *specialized lambda list* </p><p><ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> *form specialized lambda list* </p><p><ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks> *form defsetf lambda list* </p><p><ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> *form macro lambda list* </p><p><ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> *form deftype lambda list* </p><p><ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> *form destructuring lambda list* <ClLinks styled={true} term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks> *form macro lambda list* </p><p><ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> *form define-modify-macro lambda list*</p>|





\* 



**Figure 3–10. What Kind of Lambda Lists to Use** 



Figure 3–11 lists some *defined names* that are applicable to *lambda lists*. 



|**lambda-list-keywords lambda-parameters-limit**|

| :- |





**Figure 3–11. Defined names applicable to lambda lists** 



