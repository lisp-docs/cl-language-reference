**readtable** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> maps <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> into <GlossaryTerm styled={true} term={"syntax type"}><i>syntax types</i></GlossaryTerm> for the *Lisp reader* ; see Chapter 2 (Syntax). A <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> also contains associations between <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> and their <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro functions</i></GlossaryTerm>, and records information about the case conversion rules to be used by the *Lisp reader* when parsing <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



Each *simple character* must be representable in the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. It is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> whether *non-simple characters* can have syntax descriptions in the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



**See Also:** 



Section 2.1.1 (Readtables), Section 22.1.3.13 (Printing Other Objects) 



