**floating-point-inexact** *Condition Type* 



**Class Precedence List:** 



<ClLinks  term={"floating-point-inexact"}><b>floating-point-inexact</b></ClLinks>, <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>, <ClLinks  term={"error"}><b>error</b></ClLinks>, <ClLinks  term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks  term={"condition"}><b>condition</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"floating-point-inexact"}><b>floating-point-inexact</b></ClLinks> consists of error conditions that occur because of certain floating point traps. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether floating point traps occur, and whether or how they may be enabled or disabled. Therefore, conforming code may establish handlers for this condition, but must not depend on its being *signaled*. 



