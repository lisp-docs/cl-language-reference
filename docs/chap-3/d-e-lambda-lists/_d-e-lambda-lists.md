 



A <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that specifies a set of <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm> (sometimes called <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>) and a protocol for receiving <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> for those <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm>. 



There are several kinds of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>. 



|**Context Kind of Lambda List**|

| :- |

|<p><DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> *form ordinary lambda list* </p><p><DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> *form macro lambda list* </p><p>*lambda expression ordinary lambda list* </p><p><DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> local <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> local <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"handler-case"}><b>handler-case</b></DictionaryLink> *clause* specification <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"restart-case"}><b>restart-case</b></DictionaryLink> *clause* specification <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> local <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> :arguments option *define-method-combination arguments lambda list<DictionaryLink  term={"t"}><b>*defstruct</b></DictionaryLink> :constructor option <GlossaryTerm styled={true} term={"boa lambda list"}><i>boa lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> *form generic function lambda list* <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> clause <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> </p><p><DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> *form specialized lambda list* </p><p><DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> *form defsetf lambda list* </p><p><DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> *form macro lambda list* </p><p><DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> *form deftype lambda list* </p><p><DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> *form destructuring lambda list* <DictionaryLink  term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink> *form macro lambda list* </p><p><DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> *form define-modify-macro lambda list*</p>|





\* 



**Figure 3–10. What Kind of Lambda Lists to Use** 



Figure 3–11 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>. 



|**lambda-list-keywords lambda-parameters-limit**|

| :- |





**Figure 3–11. Defined names applicable to lambda lists** 



