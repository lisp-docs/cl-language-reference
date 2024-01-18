Initialization of Class Metaobjects
===================================

### Initialization of Class Metaobjects

A class metaobject can be created by calling [make-instance](make-instance.md). The initialization arguments establish the definition of the class. A class metaobject can be redefined by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). Some classes of class metaobject do not support redefinition; in these cases, [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) signals an error.

Initialization of a class metaobject must be done by calling [make-instance](make-instance.md) and allowing it to call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance). Reinitialization of a class metaobject must be done by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). Portable programs must not call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) directly to initialize a class metaobject. Portable programs must not call [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) directly to initialize or reinitialize a class metaobject. Portable programs must not call [change-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_chg_cl.htm#change-class) to change the class of any class metaobject or to turn a non-class object into a class metaobject.

Since metaobject classes may not be redefined, no behavior is specified for the result of calls to [update-instance-for-redefined-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_upda_1.htm#update-instance-for-redefined-class) on class metaobjects. Since the class of class metaobjects may not be changed, no behavior is specified for the result of calls to [update-instance-for-different-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_update.htm#update-instance-for-different-class) on class metaobjects.

During initialization or reinitialization, each initialization argument is checked for errors and then associated with the class metaobject. The value can then be accessed by calling the appropriate accessor as shown in the table below. (FIXME:insert anchor)

This section begins with a description of the error checking and processing of each initialization argument. This is followed by a table showing the generic functions that can be used to access the stored initialization arguments. Initialization behavior specific to the different specified class metaobject classes comes next. The section ends with a set of restrictions on portable methods affecting class metaobject initialization and reinitialization.

In these descriptions, the phrase ``this argument defaults to *value*'' means that when that initialization argument is not supplied, initialization or reinitialization is performed as if *value* had been supplied. For some initialization arguments this could be done by the use of default initialization arguments, but whether it is done this way is not specified. Implementations are free to define default initialization arguments for specified class metaobject classes. Portable programs are free to define default initialization arguments for portable subclasses of the class [class](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm#class).

Unless there is a specific note to the contrary, then during reinitialization, if an initialization argument is not supplied, the previously stored value is left unchanged.

-   The `:direct-default-initargs` argument is a list of canonicalized default initialization arguments.

    An error is signaled if this value is not a proper list, or if any element of the list is not a canonicalized default initialization argument.

    If the class metaobject is being initialized, this argument defaults to the empty list.

-   The `:direct-slots` argument is a list of canonicalized slot specifications.

    An error is signaled if this value is not a proper list or if any element of the list is not a canonicalized slot specification.

    After error checking, this value is converted to a list of direct slot definition metaobjects before it is associated with the class metaobject. Conversion of each canonicalized slot specification to a direct slot definition metaobject is a two-step process. First, the generic function [direct-slot-definition-class](direct-slot-definition-class.md) is called with the class metaobject and the canonicalized slot specification to determine the class of the new direct slot definition metaobject; this permits both the class metaobject and the canonicalized slot specification to control the resulting direct slot definition metaobject class. Second, [make-instance](make-instance.md) is applied to the direct slot definition metaobject class and the canonicalized slot specification. This conversion could be implemented as shown in the following code:

        (defun convert-to-direct-slot-definition (class canonicalized-slot)
          (apply #'make-instance
                 (apply #'direct-slot-definition-class
                        class canonicalized-slot)
                 canonicalized-slot))

    If the class metaobject is being initialized, this argument defaults to the empty list.

    Once the direct slot definition metaobjects have been created, the specified reader and writer methods are created. The generic functions [reader-method-class](reader-method-class.md) and [writer-method-class](writer-method-class.md) are called to determine the classes of the method metaobjects created.

-   The `:direct-superclasses` argument is a list of class metaobjects. Classes which do not support multiple inheritance signal an error if the list contains more than one element.

    An error is signaled if this value is not a proper list or if [validate-superclass](validate-superclass.md) applied to *class* and any element of this list returns false.

    When the class metaobject is being initialized, and this argument is either not supplied or is the empty list, this argument defaults as follows: if the class is an instance of [standard-class](class-standard-class.md) or one of its subclasses the default value is a list of the class [standard-object](http://www.lispworks.com/documentation/HyperSpec/Body/t_std_ob.htm#standard-object); if the class is an instance of [funcallable-standard-class](class-funcallable-standard-class.md) or one of its subclasses the default value is list of the class [funcallable-standard-object](class-funcallable-standard-object.md).

    After any defaulting of the value, the generic function [add-direct-subclass](add-direct-subclass.md) is called once for each element of the list.

    When the class metaobject is being reinitialized and this argument is supplied, the generic function [remove-direct-subclass](remove-direct-subclass.md) is called once for each class metaobject in the previously stored value but not in the new value; the generic function [add-direct-subclass](add-direct-subclass.md) is called once for each class metaobject in the new value but not in the previously stored value.

-   The `:documentation` argument is a string or `nil`.

    An error is signaled if this value is not a string or `nil`.

    If the class metaobject is being initialized, this argument defaults to `nil`.

-   The `:name` argument is an object.

    If the class is being initialized, this argument defaults to `nil`.

After the processing and defaulting of initialization arguments described above, the value of each initialization argument is associated with the class metaobject. These values can then be accessed by calling the corresponding generic function. The correspondences are as follows:

  Initialization Argument        Generic Function
  ------------------------------ ---------------------------------------------------------------------------------------------------
  **:direct-default-initargs**   [class-direct-default-initargs](class-direct-default-initargs.md)
  **:direct-slots**              [class-direct-slots](class-direct-slots.md)
  **:direct-superclasses**       [class-direct-superclasses](class-direct-superclasses.md)
  **:documentation**             [documentation](http://www.lispworks.com/documentation/HyperSpec/Body/f_docume.htm#documentation)
  **:name**                      [class-name](class-name.md)

Initialization arguments and accessors for class metaobjects.

Instances of the class [standard-class](class-standard-class.md) support multiple inheritance and reinitialization. Instances of the class [funcallable-standard-class](class-funcallable-standard-class.md) support multiple inheritance and reinitialization. For forward referenced classes, all of the initialization arguments default to `nil`.

Since built-in classes cannot be created or reinitialized by the user, an error is signaled if [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) or [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) are called to initialize or reinitialize a derived instance of the class [built-in-class](class-built-in-class.md).

Methods
-------

It is not specified which methods provide the initialization and reinitialization behavior described above. Instead, the information needed to allow portable programs to specialize this behavior is presented as a set of restrictions on the methods a portable program can define. The model is that portable initialization methods have access to the class metaobject when either all or none of the specified initialization has taken effect.

These restrictions govern the methods that a portable program can define on the generic functions [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance), [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance), and [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize). These restrictions apply only to methods on these generic functions for which the first specializer is a subclass of the class [class](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm#class). Other portable methods on these generic functions are not affected by these restrictions.

-   Portable programs must not define methods on [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize).

-   For [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) and [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance):

    -   Portable programs must not define primary methods.

    -   Portable programs may define around-methods, but these must be extending, not overriding methods.

    -   Portable before-methods must assume that when they are run, none of the initialization behavior described above has been completed.

    -   Portable after-methods must assume that when they are run, all of the initialization behavior described above has been completed.

The results are undefined if any of these restrictions are violated.

Comments and remarks
--------------------

This section is named *Initialization of Class Metaobjects* and appears in Chapter 6 (Generic functions and methods) of the original text. There is [a section with the same name in Chapter 5 (Concepts) of the original text.](initialization-of-class-metaobjects.md) When sections are referred to in the text, it is not specified which one.
