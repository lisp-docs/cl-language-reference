 



*Minimal compilation* is defined as follows: 



*•* All *compiler macro* calls appearing in the *source code* being compiled are expanded, if at all, at compile time; they will not be expanded at run time. 



*•* All *macro* and *symbol macro* calls appearing in the source code being compiled are expanded at compile time in such a way that they will not be expanded again at run time. **macrolet** and **symbol-macrolet** are effectively replaced by *forms* corresponding to their bodies in which calls to *macros* are replaced by their expansions. 



*•* The first *argument* in a **load-time-value** *form* in *source code* processed by **compile** is *evaluated* at *compile time*; in *source code* processed by **compile-file**, the compiler arranges for it to be *evaluated* at *load time*. In either case, the result of the *evaluation* is remembered and used later as the value of the **load-time-value** *form* at *execution time*. 



