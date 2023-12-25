 



While <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> is significant in the process of *interning* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, the *Lisp reader* , by default, attempts to canonicalize the case of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> prior to interning; see Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). As such, case in <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is not, by default, significant. Throughout 











this document, except as explicitly noted otherwise, the case in which a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> appears is not significant; that is, HELLO, Hello, hElLo, and hello are all equivalent ways to denote a symbol whose name is "HELLO". 



The characters <GlossaryTerm styled={true} term={"backslash"}><i>backslash</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"vertical-bar"}><i>vertical-bar</i></GlossaryTerm> are used to explicitly quote the <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> and other parsing related aspects of characters. As such, the notations |hello| and \h\e\l\l\o are equivalent ways to refer to a symbol whose name is "hello", and which is <GlossaryTerm styled={true} term={"distinct"}><i>distinct</i></GlossaryTerm> from any symbol whose name is "HELLO". 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that correspond to Common Lisp *defined names* have <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> names even though their names generally appear in <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm> in this document. 



