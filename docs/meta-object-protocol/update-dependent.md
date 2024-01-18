update-dependent
================

[*Generic Function* **UPDATE-DEPENDENT**]()

**Syntax:**

**update-dependent** *metaobject* *dependent* &`rest` *initargs* => *unspecified*

**Arguments and values:**

*metaobject* -- A class or generic function metaobject. It is the metaobject being reinitialized or otherwise modified.

*dependent* -- An object. It is the dependent being updated.

*initargs* -- A list of the initialization arguments for the metaobject redefinition.

*unspecified* -- The return value is unspecified.

**Description:**

This generic function is called to update a dependent of *metaobject*.

[When a class or a generic function is reinitialized each of its dependents is updated. The *initargs* argument to `update-dependent` is the set of initialization arguments received by]()[reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance).

When a method is added to a generic function, each of the generic function's dependents is updated. The *initargs* argument is a list of two elements: the symbol `add-method`, and the method that was added.

When a method is removed from a generic function, each of the generic function's dependents is updated. The *initargs* argument is a list of two elements: the symbol `remove-method`, and the method that was removed.

In each case, [map-dependents](map-dependents.md) is used to call `update-dependent` on each of the dependents. So, for example, the update of a generic function's dependents when a method is added could be performed by the following code:

        (map-dependents generic-function
                        #'(lambda (dep)
                            (update-dependent generic-function
                                              dep
                                              'add-method
                                              new-method)))
      

**Methods:**

There are no specified methods on this generic function.

**Comments and remarks:**

See the [``Dependent Maintenance Protocol'' section](dependent-maintenance-protocol.md) for remarks about the use of this facility.
