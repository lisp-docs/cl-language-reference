**readtable** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<ClLinks  term={"readtable"}><b>readtable</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> maps <ClLinks  term={"character"}><i>characters</i></ClLinks> into <GlossaryTerm styled={true} term={"syntax type"}><i>syntax types</i></GlossaryTerm> for the *Lisp reader* ; see Chapter 2 (Syntax). A <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> also contains associations between <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> and their <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro functions</i></GlossaryTerm>, and records information about the case conversion rules to be used by the *Lisp reader* when parsing <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



Each *simple character* must be representable in the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. It is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> whether *non-simple characters* can have syntax descriptions in the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



**See Also:** 



Section 2.1.1 (Readtables), Section 22.1.3.13 (Printing Other Objects) 



