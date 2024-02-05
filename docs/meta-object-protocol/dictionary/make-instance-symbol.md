make-instance-symbol
====================

*Method* **MAKE-INSTANCE**

**Syntax:**

**make-instance** *(class* symbol) `&rest` *initargs* => *instance*

**Description:**

This is a method on the generic function[make-instance](/meta-object-protocol/make-instance).

This method simply invokes [make-instance](/meta-object-protocol/make-instance) recursively on the arguments ([find-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_c.htm#find-class) *class*) and *initargs*.
