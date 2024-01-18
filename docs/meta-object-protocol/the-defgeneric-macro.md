The defgeneric macro
====================

### The `defgeneric` macro

The evaluation or execution of a `defgeneric` form results in a call to the [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function) function. The arguments received by [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function) are derived from the `defgeneric` form in a defined way. As with [defclass](/docs/meta-object-protocol/the-defclass-macro) and [defmethod](/docs/meta-object-protocol/the-defmethod-macro), the exact macro-expansion of the `defgeneric` form is not defined, only the relationship between the arguments to the macro and the arguments received by [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function).

-   The *function-name* argument to `defgeneric` becomes the first argument to [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function). This is the only positional argument accepted by [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function); all other arguments are keyword arguments.

-   The *lambda-list* argument to `defgeneric` becomes the value of the `:lambda-list` keyword argument to [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function).

-   For each of the options `:argument-precedence-order`, `:documentation`, `:generic-function-class` and `:method-class`, the value of the option becomes the value of the keyword argument with the same name. If the option does not appear in the macro form, the keyword argument does not appear in the resulting call to [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function).

-   For the option `declare`, the list of declarations becomes the value of the `:declarations` keyword argument. If the `declare` option does not appear in the macro form, the `:declarations` keyword argument does not appear in the call to [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function).

-   The handling of the `:method-combination` option is not specified.

The result of the call to [ensure-generic-function](/docs/meta-object-protocol/ensure-generic-function) is returned as the result of evaluating or executing the `defgeneric` form.
