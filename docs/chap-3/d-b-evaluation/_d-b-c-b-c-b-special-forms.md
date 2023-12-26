 



A <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is a <ClLinks  term={"form"}><i>form</i></ClLinks> with special syntax, special evaluation rules, or both, possibly manipulating the evaluation environment, control flow, or both. A <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> has access to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> and the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. Each <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> defines the manner in which its <ClLinks  term={"subexpression"}><i>subexpressions</i></ClLinks> are treated—which are <ClLinks  term={"form"}><i>forms</i></ClLinks>, which are special syntax, *etc.* 



Some <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm> create new lexical or dynamic <ClLinks  term={"environment"}><i>environments</i></ClLinks> for use during the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. For example, <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> creates a new <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that is the same as the one in force at the point of evaluation of the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> with the addition of a <ClLinks  term={"binding"}><i>binding</i></ClLinks> of the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> name to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> from the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>. 



The set of *special operator names* is fixed in Common Lisp; no way is provided for the user to define a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . Figure 3–2 lists all of the Common Lisp <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have definitions as <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm>. 



|<p>**block let\* return-from** </p><p>**catch load-time-value setq** </p><p>**eval-when locally symbol-macrolet flet macrolet tagbody** </p><p>**function multiple-value-call the** </p><p>**go multiple-value-prog1 throw** </p><p>**if progn unwind-protect labels progv** </p><p>**let quote**</p>|

| :- |





**Figure 3–2. Common Lisp Special Operators** 



