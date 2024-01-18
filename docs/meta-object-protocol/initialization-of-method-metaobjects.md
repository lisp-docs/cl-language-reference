Initialization of Method Metaobjects
====================================

### Initialization of Method Metaobjects

A method metaobject can be created by calling [make-instance](make-instance.md). The initialization arguments establish the definition of the method. A method metaobject cannot be redefined; calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) signals an error.

Initialization of a method metaobject must be done by calling [make-instance](make-instance.md) and allowing it to call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance). Portable programs must not call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) directly to initialize a method metaoject. Portable programs must not call [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) directly to initialize a method metaobject. Portable programs must not call [change-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_chg_cl.htm#change-class) to change the class of any method metaobject or to turn a non-method object into a method metaobject.

Since metaobject classes may not be redefined, no behavior is specified for the result of calls to [update-instance-for-redefined-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_upda_1.htm#update-instance-for-redefined-class) on method metaobjects. Since the class of a method metaobject cannot be changed, no behavior is specified for the result of calls to [update-instance-for-different-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_update.htm#update-instance-for-different-class) on method metaobjects.

During initialization, each initialization argument is checked for errors and then associated with the method metaobject. The value can then be accessed by calling the appropriate accessor as shown in the table below (FIXME: insert anchor reference).

This section begins with a description of the error checking and processing of each initialization argument. This is followed by a table showing the generic functions that can be used to access the stored initialization arguments. The section ends with a set of restrictions on portable methods affecting method metaobject initialization.

In these descriptions, the phrase ``this argument defaults to *value*'' means that when that initialization argument is not supplied, initialization or reinitialization is performed as if *value* had been supplied. For some initialization arguments this could be done by the use of default initialization arguments, but whether it is done this way is not specified. Implementations are free to define default initialization arguments for specified method metaobject classes. Portable programs are free to define default initialization arguments for portable subclasses of the class [method](http://www.lispworks.com/documentation/HyperSpec/Body/t_method.htm#method).

-   The `:qualifiers` argument is a list of method qualifiers. An error is signaled if this value is not a proper list, or if any element of the list is not a non-null atom. This argument defaults to the empty list.

-   The `:lambda-list` argument is the unspecialized lambda list of the method. An error is signaled if this value is not a proper lambda list. If this value is not supplied, an error is signaled.

-   The `:specializers` argument is a list of the specializer metaobjects for the method. An error is signaled if this value is not a proper list, or if the length of the list differs from the number of required arguments in the `:lambda-list` argument, or if any element of the list is not a specializer metaobject. If this value is not supplied, an error is signaled.

-   The `:function` argument is a method function. It must be compatible with the methods on [compute-effective-method](compute-effective-method.md) defined for this class of method and generic function with which it will be used. That is, it must accept the same number of arguments as all uses of [call-method](call-method.md) that will call it supply. (See [compute-effective-method](compute-effective-method.md) for more information.) An error is signaled if this argument is not supplied.

-   When the method being initialized is an instance of a subclass of `standard-accessor-method`, the `:slot-definition` initialization argument must be provided. Its value is the direct slot definition metaobject which defines this accessor method. An error is signaled if the value is not an instance of a subclass of `direct-slot-definition`.

-   The `:documentation` argument is a string or `nil`. An error is signaled if this value is not a string or `nil`. This argument defaults to `nil`.

After the processing and defaulting of initialization arguments described above, the value of each initialization argument is associated with the method metaobject. These values can then be accessed by calling the corresponding generic function. The correspondences are as follows:

  Initialization Argument   Generic Function
  ------------------------- ---------------------------------------------------------------------------------------------------
  `:qualifiers`             [method-qualifiers](method-qualifiers.md)
  `:lambda-list`            [method-lambda-list](method-lambda-list.md)
  `:specializers`           [method-specializers](method-specializers.md)
  `:function`               [method-function](method-function.md)
  `:slot-definition`        [accessor-method-slot-definition](accessor-method-slot-definition.md)
  `:documentation`          [documentation](http://www.lispworks.com/documentation/HyperSpec/Body/f_docume.htm#documentation)

  : Initialization arguments and accessors for method metaobjects.

Methods
-------

It is not specified which methods provide the initialization behavior described above. Instead, the information needed to allow portable programs to specialize this behavior is presented in as a set of restrictions on the methods a portable program can define. The model is that portable initialization methods have access to the method metaobject when either all or none of the specified initialization has taken effect.

These restrictions govern the methods that a portable program can define on the generic functions [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance), and [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize). These restrictions apply only to methods on these generic functions for which the first specializer is a subclass of the class [method](http://www.lispworks.com/documentation/HyperSpec/Body/t_method.htm#method). Other portable methods on these generic functions are not affected by these restrictions.

-   Portable programs must not define methods on [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) or [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance).

-   For [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance):

    -   Portable programs must not define primary methods.

    -   Portable programs may define around-methods, but these must be extending, not overriding methods.

    -   Portable before-methods must assume that when they are run, none of the initialization behavior described above has been completed.

    -   Portable after-methods must assume that when they are run, all of the initialization behavior described above has been completed.

The results are undefined if any of these restrictions are violated.
