**list** *System Class* 



**Class Precedence List:** 



**list**, **sequence**, **t** 



**Description:** 



A *list* is a chain of *conses* in which the *car* of each *cons* is an *element* of the *list*, and the *cdr* of each *cons* is either the next link in the chain or a terminating *atom*. 



A *proper list* is a chain of *conses* terminated by the *empty list*, (), which is itself a *proper list*. A *dotted list* is a *list* which has a terminating *atom* that is not the *empty list*. A *circular list* is a chain of *conses* that has no termination because some *cons* in the chain is the *cdr* of a later *cons*. 



*Dotted lists* and *circular lists* are also *lists*, but usually the unqualified term “list” within this specification means *proper list*. Nevertheless, the *type* **list** unambiguously includes *dotted lists* and *circular lists*. 



For each *element* of a *list* there is a *cons*. The *empty list* has no *elements* and is not a *cons*. The *types* **cons** and **null** form an *exhaustive partition* of the *type* **list**. 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 



