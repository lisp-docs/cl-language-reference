 



Other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are printed in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> manner. It is not required that an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> print those *objects readably*. 



For example, <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"readtable"}><i>readtables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>, and <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> might not print <ClLinks styled={true} term={"readably"}><i>readably</i></ClLinks>. 



A common notation to use in this circumstance is #&lt;...&gt;. Since #&lt; is not readable by the *Lisp reader* , the precise format of the text which follows is not important, but a common format to use is that provided by the <ClLinks styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



For information on how the *Lisp reader* treats this notation, see Section 2.4.8.20 (Sharpsign Less-Than-Sign). For information on how to notate <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that cannot be printed <ClLinks styled={true} term={"readably"}><i>readably</i></ClLinks>, see Section 2.4.8.6 (Sharpsign Dot). 



