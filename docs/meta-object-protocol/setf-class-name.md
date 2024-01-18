setf-class-name
===============

*Generic Function* **(SETF CLASS-NAME)**

**Syntax:**

(`setf` (**class-name** *class*) *new-name*) => *new-name*

**Arguments and values:**

*class* -- A class metaobject.

*new-name* -- Any Lisp object.

**Description:**

This function changes the name of *class* to *new-name*. This value is usually a symbol, or `nil` if the class has no name.

This function works by calling[reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) with *class* as its first argument, the symbol `:name` as its second argument and *new-name* as its third argument.
