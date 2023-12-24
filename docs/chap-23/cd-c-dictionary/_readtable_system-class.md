**readtable** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> maps <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> into *syntax types* for the *Lisp reader* ; see Chapter 2 (Syntax). A <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> also contains associations between *macro characters* and their *reader macro functions*, and records information about the case conversion rules to be used by the *Lisp reader* when parsing <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



Each *simple character* must be representable in the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. It is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> whether *non-simple characters* can have syntax descriptions in the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



**See Also:** 



Section 2.1.1 (Readtables), Section 22.1.3.13 (Printing Other Objects) 



