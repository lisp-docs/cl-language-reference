 

The *compound type specifier* form of the numeric *type specifiers* permit the user to specify an interval on the real number line which describe a *subtype* of the *type* which would be described by the corresponding *atomic type specifier* . A *subtype* of some *type T* is specified using an ordered pair of *objects* called *interval designators* for *type T*. 

Numbers **12–9**

 

 

The first of the two *interval designators* for *type T* can be any of the following: 

a number *N* of *type T* 

This denotes a lower inclusive bound of *N*. That is, *elements* of the *subtype* of *T* will be greater than or equal to *N*. 

a *singleton list* whose *element* is a number *M* of *type T* 

This denotes a lower exclusive bound of *M*. That is, *elements* of the *subtype* of *T* will be greater than *M*. 

the symbol **\*** 

This denotes the absence of a lower bound on the interval. 

The second of the two *interval designators* for *type T* can be any of the following: 

a number *N* of *type T* 

This denotes an upper inclusive bound of *N*. That is, *elements* of the *subtype* of *T* will be less than or equal to *N*. 

a *singleton list* whose *element* is a number *M* of *type T* 

This denotes an upper exclusive bound of *M*. That is, *elements* of the *subtype* of *T* will be less than *M*. 

the symbol **\*** 

This denotes the absence of an upper bound on the interval. 

