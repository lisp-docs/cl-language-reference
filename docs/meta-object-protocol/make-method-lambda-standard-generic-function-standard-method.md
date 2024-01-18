make-method-lambda-standard-generic-function-standard-method
============================================================

*Method* **MAKE-METHOD-LAMBDA**

**Syntax:**

**make-method-lambda** (*generic-function* standard-generic-function) (*method* standard-method) *lambda-expression* *environment*

**Description:**

This is a method on the generic function[make-method-lambda](/docs/meta-object-protocol/make-method-lambda).

This method returns a method lambda which accepts two arguments, the list of arguments to the generic function, and the list of next methods. What initialization arguments may be returned in the second value are unspecified.

This method can be overridden.
