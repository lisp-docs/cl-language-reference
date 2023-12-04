 



A *lexical variable* is a *variable* that can be referenced only within the *lexical scope* of the *form* that establishes that *variable*; *lexical variables* have *lexical scope*. Each time a *form* creates a *lexical binding* of a *variable*, a *fresh binding* is *established*. 



Within the *scope* of a *binding* for a *lexical variable name*, uses of that *name* as a *variable* are considered to be references to that *binding* except where the *variable* is *shadowed* <sub>2</sub> by a *form* that *establishes* a *fresh binding* for that *variable name*, or by a *form* that locally *declares* the *name* **special**. 



A *lexical variable* always has a *value*. There is no *operator* that introduces a *binding* for a *lexical variable* without giving it an initial *value*, nor is there any *operator* that can make a *lexical variable* be *unbound*. 



*Bindings* of *lexical variables* are found in the *lexical environment*. 



