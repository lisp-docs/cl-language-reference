 



A *deftype lambda list* is used by **deftype**. 



A *deftype lambda list* has the same syntax as a *macro lambda list*, and can therefore contain the *lambda list keywords* as a *macro lambda list*. 



A *deftype lambda list* differs from a *macro lambda list* only in that if no *init-form* is supplied for an *optional parameter* or *keyword parameter* in the *lambda-list*, the default *value* for that *parameter* is the *symbol* **\*** (rather than **nil**).  







