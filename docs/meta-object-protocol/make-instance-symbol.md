make-instance-symbol
====================

[*Method* **MAKE-INSTANCE**]()

**Syntax:**

**make-instance** *(class* symbol) `&rest` *initargs* => *instance*

**Description:**

[This is a method on the generic function]()[make-instance](make-instance.md).

This method simply invokes [make-instance](make-instance.md) recursively on the arguments ([find-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_c.htm#find-class) *class*) and *initargs*.
