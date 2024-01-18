extract-specializer-names
=========================

[*Function* **EXTRACT-SPECIALIZER-NAMES**]()

**Syntax:**

**extract-specializer-names** *specialized-lambda-list* => *specializer-names*

**Arguments and values:**

*specialized-lambda-list* -- A specialized lambda list as accepted by `defmethod`.

*specializer-names* -- A list of specializer names.

**Description:**

This function takes a specialized lambda list and returns its specializer names. This is a non-destructive operation. Whether the result shares structure with the argument is unspecified. The results are undefined if the result of this function is modified.

The result of this function will be a list with a number of elements equal to the number of required arguments in *specialized-lambda-list*. Specializers are defaulted to the symbol `t`.

If the *specialized-lambda-list* argument does not have legal syntax, an error is signaled. This syntax checking does not check the syntax of the actual specializer names, only the syntax of the lambda list and where the specializers appear.

**Examples:**

    (extract-specializer-names '((p position)))            ==> (POSITION)

    (extract-specializer-names '((p position) x y))        ==> (POSITION T T)

    (extract-specializer-names '(a (b (eql x)) c &rest i)) ==> (T (EQL X) T)
