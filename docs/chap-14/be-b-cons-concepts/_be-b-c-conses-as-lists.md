 

A *list* is a chain of *conses* in which the *car* of each *cons* is an *element* of the *list*, and the *cdr* of each *cons* is either the next link in the chain or a terminating *atom*. 

A *proper list* is a *list* terminated by the *empty list*. The *empty list* is a *proper list*, but is not a *cons*. 

An *improper list* is a *list* that is not a *proper list*; that is, it is a *circular list* or a *dotted list*. 

A *dotted list* is a *list* that has a terminating *atom* that is not the *empty list*. A *non-nil atom* by itself is not considered to be a *list* of any kind—not even a *dotted list*. 

A *circular list* is a chain of *conses* that has no termination because some *cons* in the chain is the *cdr* of a later *cons*. 

|&#60;p&#62;**append last nbutlast rest** &#60;/p&#62;&#60;p&#62;**butlast ldiff nconc revappend copy-alist list ninth second copy-list list\* nreconc seventh eighth list-length nth sixth endp make-list nthcdr tailp** &#60;/p&#62;&#60;p&#62;**fifth member pop tenth first member-if push third fourth member-if-not pushnew**&#60;/p&#62;|
| :- |


**Figure 14–3. Some defined names relating to lists.** 

