Processing method bodies
========================

### Processing method bodies

Before a method can be created, the list of forms comprising the method body must be converted to a method function. This conversion is a two step process.

**Note:**

The body of methods can also appear in the `:initial-methods` option of [defgeneric](the-defgeneric-macro.md) forms. Initial methods are not considered by any of the protocols specified in this document.

The first step occurs during macro-expansion of the macro form. In this step, the method lambda list, declarations and body are converted to a lambda expression called a *method lambda*. This conversion is based on information associated with the generic function definition in effect at the time the macro form is expanded.

The generic function definition is obtained by calling [ensure-generic-function](ensure-generic-function.md) with a first argument of the generic function name specified in the macro form. The `:lambda-list` keyword argument is not passed in this call.

Given the generic function, production of the method lambda proceeds by calling [make-method-lambda](make-method-lambda.md). The first argument in this call is the generic function obtained as described above. The second argument is the result of calling [class-prototype](class-prototype.md) on the result of calling [generic-function-method-class](generic-function-method-class.md) on the generic function. The third argument is a lambda expression formed from the method lambda list, declarations and body. The fourth argument is the macro-expansion environment of the macro form; this is the value of the `&environment` argument to the [defmethod](the-defmethod-macro.md) macro.

The generic function [make-method-lambda](make-method-lambda.md) returns two values. The first is the method lambda itself. The second is a list of initialization arguments and values. These are included in the initialization arguments when the method is created.

In the second step, the method lambda is converted to a function which properly captures the lexical scope of the macro form. This is done by having the method lambda appear in the macro-expansion as the argument of the [function](http://www.lispworks.com/documentation/HyperSpec/Body/s_fn.htm) special form. During the subsequent evaluation of the macro-expansion, the result of the [function](http://www.lispworks.com/documentation/HyperSpec/Body/s_fn.htm) special form is the methodfunction.
