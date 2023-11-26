 

An *object* of *metaclass* **standard-class** has zero or more named *slots*. The *slots* of an *object* are determined by the *class* of the *object*. Each *slot* can hold one value. The *name* of a *slot* is a *symbol* that is syntactically valid for use as a variable name. 

When a *slot* does not have a value, the *slot* is said to be *unbound*. When an unbound *slot* is read, the *generic function* **slot-unbound** is invoked. The system-supplied primary *method* for **slot-unbound** on *class* **t** signals an error. If **slot-unbound** returns, its *primary value* is used that time as the *value* of the *slot*. 

The default initial value form for a *slot* is defined by the :initform slot option. When the :initform form is used to supply a value, it is evaluated in the lexical environment in which the **defclass** form was evaluated. The :initform along with the lexical environment in which the **defclass** form was evaluated is called a *captured initialization form*. For more details, see Section 7.1 (Object Creation and Initialization). 

A *local slot* is defined to be a *slot* that is *accessible* to exactly one *instance*, namely the one in which the *slot* is allocated. A *shared slot* is defined to be a *slot* that is visible to more than one *instance* of a given *class* and its *subclasses*. 

A *class* is said to define a *slot* with a given *name* when the **defclass** form for that *class* contains a *slot specifier* with that *name*. Defining a *local slot* does not immediately create a *slot*; it causes a *slot* to be created each time an *instance* of the *class* is created. Defining a *shared slot* immediately creates a *slot*. 

The :allocation slot option to **defclass** controls the kind of *slot* that is defined. If the value of the :allocation slot option is :instance, a *local slot* is created. If the value of :allocation is :class, a *shared slot* is created. 

A *slot* is said to be *accessible* in an *instance* of a *class* if the *slot* is defined by the *class* of the *instance* or is inherited from a *superclass* of that *class*. At most one *slot* of a given *name* can be *accessible* in an *instance*. A *shared slot* defined by a *class* is *accessible* in all *instances* of that *class*. A detailed explanation of the inheritance of *slots* is given in Section 7.5.3 (Inheritance of Slots and Slot Options). 

