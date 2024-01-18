ensure-class
============

*Function* **ENSURE-CLASS**

**Syntax:**

**ensure-class** *name* `&key` `&allow-other-keys` => *class*

**Arguments and values:**

*name* -- A symbol.

*class* -- A class metaobject.

**Description:**

Some of the keyword arguments accepted by this function are actually processed by[ensure-class-using-class](/meta-object-protocol/ensure-class-using-class), others are processed during initialization of the class metaobject (as described in the section called [``Initialization of Class Metaobjects''](/meta-object-protocol/initialization-of-class-metaobjects)).

This function is called to define or redefine a class with the specified name, and can be called by the user or the implementation. It is the functional equivalent of [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass), and is called by the expansion of the [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) macro.

The behavior of this function is actually implemented by the generic function [ensure-class-using-class](/meta-object-protocol/ensure-class-using-class). When **ensure-class** is called, it immediately calls [ensure-class-using-class](/meta-object-protocol/ensure-class-using-class) and returns that result as its own.
