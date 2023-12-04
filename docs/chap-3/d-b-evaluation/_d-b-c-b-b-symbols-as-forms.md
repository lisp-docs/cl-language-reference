 



If a *form* is a *symbol*, then it is either a *symbol macro* or a *variable*. 



The *symbol* names a *symbol macro* if there is a *binding* of the *symbol* as a *symbol macro* in the current *lexical environment* (see **define-symbol-macro** and **symbol-macrolet**). If the *symbol* is a *symbol macro*, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the *macroexpand hook* with the expansion function as its 



first argument, the *symbol* as its second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the *form* as its first argument and the *environment* as its second argument. The *value* of the expansion function, which is passed through by the *macroexpand hook*, is a *form*. This resulting *form* is processed in place of the original *symbol*. 



If a *form* is a *symbol* that is not a *symbol macro*, then it is the *name* of a *variable*, and the *value* of that *variable* is returned. There are three kinds of variables: *lexical variables*, *dynamic variables*,  







and *constant variables*. A *variable* can store one *object*. The main operations on a *variable* are to *read* <sub>1</sub> and to *write*<sub>1</sub> its *value*. 



An error of *type* **unbound-variable** should be signaled if an *unbound variable* is referenced. 



*Non-constant variables* can be *assigned* by using **setq** or *bound* <sub>3</sub> by using **let**. Figure 3–1 lists some *defined names* that are applicable to assigning, binding, and defining *variables*. 



|<p>**boundp let progv** </p><p>**defconstant let\* psetq** </p><p>**defparameter makunbound set** </p><p>**defvar multiple-value-bind setq** </p><p>**lambda multiple-value-setq symbol-value**</p>|

| :- |





**Figure 3–1. Some Defined Names Applicable to Variables** 



The following is a description of each kind of variable. 



