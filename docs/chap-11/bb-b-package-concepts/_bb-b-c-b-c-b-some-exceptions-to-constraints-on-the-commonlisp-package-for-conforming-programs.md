**11.1.2.1.2.1 Some Exceptions to Constraints on the COMMON-LISP Package for Conforming Programs** 

If an *external symbol* of the COMMON-LISP *package* is not globally defined as a *standardized dynamic variable* or *constant variable*, it is allowed to lexically *bind* it and to declare the **type** of that *binding*, and it is allowed to locally *establish* it as a *symbol macro* (*e.g.*, with **symbol-macrolet**). 

Unless explicitly specified otherwise, if an *external symbol* of the COMMON-LISP *package* is globally defined as a *standardized dynamic variable*, it is permitted to *bind* or *assign* that *dynamic variable* provided that the “Value Type” constraints on the *dynamic variable* are maintained, and that the new *value* of the *variable* is consistent with the stated purpose of the *variable*. 

If an *external symbol* of the COMMON-LISP *package* is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically *bind* it as a *function* (*e.g.*, with **flet**), to declare the **ftype** of that *binding*, and (in *implementations* which provide the ability to do so) to **trace** that *binding*. 

If an *external symbol* of the COMMON-LISP *package* is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically *bind* it as a *macro* (*e.g.*, with **macrolet**). 

If an *external symbol* of the COMMON-LISP *package* is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically *bind* its *setf function name* as a *function*, and to declare the **ftype** of that *binding*. 



 

 

