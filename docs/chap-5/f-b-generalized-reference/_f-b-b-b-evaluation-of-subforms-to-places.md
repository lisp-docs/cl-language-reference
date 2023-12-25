 



The following rules apply to the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> in a <ClLinks  term={"place"}><i>place</i></ClLinks>: 



1\. The evaluation ordering of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> within a <ClLinks  term={"place"}><i>place</i></ClLinks> is determined by the order specified by the second value returned by <ClLinks  term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>. For all <ClLinks  term={"place"}><i>places</i></ClLinks> defined by this specification (*e.g.*, <ClLinks  term={"getf"}><b>getf</b></ClLinks>, <ClLinks  term={"ldb"}><b>ldb</b></ClLinks>, *. . .*), this order of evaluation is left-to-right. When a <ClLinks  term={"place"}><i>place</i></ClLinks> is derived from a macro expansion, this rule is applied after the macro is expanded to find the appropriate <ClLinks  term={"place"}><i>place</i></ClLinks>. 



<ClLinks  term={"place"}><i>Places</i></ClLinks> defined by using <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> or <ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> use the evaluation order defined by those definitions. For example, consider the following: 



(defmacro wrong-order (x y) ‘(getf ,y ,x)) 



This following <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates place2 first and then place1 because that is the order they are evaluated in the macro expansion: 



(push value (wrong-order place1 place2)) 



2\. For the <ClLinks  term={"macro"}><i>macros</i></ClLinks> that manipulate <ClLinks  term={"place"}><i>places</i></ClLinks> (<ClLinks  term={"push"}><b>push</b></ClLinks>, <ClLinks  term={"pushnew"}><b>pushnew</b></ClLinks>, <ClLinks  term={"remf"}><b>remf</b></ClLinks>, <ClLinks  term={"incf"}><b>incf</b></ClLinks>, <ClLinks  term={"decf"}><b>decf</b></ClLinks>, <ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks>, <ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks>, <ClLinks  term={"psetf"}><b>psetf</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"pop"}><b>pop</b></ClLinks>, and those defined by <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>) the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the macro call are evaluated exactly once in left-to-right order, with the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"place"}><i>places</i></ClLinks> evaluated in the order specified in (1). 



<ClLinks  term={"push"}><b>push</b></ClLinks>, <ClLinks  term={"pushnew"}><b>pushnew</b></ClLinks>, <ClLinks  term={"remf"}><b>remf</b></ClLinks>, <ClLinks  term={"incf"}><b>incf</b></ClLinks>, <ClLinks  term={"decf"}><b>decf</b></ClLinks>, <ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks>, <ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks>, <ClLinks  term={"psetf"}><b>psetf</b></ClLinks>, <ClLinks  term={"pop"}><b>pop</b></ClLinks> evaluate all <ClLinks  term={"subform"}><i>subforms</i></ClLinks> before modifying any of the <ClLinks  term={"place"}><i>place</i></ClLinks> locations. <ClLinks  term={"setf"}><b>setf</b></ClLinks> (in the case when <ClLinks  term={"setf"}><b>setf</b></ClLinks> has more than two arguments) performs its operation on each pair in sequence. For example, in 



(setf place1 value1 place2 value2 ...) 



the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of place1 and value1 are evaluated, the location specified by place1 is modified to contain the value returned by value1, and then the rest of the <ClLinks  term={"setf"}><b>setf</b></ClLinks> form is processed in a like manner. 



3\. For <ClLinks  term={"check-type"}><b>check-type</b></ClLinks>, <ClLinks  term={"ctypecase"}><b>ctypecase</b></ClLinks>, and <ClLinks  term={"ccase"}><b>ccase</b></ClLinks>, <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated once as in (1), but might be evaluated again if the type check fails in the case of <ClLinks  term={"check-type"}><b>check-type</b></ClLinks> or none of the cases hold in <ClLinks  term={"ctypecase"}><b>ctypecase</b></ClLinks> and <ClLinks  term={"ccase"}><b>ccase</b></ClLinks>. 



4\. For <ClLinks  term={"assert"}><b>assert</b></ClLinks>, the order of evaluation of the generalized references is not specified. Rules 2, 3 and 4 cover all *standardized macros* that manipulate <ClLinks  term={"place"}><i>places</i></ClLinks>. 



