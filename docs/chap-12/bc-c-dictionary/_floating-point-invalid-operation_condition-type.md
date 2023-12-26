**floating-point-invalid-operation** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink  term={"floating-point-invalid-operation"}><b>floating-point-invalid-operation</b></DictionaryLink>, <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>, <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink  term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"floating-point-invalid-operation"}><b>floating-point-invalid-operation</b></DictionaryLink> consists of error conditions that occur because of certain floating point traps. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether floating point traps occur, and whether or how they may be enabled or disabled. Therefore, conforming code may establish handlers for this condition, but must not depend on its being *signaled*. 







 



 



