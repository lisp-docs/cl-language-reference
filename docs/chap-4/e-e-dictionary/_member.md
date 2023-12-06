**member** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(member *\{object\}*\*) 



**Compound Type Specifier Arguments:** 



*object*—an *object*. 



**Compound Type Specifier Description:** 



This denotes the set containing the named *objects*. An *object* is of this *type* if and only if it is **eql** to one of the specified *objects*. 



The *type specifiers* (member) and **nil** are equivalent. **\*** can be among the *objects*, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol **member** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for either (member) or (member \*). 



**See Also:** 



the *type* **eql** 



