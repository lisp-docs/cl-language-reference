**t** *System Class* 



**Class Precedence List:** 



**t** 



**Description:** 



The set of all *objects*. The *type* **t** is a *supertype* of every *type*, including itself. Every *object* is of *type* **t**. 



**satisfies** *Type Specifier* 



**Compound Type Specifier Kind:** 



Predicating. 



**Compound Type Specifier Syntax:** 



(satisfies *predicate-name*) 



**Compound Type Specifier Arguments:** 



*predicate-name*—a *symbol*. 



**Compound Type Specifier Description:** 



This denotes the set of all *objects* that satisfy the *predicate predicate-name*, which must be a *symbol* whose global *function* definition is a one-argument predicate. A name is required for *predicate-name*; *lambda expressions* are not allowed. For example, the *type specifier* (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  







The argument is required. The *symbol* **\*** can be the argument, but it denotes itself (the *symbol* **\***), and does not represent an unspecified value. 



The symbol **satisfies** is not valid as a *type specifier* . 



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



**not** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(not *typespec*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all *objects* that are not of the *type typespec*. 



The argument is required, and cannot be **\***. 



The symbol **not** is not valid as a *type specifier* . 



**and** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(and *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of all *objects* of the *type* determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 



The *type specifiers* (and) and **t** are equivalent. The symbol **and** is not valid as a *type specifier* , and, specifically, it is not an abbreviation for (and). 



**or** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all *objects* of the *type* determined by the union of the *typespecs*. For example, the *type* **list** by definition is the same as (or null cons). Also, the value returned by **position** is an *object* of *type* (or null (integer 0 \*)); *i.e.*, either **nil** or a non-negative *integer* . 



**\*** is not permitted as an argument. 



The *type specifiers* (or) and **nil** are equivalent. The symbol **or** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (or). 



**values** *Type Specifier* 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(values *↓value-typespec*) 



*value-typespec::*=*\{typespec\}*\* [&amp;optional *\{typespec\}*\*] [&amp;rest *typespec*] [**&amp;allow-other-keys**] 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This *type specifier* can be used only as the *value-type* in a **function** *type specifier* or a **the** *special form*. It is used to specify individual *types* when *multiple values* are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a *function* that, when given to **multiple-value-call** along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol **values** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (values).  







**eql** *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(eql *object*) 



**Compound Type Specifier Arguments:** 



*object*—an *object*. 



**Compound Type Specifier Description:** 



Represents the *type* of all *x* for which (eql *object x*) is true. 



The argument *object* is required. The *object* can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The *symbol* **eql** is not valid as an *atomic type specifier* . 



