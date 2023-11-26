 

A *compiler macro* can be defined for a *name* that also names a *function* or *macro*. That is, it is possible for a *function name* to name both a *function* and a *compiler macro*. 

A *function name* names a *compiler macro* if **compiler-macro-function** is *true* of the *function name* in the *lexical environment* in which it appears. Creating a *lexical binding* for the *function name* not only creates a new local *function* or *macro* definition, but also *shadows*\<sub\>2\</sub\> the *compiler macro*. 

The *function* returned by **compiler-macro-function** is a *function* of two arguments, called the expansion function. To expand a *compiler macro*, the expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire compiler macro *form* as its second argument, and the current compilation *environment* (or with the current lexical *environment*, if the *form* is being processed by something other than **compile-file**) as its third  



argument. The *macroexpand hook*, in turn, calls the expansion function with the *form* as its first argument and the *environment* as its second argument. The return value from the expansion function, which is passed through by the *macroexpand hook*, might either be the *same form*, or else a form that can, at the discretion of the *code* doing the expansion, be used in place of the original *form*. 

|**\*macroexpand-hook\* compiler-macro-function define-compiler-macro**|
| :- |


**Figure 3–6. Defined names applicable to compiler macros** 

