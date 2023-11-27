 

A *symbol* becomes *accessible* in a *package* if that is its *home package* when it is created, or if it is *imported* into that *package*, or by inheritance via **use-package**. 

If a *symbol* is *accessible* in a *package*, it can be referred to when using the *Lisp reader* without a *package prefix* when that *package* is the *current package*, regardless of whether it is *present* or inherited. 

*Symbols* from one *package* can be made *accessible* in another *package* in two ways. 

– Any individual *symbol* can be added to a *package* by use of **import**. After the call to **import** the *symbol* is *present* in the importing *package*. The status of the *symbol* in the *package* it came from (if any) is unchanged, and the *home package* for this *symbol* is unchanged. Once *imported*, a *symbol* is *present* in the importing *package* and can be removed only by calling **unintern**. 

A *symbol* is *shadowed* &#60;sub&#62;3&#60;/sub&#62; by another *symbol* in some *package* if the first *symbol* would be *accessible* by inheritance if not for the presence of the second *symbol*. See **shadowing-import**. 

– The second mechanism for making *symbols* from one *package accessible* in another is provided by **use-package**. All of the *external symbols* of the used *package* are inherited 



 

 

by the using *package*. The *function* **unuse-package** undoes the effects of a previous **use-package**. 

