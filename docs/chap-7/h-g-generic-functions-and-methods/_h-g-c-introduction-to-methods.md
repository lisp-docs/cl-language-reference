 

*Methods* define the class-specific or identity-specific behavior and operations of a *generic function*. 

A *method object* is associated with *code* that implements the method’s behavior, a sequence of *parameter specializers* that specify when the given *method* is applicable, a *lambda list*, and a sequence of *qualifiers* that are used by the method combination facility to distinguish among *methods*. 

A method object is not a function and cannot be invoked as a function. Various mechanisms in the object system take a method object and invoke its method function, as is the case when a generic function is invoked. When this occurs it is said that the method is invoked or called. 

A method-defining form contains the *code* that is to be run when the arguments to the generic function cause the method that it defines to be invoked. When a method-defining form is evaluated, a method object is created and one of four actions is taken: 

*•* If a *generic function* of the given name already exists and if a *method object* already exists that agrees with the new one on *parameter specializers* and *qualifiers*, the new *method object* replaces the old one. For a definition of one method agreeing with another on *parameter specializers* and *qualifiers*, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 

*•* If a *generic function* of the given name already exists and if there is no *method object* that agrees with the new one on *parameter specializers* and *qualifiers*, the existing *generic function object* is modified to contain the new *method object*. 

*•* If the given *name* names an *ordinary function*, a *macro*, or a *special operator* , an error is signaled. 

*•* Otherwise a *generic function* is created with the *method* specified by the *method-defining form*. 



 

 

If the *lambda list* of a new *method* is not *congruent* with the *lambda list* of the *generic function*, an error is signaled. If a *method-defining operator* that cannot specify *generic function* options creates a new *generic function*, a *lambda list* for that *generic function* is derived from the *lambda list* of the *method* in the *method-defining form* in such a way as to be *congruent* with it. For a discussion of *congruence*, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 

Each method has a *specialized lambda list*, which determines when that method can be applied. A *specialized lambda list* is like an *ordinary lambda list* except that a specialized parameter may occur instead of the name of a required parameter. A specialized parameter is a list (*variable-name parameter-specializer-name*), where *parameter-specializer-name* is one of the following: 

a *symbol* 

denotes a *parameter specializer* which is the *class* named by that *symbol*. 

a *class* 

denotes a *parameter specializer* which is the *class* itself. 

(eql *form*) 

denotes a *parameter specializer* which satisfies the *type specifier* (eql *object*), where *object* is the result of evaluating *form*. The form *form* is evaluated in the lexical environment in which the method-defining form is evaluated. Note that *form* is evaluated only once, at the time the method is defined, not each time the generic function is called. 

*Parameter specializer names* are used in macros intended as the user-level interface (**defmethod**), while *parameter specializers* are used in the functional interface. 

Only required parameters may be specialized, and there must be a *parameter specializer* for each required parameter. For notational simplicity, if some required parameter in a *specialized lambda list* in a method-defining form is simply a variable name, its *parameter specializer* defaults to the *class* **t**. 

Given a generic function and a set of arguments, an applicable method is a method for that generic function whose parameter specializers are satisfied by their corresponding arguments. The following definition specifies what it means for a method to be applicable and for an argument to satisfy a *parameter specializer* . 

Let &#60;i&#62;hA&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;, . . . , A&#60;sub&#62;n&#60;/sub&#62;i&#60;/i&#62; be the required arguments to a generic function in order. Let &#60;i&#62;hP&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;, . . . , P&#60;sub&#62;n&#60;/sub&#62;i&#60;/i&#62; be the &#60;i&#62;parameter specializers&#60;/i&#62; corresponding to the required parameters of the method &#60;i&#62;M&#60;/i&#62; in order. The method &#60;i&#62;M&#60;/i&#62; is applicable when each &#60;i&#62;A&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is of the &#60;i&#62;type&#60;/i&#62; specified by the &#60;i&#62;type specifier P&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. Because every valid &#60;i&#62;parameter specializer&#60;/i&#62; is also a valid &#60;i&#62;type specifier&#60;/i&#62; , the &#60;i&#62;function&#60;/i&#62; &#60;b&#62;typep&#60;/b&#62; can be used during method selection to determine whether an argument satisfies a &#60;i&#62;parameter specializer&#60;/i&#62; . 

A method all of whose *parameter specializers* are the *class* **t** is called a *default method*; it is always applicable but may be shadowed by a more specific method. 



 

 

Methods can have *qualifiers*, which give the method combination procedure a way to distinguish among methods. A method that has one or more *qualifiers* is called a *qualified method*. A method with no *qualifiers* is called an *unqualified method*. A *qualifier* is any *non-list*. The *qualifiers* defined by the *standardized* method combination types are *symbols*. 

In this specification, the terms “*primary method*” and “*auxiliary method*” are used to partition *methods* within a method combination type according to their intended use. In standard method combination, *primary methods* are *unqualified methods* and *auxiliary methods* are methods with a single *qualifier* that is one of :around, :before, or :after. *Methods* with these *qualifiers* are called *around methods*, *before methods*, and *after methods*, respectively. When a method combination type is defined using the short form of **define-method-combination**, *primary methods* are methods qualified with the name of the type of method combination, and auxiliary methods have the *qualifier* :around. Thus the terms “*primary method*” and “*auxiliary method*” have only a relative definition within a given method combination type. 

