setf-generic-function-name
==========================

*Generic Function* **(SETF GENERIC-FUNCTION-NAME)**

**Syntax:**

(`setf` (**generic-function-name** *generic-function*) *new-name*) => *new-name*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*new-name* -- A function name or `nil`.

**Description:**

This function changes the name of *generic-function* to *new-name*. This value is usually a function name (i.e., a symbol or a list of the form `(setf symbol)`) or `nil`, if the generic function is to have no name.

This function works by calling[reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) with *generic-function* as its first argument, the symbol `:name` as its second argument and *new-name* as its third argument.
