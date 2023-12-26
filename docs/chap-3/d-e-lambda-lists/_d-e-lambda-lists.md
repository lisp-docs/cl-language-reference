 



A <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> is a <ClLinks  term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> (sometimes called <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>) and a protocol for receiving <ClLinks  term={"value"}><i>values</i></ClLinks> for those <ClLinks  term={"parameter"}><i>parameters</i></ClLinks>. 



There are several kinds of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>. 



|**Context Kind of Lambda List**|

| :- |

|<p><ClLinks  term={"defun"}><b>defun</b></ClLinks> *form ordinary lambda list* </p><p><ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> *form macro lambda list* </p><p>*lambda expression ordinary lambda list* </p><p><ClLinks  term={"flet"}><b>flet</b></ClLinks> local <ClLinks  term={"function"}><i>function</i></ClLinks> definition <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"labels"}><b>labels</b></ClLinks> local <ClLinks  term={"function"}><i>function</i></ClLinks> definition <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"handler-case"}><b>handler-case</b></ClLinks> *clause* specification <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"restart-case"}><b>restart-case</b></ClLinks> *clause* specification <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> local <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks> :arguments option *define-method-combination arguments lambda list<ClLinks  term={"t"}><b>*defstruct</b></ClLinks> :constructor option <GlossaryTerm styled={true} term={"boa lambda list"}><i>boa lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> *form generic function lambda list* <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks  term={"method"}><i>method</i></ClLinks> clause <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> </p><p><ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> *form specialized lambda list* </p><p><ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> *form defsetf lambda list* </p><p><ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> *form macro lambda list* </p><p><ClLinks  term={"deftype"}><b>deftype</b></ClLinks> *form deftype lambda list* </p><p><ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> *form destructuring lambda list* <ClLinks  term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks> *form macro lambda list* </p><p><ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> *form define-modify-macro lambda list*</p>|





\* 



**Figure 3–10. What Kind of Lambda Lists to Use** 



Figure 3–11 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>. 



|**lambda-list-keywords lambda-parameters-limit**|

| :- |





**Figure 3–11. Defined names applicable to lambda lists** 



