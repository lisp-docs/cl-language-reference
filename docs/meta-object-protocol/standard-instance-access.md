standard-instance-access
========================

*Function* **STANDARD-INSTANCE-ACCESS**

**Syntax:**

**standard-instance-access** *instance* *location* => *object*

**Arguments and values:**

*instance* -- An object.

*location* -- A slot location.

*object* -- An object.

**Description:**

This function is called to provide direct access to a slot in an instance. By usurping the normal slot lookup protocol, this function is intended to provide highly optimized access to the slots associated with an instance.

The following restrictions apply to the use of this function:

-   []()

    The *instance* argument must be a standard instance (it must have been returned by[allocate-instance (*class* standard-class)](allocate-instance-standard-class.md)).

-   The *instance* argument cannot be an non-updated obsolete instance.

-   The *location* argument must be a location of one of the directly accessible slots of the instance's class.

-   The slot must be bound.

The results are undefined if any of these restrictions are not met.
