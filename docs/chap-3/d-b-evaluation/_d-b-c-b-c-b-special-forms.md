 



A <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> with special syntax, special evaluation rules, or both, possibly manipulating the evaluation environment, control flow, or both. A <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> has access to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> and the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. Each <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> defines the manner in which its <GlossaryTerm  term={"subexpression"}><i>subexpressions</i></GlossaryTerm> are treated—which are <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, which are special syntax, *etc.* 



Some <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm> create new lexical or dynamic <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm> for use during the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. For example, <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> creates a new <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that is the same as the one in force at the point of evaluation of the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> with the addition of a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> name to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> from the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>. 



The set of *special operator names* is fixed in Common Lisp; no way is provided for the user to define a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . Figure 3–2 lists all of the Common Lisp <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that have definitions as <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm>. 



"""lisp
block let* return-from
catch load-time-value setq
eval-when locally symbol-macrolet flet macrolet tagbody
function multiple-value-call the
go multiple-value-prog1 throw
if progn unwind-protect labels progv
let quote
"""

**Figure 3–2. Common Lisp Special Operators** 



