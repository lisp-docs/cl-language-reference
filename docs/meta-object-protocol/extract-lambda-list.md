extract-lambda-list
===================

*Function* **EXTRACT-LAMBDA-LIST**

**Syntax:**

**extract-lambda-list** *specialized-lambda-list* => *lambda-list*

**Arguments and values:**

*specialized-lambda-list* -- A specialized lambda list as accepted by `defmethod`.

*lambda-list* -- An unspecialized lambda list.

**Description:**

This function takes a specialized lambda list and returns the lambda list with the specializers removed. This is a non-destructive operation. Whether the result shares any structure with the argument is unspecified.

If the *specialized-lambda-list* argument does not have legal syntax, an error is signaled. This syntax checking does not check the syntax of the actual specializer names, only the syntax of the lambda list and where the specializers appear.

**Examples:**

    (extract-lambda-list '((p position)))             ==> (P)

    (extract-lambda-list '((p position) x y))         ==> (P X Y)

    (extract-lambda-list '(a (b (eql x)) c &rest i))  ==> (A B C &OPTIONAL I)

**Comments and remarks:**

The last example in the previous section is surprising, because there is no explanation for it.
