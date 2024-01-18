find-method-combination
=======================

*Generic Function* **FIND-METHOD-COMBINATION**

**Syntax:**

**find-method-combination** *generic-function* *method-combination-type-name* *method-combination-options* => *method-combination*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method-combination-type-name* -- A symbol which names a type of method combination.

*method-combination-options* -- A list of arguments to the method combination type.

*method-combination* -- A method combination metaobject.

**Description:**

This generic function is called to determine the method combination object used by a generic function.

Further details of method combination metaobjects are not specified.
