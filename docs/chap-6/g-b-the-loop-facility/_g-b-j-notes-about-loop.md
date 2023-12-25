 



<GlossaryTerm styled={true} term={"type"}><i>Types</i></GlossaryTerm> can be supplied for loop variables. It is not necessary to supply a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> for any variable, but supplying the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> can ensure that the variable has a correctly typed initial value, and it can also enable compiler optimizations (depending on the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>). 



The clause repeat *n* ... is roughly equivalent to a clause such as 



(loop for *internal-variable* downfrom (- *n* 1) to 0 ...) 



but in some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, the repeat construct might be more efficient. 



Within the executable parts of the loop clauses and around the entire <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> form, variables can be bound by using <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>. 



Use caution when using a variable named IT (in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) in connection with <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, since it is a *loop keyword* that can be used in place of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in certain contexts. 



There is no <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> mechanism for users to add extensions to <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. 







 



 



