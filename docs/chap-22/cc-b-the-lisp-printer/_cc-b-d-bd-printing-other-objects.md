 



Other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are printed in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> manner. It is not required that an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> print those *objects readably*. 



For example, *hash tables*, *readtables*, *packages*, *streams*, and <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> might not print <GlossaryTerm styled={true} term={"readably"}><i>readably</i></GlossaryTerm>. 



A common notation to use in this circumstance is #&lt;...&gt;. Since #&lt; is not readable by the *Lisp reader* , the precise format of the text which follows is not important, but a common format to use is that provided by the <DictionaryLink styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



For information on how the *Lisp reader* treats this notation, see Section 2.4.8.20 (Sharpsign Less-Than-Sign). For information on how to notate <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that cannot be printed <GlossaryTerm styled={true} term={"readably"}><i>readably</i></GlossaryTerm>, see Section 2.4.8.6 (Sharpsign Dot). 



