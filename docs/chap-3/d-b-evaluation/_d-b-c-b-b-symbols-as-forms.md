 

If a *form* is a *symbol*, then it is either a *symbol macro* or a *variable*. 

The *symbol* names a *symbol macro* if there is a *binding* of the *symbol* as a *symbol macro* in the current *lexical environment* (see **define-symbol-macro** and **symbol-macrolet**). If the *symbol* is a *symbol macro*, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the *macroexpand hook* with the expansion function as its 

first argument, the *symbol* as its second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the *form* as its first argument and the *environment* as its second argument. The *value* of the expansion function, which is passed through by the *macroexpand hook*, is a *form*. This resulting *form* is processed in place of the original *symbol*. 

If a *form* is a *symbol* that is not a *symbol macro*, then it is the *name* of a *variable*, and the *value* of that *variable* is returned. There are three kinds of variables: *lexical variables*, *dynamic variables*,  



and *constant variables*. A *variable* can store one *object*. The main operations on a *variable* are to *read* &#60;sub&#62;1&#60;/sub&#62; and to *write*&#60;sub&#62;1&#60;/sub&#62; its *value*. 

An error of *type* **unbound-variable** should be signaled if an *unbound variable* is referenced. 

*Non-constant variables* can be *assigned* by using **setq** or *bound* &#60;sub&#62;3&#60;/sub&#62; by using **let**. Figure 3–1 lists some *defined names* that are applicable to assigning, binding, and defining *variables*. 

|&#60;p&#62;**boundp let progv** &#60;/p&#62;&#60;p&#62;**defconstant let\* psetq** &#60;/p&#62;&#60;p&#62;**defparameter makunbound set** &#60;/p&#62;&#60;p&#62;**defvar multiple-value-bind setq** &#60;/p&#62;&#60;p&#62;**lambda multiple-value-setq symbol-value**&#60;/p&#62;|
| :- |


**Figure 3–1. Some Defined Names Applicable to Variables** 

The following is a description of each kind of variable. 

