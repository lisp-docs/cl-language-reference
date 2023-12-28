
 



The collect (or collecting) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause and adds the value of that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to the end of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of values. By default, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of values is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



The append (or appending) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause and appends the value of that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to the end of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of values. By default, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of values is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



The nconc (or nconcing) construct is similar to the append construct, but its <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> values are concatenated as if by the function nconc. By default, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of values is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 







 



 



The sum (or summing) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause that must evaluate to a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> and accumulates the sum of all these <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>. By default, the cumulative sum is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



The count (or counting) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause and counts the number of times that the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. By default, the count is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



The minimize (or minimizing) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause and determines the minimum value obtained by evaluating that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. By default, the minimum value is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



The maximize (or maximizing) construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in its clause and determines the maximum value obtained by evaluating that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. By default, the maximum value is returned when the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> finishes. 



For more information, see Section 6.1.3 (Value Accumulation Clauses). 



