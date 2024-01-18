Readers for Generic Function Metaobjects
========================================

### Readers for Generic Function Metaobjects

The reader generic functions which simply return information associated with generic function metaobjects are presented together in this section.

Each of the reader generic functions for generic function metaobjects has the same syntax, accepting one required argument called *generic-function*, which must be a generic function metaobject; otherwise, an error is signaled. An error is also signaled if the generic function metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ -------------------------------------------------------------------------------------------------
  Generic Function   [**generic-function-argument-precedence-order**](/docs/meta-object-protocol/generic-function-argument-precedence-order)
  Generic Function   [**generic-function-declarations**](/docs/meta-object-protocol/generic-function-declarations)
  Generic Function   [**generic-function-lambda-list**](/docs/meta-object-protocol/generic-function-lambda-list)
  Generic Function   [**generic-function-method-class**](/docs/meta-object-protocol/generic-function-method-class)
  Generic Function   [**generic-function-method-combination**](/docs/meta-object-protocol/generic-function-method-combination)
  Generic Function   [**generic-function-methods**](/docs/meta-object-protocol/generic-function-methods)
  Generic Function   [**generic-function-name**](/docs/meta-object-protocol/generic-function-name)
  ------------------ -------------------------------------------------------------------------------------------------

#### Methods

The specified methods for the generic function metaobject reader generic functions are presented below.

  -------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Method   [**generic-function-argument-precedence-order** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-argument-precedence-order-standard-generic-function)
  Method   [**generic-function-declarations** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-declarations-standard-generic-function)
  Method   [**generic-function-lambda-list** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-lambda-list-standard-generic-function)
  Method   [**generic-function-method-class** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-method-class-standard-generic-function)
  Method   [**generic-function-method-combination** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-method-combination-standard-generic-function)
  Method   [**generic-function-name** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-name-standard-generic-function)
  -------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for these methods beyond that which is specified for their respective generic functions.

  -------- --------------------------------------------------------------------------------------------------------------------------------------
  Method   [**generic-function-methods** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-methods-standard-generic-function)
  -------- --------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.

The value returned by this method is maintained by [`add-method` (*generic-function* standard-generic-function) (*method* standard-method)](/docs/meta-object-protocol/add-method-standard-generic-function-standard-method) and [`remove-method` (*generic-function* standard-generic-function) (*method* standard-method)](/docs/meta-object-protocol/remove-method-standard-generic-function-standard-method).

#### Comments and remarks

The fourth paragraph of the original text reads like this:

*The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.*

But we think this is an editing error because there is not a single generic function being referred to, rather several generic functions. For that reason, we copied a similar paragraph from the previous section in the book.
