 



A *special form* is a <ClLinks  term={"form"}><i>form</i></ClLinks> with special syntax, special evaluation rules, or both, possibly manipulating the evaluation environment, control flow, or both. A *special operator* has access to the current *lexical environment* and the current *dynamic environment*. Each *special operator* defines the manner in which its <ClLinks  term={"subexpression"}><i>subexpressions</i></ClLinks> are treated—which are <ClLinks  term={"form"}><i>forms</i></ClLinks>, which are special syntax, *etc.* 



Some *special operators* create new lexical or dynamic <ClLinks  term={"environment"}><i>environments</i></ClLinks> for use during the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the *special form*. For example, <ClLinks  term={"block"}><b>block</b></ClLinks> creates a new *lexical environment* that is the same as the one in force at the point of evaluation of the <ClLinks  term={"block"}><b>block</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> with the addition of a <ClLinks  term={"binding"}><i>binding</i></ClLinks> of the <ClLinks  term={"block"}><b>block</b></ClLinks> name to an *exit point* from the <ClLinks  term={"block"}><b>block</b></ClLinks>. 



The set of *special operator names* is fixed in Common Lisp; no way is provided for the user to define a *special operator* . Figure 3–2 lists all of the Common Lisp <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have definitions as *special operators*. 



|<p>**block let\* return-from** </p><p>**catch load-time-value setq** </p><p>**eval-when locally symbol-macrolet flet macrolet tagbody** </p><p>**function multiple-value-call the** </p><p>**go multiple-value-prog1 throw** </p><p>**if progn unwind-protect labels progv** </p><p>**let quote**</p>|

| :- |





**Figure 3–2. Common Lisp Special Operators** 



