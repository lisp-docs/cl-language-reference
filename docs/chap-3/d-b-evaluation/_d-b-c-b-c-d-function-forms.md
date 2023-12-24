 



If the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> represents a *function form*, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the list contains the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> which when evaluated will supply the arguments passed to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



When a *function name* is not defined, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"undefined-function"}><b>undefined-function</b></ClLinks> should be signaled at run time; see Section 3.2.2.3 (Semantic Constraints). 



A *function form* is evaluated as follows: 



The <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> in the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the original <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are evaluated in left-to-right order in the current lexical and dynamic <ClLinks styled={true} term={"environment"}><i>environments</i></ClLinks>. The *primary value* of each such <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> becomes an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to the named <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>; any additional <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> are discarded. 



The *functional value* of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is retrieved from the *lexical environment*, and that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is invoked with the indicated arguments. 



Although the order of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms* themselves is strictly left-to-right, it is not specified whether the definition of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> in a *function form* is looked up before the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms*, after the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms*, or between the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of any two *argument subforms* if there is more than one such *argument subform*. For example, the following might return 23 or 24. 



(defun foo (x) (+ x 3))  







(defun bar () (setf (symbol-function ’foo) #’(lambda (x) (+ x 4)))) 



(foo (progn (bar) 20)) 



A <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *function name* can be *established* in one of several ways. A *bind ing* for a *function name* in the *global environment* can be *established* by <ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>, <ClLinks styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>, <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> (implicitly, due to <ClLinks styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>), or <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>. A <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *function name* in the *lexical environment* can be *established* by <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks> or <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks>. 



Figure 3–4 lists some *defined names* that are applicable to <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



|<p>**apply fdefinition mapcan** </p><p>**call-arguments-limit flet mapcar** </p><p>**complement fmakunbound mapcon** </p><p>**constantly funcall mapl** </p><p>**defgeneric function maplist** </p><p>**defmethod functionp multiple-value-call defun labels reduce** </p><p>**fboundp map symbol-function**</p>|

| :- |





**Figure 3–4. Some function-related defined names** 



