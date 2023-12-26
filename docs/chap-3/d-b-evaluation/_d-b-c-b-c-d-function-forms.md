 



If the <ClLinks  term={"operator"}><i>operator</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks  term={"function"}><i>function</i></ClLinks>, the <ClLinks  term={"form"}><i>form</i></ClLinks> represents a *function form*, and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of the list contains the <ClLinks  term={"form"}><i>forms</i></ClLinks> which when evaluated will supply the arguments passed to the <ClLinks  term={"function"}><i>function</i></ClLinks>. 



When a *function name* is not defined, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> should be signaled at run time; see Section 3.2.2.3 (Semantic Constraints). 



A *function form* is evaluated as follows: 



The <ClLinks  term={"subform"}><i>subforms</i></ClLinks> in the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of the original <ClLinks  term={"form"}><i>form</i></ClLinks> are evaluated in left-to-right order in the current lexical and dynamic <ClLinks  term={"environment"}><i>environments</i></ClLinks>. The *primary value* of each such <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> becomes an <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the named <ClLinks  term={"function"}><i>function</i></ClLinks>; any additional <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> are discarded. 



The *functional value* of the <ClLinks  term={"operator"}><i>operator</i></ClLinks> is retrieved from the *lexical environment*, and that <ClLinks  term={"function"}><i>function</i></ClLinks> is invoked with the indicated arguments. 



Although the order of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms* themselves is strictly left-to-right, it is not specified whether the definition of the <ClLinks  term={"operator"}><i>operator</i></ClLinks> in a *function form* is looked up before the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms*, after the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the *argument subforms*, or between the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of any two *argument subforms* if there is more than one such *argument subform*. For example, the following might return 23 or 24. 



(defun foo (x) (+ x 3))  







(defun bar () (setf (symbol-function ’foo) #’(lambda (x) (+ x 4)))) 



(foo (progn (bar) 20)) 



A <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> can be *established* in one of several ways. A *bind ing* for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> can be *established* by <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> (implicitly, due to <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>), or <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. A <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> can be *established* by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>. 



Figure 3–4 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



|<p>**apply fdefinition mapcan** </p><p>**call-arguments-limit flet mapcar** </p><p>**complement fmakunbound mapcon** </p><p>**constantly funcall mapl** </p><p>**defgeneric function maplist** </p><p>**defmethod functionp multiple-value-call defun labels reduce** </p><p>**fboundp map symbol-function**</p>|

| :- |





**Figure 3–4. Some function-related defined names** 



