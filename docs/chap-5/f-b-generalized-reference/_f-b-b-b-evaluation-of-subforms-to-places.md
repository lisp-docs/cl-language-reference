 



The following rules apply to the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> in a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>: 



1\. The evaluation ordering of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> within a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is determined by the order specified by the second value returned by <ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>. For all <ClLinks styled={true} term={"place"}><i>places</i></ClLinks> defined by this specification (*e.g.*, <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks>, <ClLinks styled={true} term={"ldb"}><b>ldb</b></ClLinks>, *. . .*), this order of evaluation is left-to-right. When a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is derived from a macro expansion, this rule is applied after the macro is expanded to find the appropriate <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



<ClLinks styled={true} term={"place"}><i>Places</i></ClLinks> defined by using <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> or <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> use the evaluation order defined by those definitions. For example, consider the following: 



(defmacro wrong-order (x y) ‘(getf ,y ,x)) 



This following <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates place2 first and then place1 because that is the order they are evaluated in the macro expansion: 



(push value (wrong-order place1 place2)) 



2\. For the <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> that manipulate <ClLinks styled={true} term={"place"}><i>places</i></ClLinks> (<ClLinks styled={true} term={"push"}><b>push</b></ClLinks>, <ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks>, <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks>, <ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks>, <ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks>, <ClLinks styled={true} term={"shiftf"}><b>shiftf</b></ClLinks>, <ClLinks styled={true} term={"rotatef"}><b>rotatef</b></ClLinks>, <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, <ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks>, and those defined by <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>) the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the macro call are evaluated exactly once in left-to-right order, with the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>places</i></ClLinks> evaluated in the order specified in (1). 



<ClLinks styled={true} term={"push"}><b>push</b></ClLinks>, <ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks>, <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks>, <ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks>, <ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks>, <ClLinks styled={true} term={"shiftf"}><b>shiftf</b></ClLinks>, <ClLinks styled={true} term={"rotatef"}><b>rotatef</b></ClLinks>, <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, <ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks> evaluate all <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> before modifying any of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> locations. <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> (in the case when <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> has more than two arguments) performs its operation on each pair in sequence. For example, in 



(setf place1 value1 place2 value2 ...) 



the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of place1 and value1 are evaluated, the location specified by place1 is modified to contain the value returned by value1, and then the rest of the <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> form is processed in a like manner. 



3\. For <ClLinks styled={true} term={"check-type"}><b>check-type</b></ClLinks>, <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, and <ClLinks styled={true} term={"ccase"}><b>ccase</b></ClLinks>, <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are evaluated once as in (1), but might be evaluated again if the type check fails in the case of <ClLinks styled={true} term={"check-type"}><b>check-type</b></ClLinks> or none of the cases hold in <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> and <ClLinks styled={true} term={"ccase"}><b>ccase</b></ClLinks>. 



4\. For <ClLinks styled={true} term={"assert"}><b>assert</b></ClLinks>, the order of evaluation of the generalized references is not specified. Rules 2, 3 and 4 cover all *standardized macros* that manipulate <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>. 



