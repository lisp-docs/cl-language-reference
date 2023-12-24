**floating-point-inexact** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"floating-point-inexact"}><b>floating-point-inexact</b></ClLinks>, <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"floating-point-inexact"}><b>floating-point-inexact</b></ClLinks> consists of error conditions that occur because of certain floating point traps. 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether floating point traps occur, and whether or how they may be enabled or disabled. Therefore, conforming code may establish handlers for this condition, but must not depend on its being *signaled*. 



