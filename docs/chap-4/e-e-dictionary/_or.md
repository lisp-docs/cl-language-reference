**or** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\&#123;typespec\&#125;*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all *objects* of the *type* determined by the union of the *typespecs*. For example, the *type* **list** by definition is the same as (or null cons). Also, the value returned by **position** is an *object* of *type* (or null (integer 0 \*)); *i.e.*, either **nil** or a non-negative *integer* . 



**\*** is not permitted as an argument. 



The *type specifiers* (or) and **nil** are equivalent. The symbol **or** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (or). 



