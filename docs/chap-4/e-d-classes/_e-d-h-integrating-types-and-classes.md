 

The object system maps the space of *classes* into the space of *types*. Every *class* that has a proper name has a corresponding *type* with the same *name*. 

The proper name of every *class* is a valid *type specifier* . In addition, every *class object* is a valid *type specifier* . Thus the expression (typep *object class*) evaluates to *true* if the *class* of *object* is *class* itself or a *subclass* of *class*. The evaluation of the expression (subtypep class1 class2) returns the values *true* and *true* if class1 is a subclass of class2 or if they are the same *class*; otherwise it returns the values *false* and *true*. If *I* is an *instance* of some *class C* named *S* and *C*  



is an *instance* of **standard-class**, the evaluation of the expression (type-of *I*) returns *S* if *S* is the *proper name* of *C*; otherwise, it returns *C*. 

Because the names of *classes* and *class objects* are *type specifiers*, they may be used in the special form **the** and in type declarations. 

Many but not all of the predefined *type specifiers* have a corresponding *class* with the same proper name as the *type*. These type specifiers are listed in Figure 4–8. For example, the *type* **array** has a corresponding *class* named **array**. No *type specifier* that is a list, such as (vector double-float 100), has a corresponding *class*. The *operator* **deftype** does not create any *classes*. 

Each *class* that corresponds to a predefined *type specifier* can be implemented in one of three ways, at the discretion of each implementation. It can be a *standard class*, a *structure class*, or a *system class*. 

A *built-in class* is one whose *generalized instances* have restricted capabilities or special representations. Attempting to use **defclass** to define *subclasses* of a **built-in-class** signals an error. Calling **make-instance** to create a *generalized instance* of a *built-in class* signals an error. Calling **slot-value** on a *generalized instance* of a *built-in class* signals an error. Redefining a *built-in class* or using **change-class** to change the *class* of an *object* to or from a *built-in class* signals an error. However, *built-in classes* can be used as *parameter specializers* in *methods*. 

It is possible to determine whether a *class* is a *built-in class* by checking the *metaclass*. A *standard class* is an *instance* of the *class* **standard-class**, a *built-in class* is an *instance* of the *class* **built-in-class**, and a *structure class* is an *instance* of the *class* **structure-class**. 

Each *structure type* created by **defstruct** without using the :type option has a corresponding *class*. This *class* is a *generalized instance* of the *class* **structure-class**. The :include option of **defstruct** creates a direct *subclass* of the *class* that corresponds to the included *structure type*. 

It is *implementation-dependent* whether *slots* are involved in the operation of *functions* defined in this specification on *instances* of *classes* defined in this specification, except when *slots* are explicitly defined by this specification. 

If in a particular *implementation* a *class* defined in this specification has *slots* that are not defined by this specfication, the names of these *slots* must not be *external symbols* of *packages* defined in this specification nor otherwise *accessible* in the CL-USER *package*. 

The purpose of specifying that many of the standard *type specifiers* have a corresponding *class* is to enable users to write *methods* that discriminate on these *types*. *Method* selection requires that a *class precedence list* can be determined for each *class*. 

The hierarchical relationships among the *type specifiers* are mirrored by relationships among the *classes* corresponding to those *types*. 

Figure 4–8 lists the set of *classes* that correspond to predefined *type specifiers*.  



|&#60;p&#62;**arithmetic-error generic-function simple-error array hash-table simple-type-error bit-vector integer simple-warning broadcast-stream list standard-class built-in-class logical-pathname standard-generic-function cell-error method standard-method character method-combination standard-object class null storage-condition complex number stream** &#60;/p&#62;&#60;p&#62;**concatenated-stream package stream-error condition package-error string** &#60;/p&#62;&#60;p&#62;**cons parse-error string-stream control-error pathname structure-class division-by-zero print-not-readable structure-object echo-stream program-error style-warning end-of-file random-state symbol** &#60;/p&#62;&#60;p&#62;**error ratio synonym-stream file-error rational t** &#60;/p&#62;&#60;p&#62;**file-stream reader-error two-way-stream float readtable type-error floating-point-inexact real unbound-slot floating-point-invalid-operation restart unbound-variable floating-point-overflow sequence undefined-function floating-point-underflow serious-condition vector** &#60;/p&#62;&#60;p&#62;**function simple-condition warning**&#60;/p&#62;|
| :- |


**Figure 4–8. Classes that correspond to pre-defined type specifiers** 

The *class precedence list* information specified in the entries for each of these *classes* are those that are required by the object system. 

Individual implementations may be extended to define other type specifiers to have a corresponding *class*. Individual implementations may be extended to add other *subclass* relationships and to add other *elements* to the *class precedence lists* as long as they do not violate the type relationships and disjointness requirements specified by this standard. A standard *class* defined with no direct *superclasses* is guaranteed to be disjoint from all of the *classes* in the table, except for the class named **t**.  



