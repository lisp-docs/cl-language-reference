Readers for Method Metaobjects
==============================

### Readers for Method Metaobjects

The reader generic functions which simply return information associated with method metaobjects are presented together here in the format described under [``Readers for Class Metaobjects.''](/meta-object-protocol/readers-for-class-metaobjects)

Each of these reader generic functions have the same syntax, accepting one required argument called *method*, which must be a method metaobject; otherwise, an error is signaled. An error is also signaled if the method metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ ---------------------------------------------------------------------------
  Generic Function   [**method-function**](/meta-object-protocol/method-function)
  Generic Function   [**method-generic-function**](/meta-object-protocol/method-generic-function)
  Generic Function   [**method-lambda-list**](/meta-object-protocol/method-lambda-list)
  Generic Function   [**method-specializers**](/meta-object-protocol/method-specializers)
  Generic Function   [**method-qualifiers**](/meta-object-protocol/method-qualifiers)
  Generic Function   [**accessor-method-slot-definition**](/meta-object-protocol/accessor-method-slot-definition)
  ------------------ ---------------------------------------------------------------------------

#### Methods

The specified methods for the method metaobject reader generic functions are presented below.

  -------- ----------------------------------------------------------------------------------------------
  Method   [**method-function** (*method* standard-method)](/meta-object-protocol/method-function-standard-method)
  Method   [**method-lambda-list** (*method* standard-method)](/meta-object-protocol/method-lambda-list-standard-method)
  Method   [**method-specializers** (*method* standard-method)](/meta-object-protocol/method-specializers-standard-method)
  Method   [**method-qualifiers** (*method* standard-method)](/meta-object-protocol/method-qualifiers-standard-method)
  -------- ----------------------------------------------------------------------------------------------

No behavior is specified for these methods beyond that which is specified for their respective generic functions.

  -------- ------------------------------------------------------------------------------------------------------
  Method   [**method-generic-function** (*method* standard-method)](/meta-object-protocol/method-generic-function-standard-method)
  -------- ------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.

The value returned by this method is maintained by [`add-method` (*generic-function* standard-generic-function) (*method* standard-method)](/meta-object-protocol/add-method-standard-generic-function-standard-method) and [`remove-method` (*generic-function* standard-generic-function) (*method* standard-method)](/meta-object-protocol/remove-method-standard-generic-function-standard-method).

  -------- ----------------------------------------------------------------------------------------------------------------------------------------
  Method   [**accessor-method-slot-definition** (*method* standard-accessor-method)](/meta-object-protocol/accessor-method-slot-definition-standard-accessor-method)
  -------- ----------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.
