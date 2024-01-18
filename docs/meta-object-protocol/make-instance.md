make-instance
=============

*Generic Function* **MAKE-INSTANCE**

**Syntax:**

**make-instance** *class* `&rest` *initargs* => *instance*

**Arguments and values:**

*class* -- A class metaobject or a class name.

*initargs* -- A list of alternating initialization argument names and values.

*instance* -- A newly allocated and initialized instance of *class*.

**Description:**

The generic function `make-instance` creates and returns a new instance of the given class. Its behavior and use is described in the CLOS specification.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------
  [**make-instance** (*class* symbol) `&rest` *initargs*](/meta-object-protocol/make-instance-symbol)
  [**make-instance** (*class* standard-class) `&rest` *initargs*](/meta-object-protocol/make-instance-standard-class)
  [**make-instance** (*class* funcallable-standard-class) `&rest` *initargs*](/meta-object-protocol/make-instance-funcallable-standard-class)
  --------------------------------------------------------------------------------------------------------------------------

**Comments and remarks:**

See also[the entry in the Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Body/f_mk_ins.htm#make-instance) for this function.
