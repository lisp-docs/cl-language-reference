 



By default, a <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm> of type *S* is printed using #S syntax. This behavior can be customized by specifying a :print-function or :print-object option to the <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defines *S*, or by writing a <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"specialized"}><i>specialized</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of type *S*. 



Different structures might print out in different ways; the default notation for structures is: #S(*structure-name \{slot-key slot-value\}*\*) 



where #S indicates structure syntax, *structure-name* is a *structure name*, each *slot-key* is an initialization argument <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm>, and each corresponding *slot-value* is a representation of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



For information on how the *Lisp reader* parses <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm>, see Section 2.4.8.13 (Sharpsign S). 



 



 



