 



The following rules apply to the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> in a <ClLinks  term={"place"}><i>place</i></ClLinks>: 



1\. The evaluation ordering of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> within a <ClLinks  term={"place"}><i>place</i></ClLinks> is determined by the order specified by the second value returned by <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>. For all <ClLinks  term={"place"}><i>places</i></ClLinks> defined by this specification (*e.g.*, <DictionaryLink  term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink  term={"ldb"}><b>ldb</b></DictionaryLink>, *. . .*), this order of evaluation is left-to-right. When a <ClLinks  term={"place"}><i>place</i></ClLinks> is derived from a macro expansion, this rule is applied after the macro is expanded to find the appropriate <ClLinks  term={"place"}><i>place</i></ClLinks>. 



<ClLinks  term={"place"}><i>Places</i></ClLinks> defined by using <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> or <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> use the evaluation order defined by those definitions. For example, consider the following: 



(defmacro wrong-order (x y) ‘(getf ,y ,x)) 



This following <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates place2 first and then place1 because that is the order they are evaluated in the macro expansion: 



(push value (wrong-order place1 place2)) 



2\. For the <ClLinks  term={"macro"}><i>macros</i></ClLinks> that manipulate <ClLinks  term={"place"}><i>places</i></ClLinks> (<DictionaryLink  term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink  term={"pushnew"}><b>pushnew</b></DictionaryLink>, <DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink>, <DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink>, <DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"pop"}><b>pop</b></DictionaryLink>, and those defined by <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>) the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the macro call are evaluated exactly once in left-to-right order, with the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"place"}><i>places</i></ClLinks> evaluated in the order specified in (1). 



<DictionaryLink  term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink  term={"pushnew"}><b>pushnew</b></DictionaryLink>, <DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink>, <DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink>, <DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink  term={"pop"}><b>pop</b></DictionaryLink> evaluate all <ClLinks  term={"subform"}><i>subforms</i></ClLinks> before modifying any of the <ClLinks  term={"place"}><i>place</i></ClLinks> locations. <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> (in the case when <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> has more than two arguments) performs its operation on each pair in sequence. For example, in 



(setf place1 value1 place2 value2 ...) 



the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of place1 and value1 are evaluated, the location specified by place1 is modified to contain the value returned by value1, and then the rest of the <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> form is processed in a like manner. 



3\. For <DictionaryLink  term={"check-type"}><b>check-type</b></DictionaryLink>, <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, and <DictionaryLink  term={"ccase"}><b>ccase</b></DictionaryLink>, <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated once as in (1), but might be evaluated again if the type check fails in the case of <DictionaryLink  term={"check-type"}><b>check-type</b></DictionaryLink> or none of the cases hold in <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> and <DictionaryLink  term={"ccase"}><b>ccase</b></DictionaryLink>. 



4\. For <DictionaryLink  term={"assert"}><b>assert</b></DictionaryLink>, the order of evaluation of the generalized references is not specified. Rules 2, 3 and 4 cover all *standardized macros* that manipulate <ClLinks  term={"place"}><i>places</i></ClLinks>. 



