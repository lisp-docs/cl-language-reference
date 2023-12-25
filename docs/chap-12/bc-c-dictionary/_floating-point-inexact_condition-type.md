**floating-point-inexact** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"floating-point-inexact"}><b>floating-point-inexact</b></DictionaryLink>, <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"floating-point-inexact"}><b>floating-point-inexact</b></DictionaryLink> consists of error conditions that occur because of certain floating point traps. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether floating point traps occur, and whether or how they may be enabled or disabled. Therefore, conforming code may establish handlers for this condition, but must not depend on its being *signaled*. 



