 



A *special form* is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> with special syntax, special evaluation rules, or both, possibly manipulating the evaluation environment, control flow, or both. A *special operator* has access to the current *lexical environment* and the current *dynamic environment*. Each *special operator* defines the manner in which its <GlossaryTerm styled={true} term={"subexpression"}><i>subexpressions</i></GlossaryTerm> are treated—which are <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, which are special syntax, *etc.* 



Some *special operators* create new lexical or dynamic <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm> for use during the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the *special form*. For example, <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> creates a new *lexical environment* that is the same as the one in force at the point of evaluation of the <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> with the addition of a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> name to an *exit point* from the <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>. 



The set of *special operator names* is fixed in Common Lisp; no way is provided for the user to define a *special operator* . Figure 3–2 lists all of the Common Lisp <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that have definitions as *special operators*. 



|<p>**block let\* return-from** </p><p>**catch load-time-value setq** </p><p>**eval-when locally symbol-macrolet flet macrolet tagbody** </p><p>**function multiple-value-call the** </p><p>**go multiple-value-prog1 throw** </p><p>**if progn unwind-protect labels progv** </p><p>**let quote**</p>|

| :- |





**Figure 3–2. Common Lisp Special Operators** 



