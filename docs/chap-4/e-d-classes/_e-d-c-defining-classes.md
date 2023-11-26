**4.3.2 Defining Classes** 

The macro **defclass** is used to define a new named *class*. 

The definition of a *class* includes: 

*•* The *name* of the new *class*. For newly-defined *classes* this *name* is a *proper name*. *•* The list of the direct *superclasses* of the new *class*. 

*•* A set of *slot specifiers*. Each *slot specifier* includes the *name* of the *slot* and zero or more *slot* options. A *slot* option pertains only to a single *slot*. If a *class* definition contains two *slot specifiers* with the same *name*, an error is signaled. 

*•* A set of *class* options. Each *class* option pertains to the *class* as a whole. 

The *slot* options and *class* options of the **defclass** form provide mechanisms for the following: *•* Supplying a default initial value *form* for a given *slot*. 

*•* Requesting that *methods* for *generic functions* be automatically generated for reading or writing *slots*. 

*•* Controlling whether a given *slot* is shared by all *instances* of the *class* or whether each *instance* of the *class* has its own *slot*. 

*•* Supplying a set of initialization arguments and initialization argument defaults to be used in *instance* creation. 

*•* Indicating that the *metaclass* is to be other than the default. The :metaclass option is reserved for future use; an implementation can be extended to make use of the :metaclass option. 

*•* Indicating the expected *type* for the value stored in the *slot*. 

*•* Indicating the *documentation string* for the *slot*.  



