**readtable** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> maps <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> into *syntax types* for the *Lisp reader* ; see Chapter 2 (Syntax). A <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> also contains associations between *macro characters* and their *reader macro functions*, and records information about the case conversion rules to be used by the *Lisp reader* when parsing <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



Each *simple character* must be representable in the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. It is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> whether *non-simple characters* can have syntax descriptions in the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. 



**See Also:** 



Section 2.1.1 (Readtables), Section 22.1.3.13 (Printing Other Objects) 



