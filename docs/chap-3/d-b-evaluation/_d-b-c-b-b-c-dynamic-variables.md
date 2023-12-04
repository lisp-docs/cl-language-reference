 



A *variable* is a *dynamic variable* if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed **special**. 



*•* It occurs textually within a *form* that creates a *dynamic binding* for a *variable* of the *same name*, and the *binding* is not *shadowed* <sub>2</sub> by a *form* that creates a *lexical binding* of the same *variable name*. 



A *dynamic variable* can be referenced at any time in any *program*; there is no textual limitation on references to *dynamic variables*. At any given time, all *dynamic variables* with a given name refer to exactly one *binding*, either in the *dynamic environment* or in the *global environment*.  







The *value* part of the *binding* for a *dynamic variable* might be empty; in this case, the *dynamic variable* is said to have no *value*, or to be *unbound*. A *dynamic variable* can be made *unbound* by using **makunbound**. 



The effect of *binding* a *dynamic variable* is to create a new *binding* to which all references to that *dynamic variable* in any *program* refer for the duration of the *evaluation* of the *form* that creates the *dynamic binding*. 



A *dynamic variable* can be referenced outside the *dynamic extent* of a *form* that *binds* it. Such a *variable* is sometimes called a “global variable” but is still in all respects just a *dynamic variable* whose *binding* happens to exist in the *global environment* rather than in some *dynamic environment*. 



A *dynamic variable* is *unbound* unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an *implementation*. 



