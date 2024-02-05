ensure-generic-function-using-class
===================================

*Generic Function* **ENSURE-GENERIC-FUNCTION-USING-CLASS**

**Syntax:**

**ensure-generic-function-using-class** *generic-function-or-nil* *function-name* `&key` `:argument-precedence-order` `:declarations` `:documentation` `:generic-function-class` `:lambda-list` `:method-class` `:method-combination` `:name` `&allow-other-keys` => *generic-function*

**Arguments and values:**

*generic-function-or-nil*

-- A generic function metaobject `nil`.

*function-name* -- A symbol or a list of the form `(setf symbol)`.

`:generic-function-class` -- A class metaobject or a class name. If it is not supplied, it defaults to the class named[standard-generic-function](/meta-object-protocol/class-standard-generic-function). If a class name is supplied, it is interpreted as the class with that name. If a class name is supplied, but there is no such class, an error is signaled.

For the interpretation of additional keyword arguments, see [``Initialization of Generic Function Metaobjects''](/meta-object-protocol/initialization-of-generic-function-metaobjects).

*generic-function* -- A generic function metaobject.

**Description:**

The generic function [ensure-generic-function-using-class](/meta-object-protocol/ensure-generic-function-using-class) is called to define or modify the definition of a globally named generic function. It is called by the [ensure-generic-function](/meta-object-protocol/ensure-generic-function) function. It can also be called directly.

The first step performed by this generic function is to compute the set of initialization arguments which will be used to create or reinitialize the globally named generic function. These initialization arguments are computed from the full set of keyword arguments received by this generic function as follows:

-   The `:generic-function-class` argument is not included in the initialization arguments.

-   If the `:method-class` argument was received by this generic function, it is converted into a class metaobject. This is done by looking up the class name with [find-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_c.htm#find-class). If there is no such class, an error is signalled.

-   All other keyword arguments are included directly in the initialization arguments.

If the *generic-function-or-nil* argument is `nil`, an instance of the class specified by the `:generic-function-class` argument is created by calling [make-instance](/meta-object-protocol/make-instance) with the previously computed initialization arguments. The function name *function-name* is set to name the generic function. The newly created generic function metaobject is returned.

If the class of the *generic-function-or-nil* argument is not the same as the class specified by the `:generic-function-class` argument, an error is signaled.

Otherwise the generic function *generic-function-or-nil* is redefined by calling the [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) generic function with *generic-function-or-nil* and the initialization arguments. The *generic-function-or-nil* argument is then returned.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**ensure-generic-function-using-class** (*generic-function* generic-function) *function-name* `&key` `:generic-function-class` `&allow-other-keys`](/meta-object-protocol/ensure-generic-function-using-class-generic-function)
  [**ensure-generic-function-using-class** (*generic-function* null) *function-name* `&key` `:generic-function-class` `&allow-other-keys`](/meta-object-protocol/ensure-generic-function-using-class-null)
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


