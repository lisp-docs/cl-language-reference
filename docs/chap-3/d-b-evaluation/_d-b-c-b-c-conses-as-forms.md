 



A *cons* that is used as a *form* is called a *compound form*. 



If the *car* of that *compound form* is a *symbol*, that *symbol* is the *name* of an *operator* , and the *form* is either a *special form*, a *macro form*, or a *function form*, depending on the *function binding* of the *operator* in the current *lexical environment*. If the *operator* is neither a *special operator*  







nor a *macro name*, it is assumed to be a *function name* (even if there is no definition for such a *function*). 



If the *car* of the *compound form* is not a *symbol*, then that *car* must be a *lambda expression*, in which case the *compound form* is a *lambda form*. 



How a *compound form* is processed depends on whether it is classified as a *special form*, a *macro form*, a *function form*, or a *lambda form*. 



