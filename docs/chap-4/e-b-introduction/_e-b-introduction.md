 



A *type* is a (possibly infinite) set of *objects*. An *object* can belong to more than one *type*. *Types* are never explicitly represented as *objects* by Common Lisp. Instead, they are referred to indirectly by the use of *type specifiers*, which are *objects* that denote *types*. 



New *types* can be defined using **deftype**, **defstruct**, **defclass**, and **define-condition**. 



The *function* **typep**, a set membership test, is used to determine whether a given *object* is of a given *type*. The function **subtypep**, a subset test, is used to determine whether a given *type* is a *subtype* of another given *type*. The function **type-of** returns a particular *type* to which a given 



*object* belongs, even though that *object* must belong to one or more other *types* as well. (For example, every *object* is of *type* **t**, but **type-of** always returns a *type specifier* for a *type* more specific than **t**.) 



*Objects*, not *variables*, have *types*. Normally, any *variable* can have any *object* as its *value*. It is possible to declare that a *variable* takes on only values of a given *type* by making an explicit *type declaration*. *Types* are arranged in a directed acyclic graph, except for the presence of equivalences. 



*Declarations* can be made about *types* using **declare**, **proclaim**, **declaim**, or **the**. For more information about *declarations*, see Section 3.3 (Declarations). 



Among the fundamental *objects* of the object system are *classes*. A *class* determines the structure and behavior of a set of other *objects*, which are called its *instances*. Every *object* is a *direct instance* of a *class*. The *class* of an *object* determines the set of operations that can be performed on the *object*. For more information, see Section 4.3 (Classes). 



It is possible to write *functions* that have behavior *specialized* to the class of the *objects* which are their *arguments*. For more information, see Section 7.6 (Generic Functions and Methods). 



The *class* of the *class* of an *object* is called its *metaclass*. For more information about *metaclasses*, see Section 7.4 (Meta-Objects).  







