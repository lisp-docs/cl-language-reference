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



