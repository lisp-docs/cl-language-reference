ensure-class-using-class
========================

*Generic Function* **ENSURE-CLASS-USING-CLASS**

**Syntax:**

**ensure-class-using-class** *class* *name* `&key` `:direct-default-initargs` `:direct-slots` `:direct-superclasses` `:name` `:metaclass` => *resulting-class*

**Arguments and values:**

*class* -- A class metaobject or `NIL`.

*name* -- A class name.

`:metaclass` -- A class metaobject class or a class metaobject class name. If this argument is not supplied, it defaults to the class named `standard-class`. If a class name is supplied, it is interpreted as the class with that name. If a class name is supplied, but there is no such class, an error is signaled.

`:direct-superclasses` -- A list of which each element is a class metaobject or a class name. An error is signaled if this argument is not a proper list.

For the interpretation of additional keyword arguments, see[Initialization of Class Metaobjects](/docs/meta-object-protocol/initialization-of-class-metaobjects).

*resulting-class* -- A class metaobject.

**Description:**

This generic function is called to define or modify the definition of a named class. It is called by the `ensure-class` function. It can also be called directly.

The first step performed by this generic function is to compute the set of initialization arguments which will be used to create or reinitialize the named class. The initialization arguments are computed from the full set of keyword arguments received by this generic function as follows:

-   The `:metaclass` argument is not included in the initialization arguments.
-   If the `:direct-superclasses` argument was received by this generic function, it is converted into a list of class metaobjects. This conversion does not affect the structure of the supplied `:direct-superclasses` argument. For each element in the `:direct-superclasses` argument:
    -   If the element is a class metaobject, that class metaobject is used.
    -   If the element names a class, that class metaobject is used.
    -   Otherwise an instance of the class [forward-referenced-class](/docs/meta-object-protocol/class-forward-referenced-class) is created and used. The proper name of the newly created forward referenced class metaobject is set to *name*.
-   All other keyword arguments are included directly in the initialization arguments.

If the *class* argument is `nil`, a new class metaobject is created by calling the `make-instance` generic function with the value of the `:metaclass` argument as its first argument, and the previously computed initialization arguments. The proper name of the newly created class metaobject is set to *name*. The newly created class metaobject is returned.

If the *class* argument is a forward referenced class, `change-class` is called to change its class to the value specified by the `:metaclass` argument. The class metaobject is then reinitialized with the previously initialization arguments. (This is a documented violation of the general constraint that `change-class` not be used with class metaobjects.)

If the class of the *class* argument is not the same as the class specified by the `:metaclass` argument, an error is signaled.

Otherwise, the class metaobject *class* is redefined by calling the `reinitialize-instance` generic function with *class* and the initialization arguments. The *class* argument is then returned.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**ensure-class-using-class** (*class* class) *name* `&key` `:metaclass` `:direct-superclasses` `&allow-other-keys`](/docs/meta-object-protocol/ensure-class-using-class-class)
  [**ensure-class-using-class** (*class* forward-referenced-class) *name* `&key` `:metaclass` `:direct-superclasses` `&allow-other-keys`](/docs/meta-object-protocol/ensure-class-using-class-forward-referenced-class)
  [**ensure-class-using-class** (*class* null) *name* `&key` `:metaclass` `:direct-superclasses` `&allow-other-keys`](/docs/meta-object-protocol/ensure-class-using-class-null)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


