**cons** *System Class* 



**Class Precedence List:** 



**cons**, **list**, **sequence**, **t** 



**Description:** 



A *cons* is a compound *object* having two components, called the *car* and *cdr* . These form a *dotted pair* . Each component can be any *object*. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(cons [*car-typespec* [*cdr-typespec*]]) 



**Compound Type Specifier Arguments:** 



*car-typespec*—a *type specifier* , or the *symbol* **\***. The default is the *symbol* **\***. 



*cdr-typespec*—a *type specifier* , or the *symbol* **\***. The default is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the set of *conses* whose *car* is constrained to be of *type car-typespec* and whose *cdr* is constrained to be of *type cdr-typespec*. (If either *car-typespec* or *cdr-typespec* is **\***, it is as if the *type* **t** had been denoted.) 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 



