 



*Compiler macros* may be defined for *function names* that name *macros* as well as *functions*. 



*Compiler macro* definitions are strictly global. There is no provision for defining local *compiler macros* in the way that **macrolet** defines local *macros*. Lexical bindings of a function name shadow any compiler macro definition associated with the name as well as its global *function* or *macro* definition. 



Note that the presence of a compiler macro definition does not affect the values returned by functions that access *function* definitions (*e.g.*, **fboundp**) or *macro* definitions (*e.g.*, **macroexpand**).  







Compiler macros are global, and the function **compiler-macro-function** is sufficient to resolve their interaction with other lexical and global definitions. 



