Readers for Method Metaobjects
==============================

### Readers for Method Metaobjects

The reader generic functions which simply return information associated with method metaobjects are presented together here in the format described under [``Readers for Class Metaobjects.''](readers-for-class-metaobjects.md)

Each of these reader generic functions have the same syntax, accepting one required argument called *method*, which must be a method metaobject; otherwise, an error is signaled. An error is also signaled if the method metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ ---------------------------------------------------------------------------
  Generic Function   [**method-function**](method-function.md)
  Generic Function   [**method-generic-function**](method-generic-function.md)
  Generic Function   [**method-lambda-list**](method-lambda-list.md)
  Generic Function   [**method-specializers**](method-specializers.md)
  Generic Function   [**method-qualifiers**](method-qualifiers.md)
  Generic Function   [**accessor-method-slot-definition**](accessor-method-slot-definition.md)
  ------------------ ---------------------------------------------------------------------------

#### Methods

The specified methods for the method metaobject reader generic functions are presented below.

  -------- ----------------------------------------------------------------------------------------------
  Method   [**method-function** (*method* standard-method)](method-function-standard-method.md)
  Method   [**method-lambda-list** (*method* standard-method)](method-lambda-list-standard-method.md)
  Method   [**method-specializers** (*method* standard-method)](method-specializers-standard-method.md)
  Method   [**method-qualifiers** (*method* standard-method)](method-qualifiers-standard-method.md)
  -------- ----------------------------------------------------------------------------------------------

No behavior is specified for these methods beyond that which is specified for their respective generic functions.

  -------- ------------------------------------------------------------------------------------------------------
  Method   [**method-generic-function** (*method* standard-method)](method-generic-function-standard-method.md)
  -------- ------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.

The value returned by this method is maintained by [`add-method` (*generic-function* standard-generic-function) (*method* standard-method)](add-method-standard-generic-function-standard-method.md) and [`remove-method` (*generic-function* standard-generic-function) (*method* standard-method)](remove-method-standard-generic-function-standard-method.md).

  -------- ----------------------------------------------------------------------------------------------------------------------------------------
  Method   [**accessor-method-slot-definition** (*method* standard-accessor-method)](accessor-method-slot-definition-standard-accessor-method.md)
  -------- ----------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.
