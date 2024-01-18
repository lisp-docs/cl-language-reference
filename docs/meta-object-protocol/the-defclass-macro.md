The defclass macro
==================

### The `defclass` macro

The evaluation or execution of a `defclass` form results in a call to the [ensure-class](ensure-class.md) function. The arguments received by [ensure-class](ensure-class.md) are derived from the `defclass` form in a defined way. The exact macro-expansion of the `defclass` form is not defined, only the relationship between the arguments to the `defclass` macro and the arguments received by the [ensure-class](ensure-class.md) function. Examples of typical `defclass` forms and sample expansions are shown in the Figures below.

------------------------------------------------------------------------

    (defclass plane (moving-object graphics-object)
         ((altitude :initform 0 :accessor plane-altitude)
          (speed))
      (:default-initargs :engine *jet*))

    (ensure-class 'plane
      ':direct-superclasses '(moving-object graphics-object)
      ':direct-slots (list (list ':name 'altitude
                                 ':initform '0
                                 ':initfunction #'(lambda () 0)
                                 ':readers '(plane-altitude)
                                 ':writers '((setf plane-altitude)))
                           (list ':name 'speed))
      ':direct-default-initargs (list (list ':engine
                                            '*jet*
                                            #'(lambda () *jet*))))

------------------------------------------------------------------------

A `defclass` form with standard slot and class options and an expansion of it that would result in the proper call to [ensure-class](ensure-class.md).

------------------------------------------------------------------------

    (defclass sst (plane)
         ((mach mag-step 2
                locator sst-mach
                locator mach-location
                :reader mach-speed
                :reader mach))
      (:metaclass faster-class)
      (another-option foo bar))

    (ensure-class 'sst
      ':direct-superclasses '(plane)
      ':direct-slots (list (list ':name 'mach
                                 ':readers '(mach-speed mach)
                                 'mag-step '2
                                 'locator '(sst-mach mach-location)))
      ':metaclass 'faster-class
      'another-option '(foo bar))

------------------------------------------------------------------------

A `defclass` form with non-standard class and slot options, and an expansion of it which results in the proper call to [ensure-class](ensure-class.md). Note that the order of the slot options has not affected the order of the properties in the canonicalized slot specification, but has affected the order of the elements in the lists which are the values of those properties.

The *name* argument to `defclass` becomes the value of the first argument to [ensure-class](ensure-class.md). This is the only positional argument accepted by [ensure-class](ensure-class.md); all other arguments are keyword arguments.

The *direct-superclasses* argument to `defclass` becomes the value of the `:direct-super-classes` keyword argument to [ensure-class](ensure-class.md).

The *direct slots* argument to `defclass` becomes the value of the `:direct-slots` keyword argument to [ensure-class](ensure-class.md). Special processing of this value is done to regularize the form of each slot specification and to properly capture the lexical scope of the initialization forms. This is done by converting each slot specification to a property list called a *canonicalized slot specification*. The resulting list of canonicalized slot specifications is the value of the `:direct-slots` keyword argument.

Canonicalized slot specifications are later used as the keyword arguments to a generic function which will, in turn, pass them to [make-instance](make-instance.md) for use as a set of initialization arguments. Each canonicalized slot specification is formed from the corresponding slot specification as follows:

-   The name of the slot is the value of the `:name` property. This property appears in every canonicalized slot specification.

-   When the `:initform` slot option is present in the slot specification, then both the `:initform` and `:initfunction` properties are present in the canonicalized slot specification. The value of the `:initform` property is the initialization form. The value of the `:initfunction` property is a function of zero arguments which, when called, returns the result of evaluating the initialization form in its proper lexical environment.

    If the `:initform` slot option is not present in the slot specification, then either the `:initfunction` property will not appear, or its value will be false. In such cases, the value of the `:initform` property, or whether it appears, is unspecified.

-   The value of the `:initargs` property is a list of the values of each `:initarg` slot option. If there are no `:initarg` slot options, then either the `:initargs` property will not appear or its value will be the empty list.

-   The value of the `:readers` property is a list of the values of each `:reader` and `:accessor` slot option. If there are no `:reader` or `:accessor` slot options, then either the `:readers` property will not appear or its value will be the empty list.

-   The value of the `:writers` property is a list of the values specified by each `:writer` and `:accessor` slot option. The value specified by a `:writer` slot option is just the value of the slot option. The value specified by an `:accessor` slot option is a two element list: the first element is the symbol `setf`, the second element is the value of the slot option. If there are no `:writer` or `:accessor` slot options, then either the `:writers` property will not appear or its value will be the empty list.

-   The value of the `:documentation` property is the value of the `:documentation` slot option. If there is no `:documentation` slot option, then either the `:documentation` property will not appear or its value will be false.

-   All other slot options appear as the values of properties with the same name as the slot option. Note that this includes not only the remaining standard slot options (`:allocation` and `:type`), but also any other options and values appearing in the slot specification. If one of these slot options appears more than once, the value of the property will be a list of the specified values.

-   An implementation is free to add additional properties to the canonicalized slot specification provided these are not symbols accessible in the `common-lisp-user` package, or exported by any package defined in the ANSI Common Lisp standard.

Returning to the correspondence between arguments to the `defclass` macro and the arguments received by the [ensure-class](ensure-class.md) function:

The *default initargs* class option, if it is present in the `defclass` form, becomes the value of the `:direct-default-initargs` keyword argument to [ensure-class](ensure-class.md). Special processing of this value is done to properly capture the lexical scope of the default value forms. This is done by converting each default initarg in the class option into a *canonicalized default initarg*. The resulting list of canonicalized default initargs is the value of the `:direct-default-initargs` keyword argument to [ensure-class](ensure-class.md).

A canonicalized default initarg is a list of three elements. The first element is the name; the second is the actual form itself; and the third is a function of zero arguments which, when called, returns the result of evaluating the default value form in its proper lexical environment.

The *metaclass* class option, if it is present in the `defclass` form, becomes the value of the `:metaclass` keyword argument to [ensure-class](ensure-class.md).

The *documentation* class option, if it is present in the `defclass` form, becomes the value of the `:documentation` keyword argument to [ensure-class](ensure-class.md).

Any other class options become the value of keyword arguments with the same name. The value of the keyword argument is the tail of the class option. An error is signaled if any class option appears more than once in the `defclass` form.

In the call to [ensure-class](ensure-class.md), every element of its arguments appears in the same left-to-right order as the corresponding element of the `defclass` form, except that the order of the properties of canonicalized slot specifications is unspecified. The values of properties in canonicalized slot specifications do follow this ordering requirement. Other ordering relationships in the keyword arguments to [ensure-class](ensure-class.md) are unspecified.

The result of the call to [ensure-class](ensure-class.md) is returned as the result of evaluating or executing the `defclass` form.
