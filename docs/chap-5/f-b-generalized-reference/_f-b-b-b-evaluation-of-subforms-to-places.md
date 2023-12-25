 



The following rules apply to the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>: 



1\. The evaluation ordering of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> within a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is determined by the order specified by the second value returned by <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>. For all <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> defined by this specification (*e.g.*, <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink>, *. . .*), this order of evaluation is left-to-right. When a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is derived from a macro expansion, this rule is applied after the macro is expanded to find the appropriate <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"place"}><i>Places</i></GlossaryTerm> defined by using <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> or <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> use the evaluation order defined by those definitions. For example, consider the following: 



(defmacro wrong-order (x y) ‘(getf ,y ,x)) 



This following <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> evaluates place2 first and then place1 because that is the order they are evaluated in the macro expansion: 



(push value (wrong-order place1 place2)) 



2\. For the <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> that manipulate <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> (<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink>, <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink>, <DictionaryLink styled={true} term={"shiftf"}><b>shiftf</b></DictionaryLink>, <DictionaryLink styled={true} term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink>, and those defined by <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>) the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the macro call are evaluated exactly once in left-to-right order, with the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> evaluated in the order specified in (1). 



<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink>, <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink>, <DictionaryLink styled={true} term={"shiftf"}><b>shiftf</b></DictionaryLink>, <DictionaryLink styled={true} term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink> evaluate all <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> before modifying any of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> locations. <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> (in the case when <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> has more than two arguments) performs its operation on each pair in sequence. For example, in 



(setf place1 value1 place2 value2 ...) 



the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of place1 and value1 are evaluated, the location specified by place1 is modified to contain the value returned by value1, and then the rest of the <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> form is processed in a like manner. 



3\. For <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, and <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>, <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated once as in (1), but might be evaluated again if the type check fails in the case of <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> or none of the cases hold in <DictionaryLink styled={true} term={"ctypecase"}><b>ctypecase</b></DictionaryLink> and <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>. 



4\. For <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink>, the order of evaluation of the generalized references is not specified. Rules 2, 3 and 4 cover all *standardized macros* that manipulate <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>. 



