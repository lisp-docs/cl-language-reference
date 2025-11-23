 



If the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> represents a *function form*, and the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of the list contains the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> which when evaluated will supply the arguments passed to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



When a *function name* is not defined, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> should be signaled at run time; see Section 3.2.2.3 (Semantic Constraints). 



A *function form* is evaluated as follows: 



The <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> in the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are evaluated in left-to-right order in the current lexical and dynamic <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm>. The *primary value* of each such <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> becomes an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to the named <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>; any additional <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> are discarded. 



The *functional value* of the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is retrieved from the *lexical environment*, and that <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is invoked with the indicated arguments. 



Although the order of <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms* themselves is strictly left-to-right, it is not specified whether the definition of the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> in a *function form* is looked up before the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms*, after the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the *argument subforms*, or between the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of any two *argument subforms* if there is more than one such *argument subform*. For example, the following might return 23 or 24. 



"""lisp
(defun foo (x) (+ x 3))

(defun bar () (setf (symbol-function ’foo) #’(lambda (x) (+ x 4))))

(foo (progn (bar) 20))
"""



A <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> can be *established* in one of several ways. A *bind ing* for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> can be *established* by <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> (implicitly, due to <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>), or <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. A <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> can be *established* by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>. 



Figure 3–4 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



|<p>**apply fdefinition mapcan** </p><p>**call-arguments-limit flet mapcar** </p><p>**complement fmakunbound mapcon** </p><p>**constantly funcall mapl** </p><p>**defgeneric function maplist** </p><p>**defmethod functionp multiple-value-call defun labels reduce** </p><p>**fboundp map symbol-function**</p>|

| :- |





**Figure 3–4. Some function-related defined names** 



