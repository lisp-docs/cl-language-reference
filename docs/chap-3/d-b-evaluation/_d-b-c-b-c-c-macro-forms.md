 

If the *operator* names a *macro*, its associated *macro function* is applied to the entire *form* and the result of that application is used in place of the original *form*. 

Specifically, a *symbol* names a *macro* in a given *lexical environment* if **macro-function** is *true* of the *symbol* and that *environment*. The *function* returned by **macro-function** is a *function* of two arguments, called the expansion function. The expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire *macro form* as its  



second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the *form* as its first argument and the *environment* as its second argument. The *value* of the expansion function, which is passed through by the *macroexpand hook*, is a *form*. The returned *form* is *evaluated* in place of the original *form*. 

The consequences are undefined if a *macro function* destructively modifies any part of its *form* argument. 

A *macro name* is not a *function designator* , and cannot be used as the *function* argument to *functions* such as **apply**, **funcall**, or **map**. 

An *implementation* is free to implement a Common Lisp *special operator* as a *macro*. An *implementation* is free to implement any *macro operator* as a *special operator* , but only if an equivalent definition of the *macro* is also provided. 

Figure 3–3 lists some *defined names* that are applicable to *macros*. 

|**\*macroexpand-hook\* macro-function macroexpand-1 defmacro macroexpand macrolet**|
| :- |


**Figure 3–3. Defined names applicable to macros** 

