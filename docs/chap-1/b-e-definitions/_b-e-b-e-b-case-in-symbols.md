 



While <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> is significant in the process of *interning* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, the *Lisp reader* , by default, attempts to canonicalize the case of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> prior to interning; see Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). As such, case in <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is not, by default, significant. Throughout 











this document, except as explicitly noted otherwise, the case in which a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> appears is not significant; that is, HELLO, Hello, hElLo, and hello are all equivalent ways to denote a symbol whose name is "HELLO". 



The characters <ClLinks styled={true} term={"backslash"}><i>backslash</i></ClLinks> and <ClLinks styled={true} term={"vertical-bar"}><i>vertical-bar</i></ClLinks> are used to explicitly quote the <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> and other parsing related aspects of characters. As such, the notations |hello| and \h\e\l\l\o are equivalent ways to refer to a symbol whose name is "hello", and which is <ClLinks styled={true} term={"distinct"}><i>distinct</i></ClLinks> from any symbol whose name is "HELLO". 



The <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that correspond to Common Lisp <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> have <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> names even though their names generally appear in <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks> in this document. 



