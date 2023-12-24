**arithmetic-error** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks> consists of error conditions that occur during arithmetic operations. The operation and operands are initialized with the initialization arguments named :operation and :operands to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, and are *accessed* by the functions **arithmetic-error-operation** and **arithmetic-error-operands**. 



**See Also:** 



**arithmetic-error-operation**, **arithmetic-error-operands** 



<b><sup>arithmetic-error-operands, arithmetic-error</sup> operation</b> <i>Function</i> 



**Syntax:** 



**arithmetic-error-operands** *condition ! operands* 



**arithmetic-error-operation** *condition ! operation* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



*operands*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*operation*—a *function designator* . 



**Description:** 



**arithmetic-error-operands** returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the operands which were used in the o↵ending call to the operation that signaled the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 







 



 



**arithmetic-error-operation** returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the o↵ending operation in the o↵ending call that signaled the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>, Chapter 9 (Conditions) 



**Notes:** 



