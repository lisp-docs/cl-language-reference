**ftype** *Declaration* 



**Syntax:** 



(ftype *type \{function-name\}*\*) 



**Arguments:** 



*function-name*—a *function name*. 



*type*—a *type specifier* . 



**Valid Context:** 



*declaration* or *proclamation* 



**Binding Types Aected:** 



*function* 



**Description:** 



Specifies that the *functions* named by *function-names* are of the functional type *type*. For example: 



(declare (ftype (function (integer list) t) ith) 



(ftype (function (number) float) sine cosine)) 



If one of the *functions* mentioned has a lexically apparent local definition (as made by **flet** or **labels**), then the declaration applies to that local definition and not to the global function definition. **ftype** declarations never apply to variable *bindings* (see type). 



The lexically apparent bindings of *function-names* must not be *macro* definitions. (This is because **ftype** declares the functional definition of each *function name* to be of a particular subtype of **function**, and *macros* do not denote *functions*.) 



**ftype** declarations can be *free declarations* or *bound declarations*. **ftype** declarations of functions that appear before the body of a **flet** or **labels** *form* that defines that function are *bound declarations*. Such declarations in other contexts are *free declarations*. 



**See Also:** 



**declare**, **declaim**, **proclaim** 







 



 



