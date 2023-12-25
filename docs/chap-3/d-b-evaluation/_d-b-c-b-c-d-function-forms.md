 



If the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> represents a *function form*, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the list contains the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> which when evaluated will supply the arguments passed to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



When a *function name* is not defined, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink> should be signaled at run time; see Section 3.2.2.3 (Semantic Constraints). 



A *function form* is evaluated as follows: 



The <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are evaluated in left-to-right order in the current lexical and dynamic <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm>. The *primary value* of each such <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> becomes an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to the named <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>; any additional <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> are discarded. 



The *functional value* of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is retrieved from the *lexical environment*, and that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is invoked with the indicated arguments. 



Although the order of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms* themselves is strictly left-to-right, it is not specified whether the definition of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> in a *function form* is looked up before the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms*, after the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms*, or between the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of any two *argument subforms* if there is more than one such *argument subform*. For example, the following might return 23 or 24. 



(defun foo (x) (+ x 3))  







(defun bar () (setf (symbol-function ’foo) #’(lambda (x) (+ x 4)))) 



(foo (progn (bar) 20)) 



A <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *function name* can be *established* in one of several ways. A *bind ing* for a *function name* in the *global environment* can be *established* by <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> (implicitly, due to <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>), or <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *function name* in the *lexical environment* can be *established* by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>. 



Figure 3–4 lists some *defined names* that are applicable to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



|<p>**apply fdefinition mapcan** </p><p>**call-arguments-limit flet mapcar** </p><p>**complement fmakunbound mapcon** </p><p>**constantly funcall mapl** </p><p>**defgeneric function maplist** </p><p>**defmethod functionp multiple-value-call defun labels reduce** </p><p>**fboundp map symbol-function**</p>|

| :- |





**Figure 3–4. Some function-related defined names** 



