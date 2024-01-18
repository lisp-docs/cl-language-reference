ensure-generic-function
=======================

*Function* **ENSURE-GENERIC-FUNCTION**

**Syntax:**

**ensure-generic-function** *function-name* `&key` `&allow-other-keys` => *generic function*

**Arguments and values:**

*function-name* -- A symbol or a list of the form `(setf symbol)`.

*generic function* -- A generic function metaobject.

Some of the keyword arguments accepted by this function are actually processed by[ensure-generic-function-using-class](/docs/meta-object-protocol/ensure-generic-function-using-class), others are processed during initialization of the generic function metaobject (as described in the section called [``Initialization of Generic Function Metaobjects''](/docs/meta-object-protocol/initialization-of-generic-function-metaobjects)).

**Description:**

This function is called to define a globally named generic function or to specify or modify options and declarations that pertain to a globally named generic function as a whole. It can be called by the user or the implementation.

It is the functional equivalent of [defgeneric](http://www.lispworks.com/documentation/HyperSpec/Body/m_defgen.htm#defgeneric), and is called by the expansion of the [defgeneric](http://www.lispworks.com/documentation/HyperSpec/Body/m_defgen.htm#defgeneric) and [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmet.htm#defmethod) macros.

The behavior of this function is actually implemented by the generic function [ensure-generic-function-using-class](/docs/meta-object-protocol/ensure-generic-function-using-class). When [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function) is called, it immediately calls [ensure-generic-function-using-class](/docs/meta-object-protocol/ensure-generic-function-using-class) and returns that result as its own.

The first argument to [ensure-generic-function-using-class](/docs/meta-object-protocol/ensure-generic-function-using-class) is computed as follows:

-   If *function-name* names a non-generic function, a macro, or a special form, an error is signaled.
-   If *function-name* names a generic function, that generic function metaobject is used.
-   Otherwise, `nil` is used.

The second argument is *function-name*. The remaining arguments are the complete set of keyword arguments received by [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function).

**Comments and remarks**

See also the [desicription of this function in the Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Body/f_ensure.htm#ensure-generic-function).
