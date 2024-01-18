Initialization of Generic Function Metaobjects
==============================================

### Initialization of Generic Function Metaobjects

A generic function metaobject can be created by calling [make-instance](make-instance.md). The initialization arguments establish the definition of the generic function. A generic function metaobject can be redefined by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). Some classes of generic function metaobject do not support redefinition; in these cases, [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) signals an error.

Initialization of a generic function metaobject must be done by calling [make-instance](make-instance.md) and allowing it to call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance). Reinitialization of a generic-function metaobject must be done by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). Portable programs must not call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) directly to initialize a generic function metaobject. Portable programs must not call [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) directly to initialize or reinitialize a generic function metaobject. Portable programs must not call [change-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_chg_cl.htm#change-class) to change the class of any generic function metaobject or to turn a non-generic-function object into a generic function metaobject.

Since metaobject classes may not be redefined, no behavior is specified for the result of calls to [update-instance-for-redefined-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_upda_1.htm#update-instance-for-redefined-class) on generic function metaobjects. Since the class of a generic function metaobject may not be changed, no behavior is specified for the results of calls to [update-instance-for-different-class](http://www.lispworks.com/documentation/HyperSpec/Body/f_update.htm#update-instance-for-different-class) on generic function metaobjects.

During initialization or reinitialization, each initialization argument is checked for errors and then associated with the generic function metaobject. The value can then be accessed by calling the appropriate accessor as shown in the table below. (FIXME:insert anchor).

This section begins with a description of the error checking and processing of each initialization argument. This is followed by a table showing the generic functions that can be used to access the stored initialization arguments. The section ends with a set of restrictions on portable methods affecting generic function metaobject initialization and reinitialization.

In these descriptions, the phrase ``this argument defaults to *value*'' means that when that initialization argument is not supplied, initialization or reinitialization is performed as if *value* had been supplied. For some initialization arguments this could be done by the use of default initialization arguments, but whether it is done this way is not specified. Implementations are free to define default initialization arguments for specified generic function metaobject classes. Portable programs are free to define default initialization arguments for portable subclasses of the class [generic-function](generic-function.md).

Unless there is a specific note to the contrary, then during reinitialization, if an initialization argument is not supplied, the previously stored value is left unchanged.

-   The `:argument-precedence-order` argument is a list of symbols.

    An error is signaled if this argument appears but the `:lambda-list` argument does not appear. An error is signaled if this value is not a proper list or if this value is not a permutation of the symbols from the required arguments part of the `:lambda-list` initialization argument.

    When the generic function is being initialized or reinitialized, and this argument is not supplied, but the `:lambda-list` argument is supplied, this value defaults to the symbols from the required arguments part of the `:lambda-list` argument, in the order they appear in that argument. If neither argument is supplied, neither are initialized (see the description of `:lambda-list`.)

-   The `:declarations` argument is a list of declarations.

    An error is signaled if this value is not a proper list or if each of its elements is not a legal declaration.

    When the generic function is being initialized, and this argument is not supplied, it defaults to the empty list.

-   The `:documentation` argument is a string or `nil`.

    An error is signaled if this value is not a string or `nil`.

    If the generic function is being initialized, this argument defaults to `nil`.

-   The `:lambda-list` argument is a lambda list.

    An error is signaled if this value is not a proper generic function lambda list.

    When the generic function is being initialized, and this argument is not supplied, the generic function's lambda list is not initialized. The lambda list will be initialized later, either when the first method is added to the generic function, or a later reinitialization of the generic function.

-   The `:method-combination` argument is a method combination metaobject.
-   The `:method-class` argument is a class metaobject. (But see the note at the end of this page. [RS])

    An error is signaled if this value is not a subclass of the class [method](method.md).

    When the generic function is being initialized, and this argument is not supplied, it defaults to the class [standard-method](standard-method.md).

-   The `:name` argument is an object.

    If the generic function is being initialized, this argument defaults to `nil`.

After the processing and defaulting of initialization arguments described above, the value of each initialization argument is associated with the generic function metaobject. These values can then be accessed by calling the corresponding generic function. The correspondences are as follows:

  Initialization Argument        Generic Function
  ------------------------------ ---------------------------------------------------------------------------------------------------
  `:argument-precedence-order`   [generic-function-argument-precedence-order](generic-function-argument-precedence-order.md)
  `:declarations`                [generic-function-declarations](generic-function-declarations.md)
  `:documentation`               [documentation](http://www.lispworks.com/documentation/HyperSpec/Body/f_docume.htm#documentation)
  `:lambda-list`                 [generic-function-lambda-list](generic-function-lambda-list.md)
  `:method-combination`          [generic-function-method-combination](generic-function-method-combination.md)
  `:method-class`                [generic-function-method-class](generic-function-method-class.md)
  `:name`                        [generic-function-name](generic-function-name.md)

Methods
-------

It is not specified which methods provide the initialization and reinitialization behavior described above. Instead, the information needed to allow portable programs to specialize this behavior is presented as a set of restrictions on the methods a portable program can define. The model is that portable initialization methods have access to the generic function metaobject when either all or none of the specified initialization has taken effect.

These restrictions govern the methods that a portable program can define on the generic functions [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance), [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance), and [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize). These restrictions apply only to methods on these generic functions for which the first specializer is a subclass of the class [generic-function](generic-function.md). Other portable methods on these generic functions are not affected by these restrictions.

-   Portable programs must not define methods on [shared-initialize](http://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize).
-   For [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) and [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance):
    -   Portable programs must not define primary methods.
    -   Portable programs may define around-methods, but these must be extending, not overriding methods.
    -   Portable before-methods must assume that when they are run, none of the initialization behavior described above has been completed.
    -   Portable after-methods must assume that when they are run, all of the initialization behavior described above has been completed.

The results are undefined if any of these restrictions are violated.

**Note:**

Nowhere in the chain of functions that initialize generic-function metaobjects is any defaulting behavior for method-combination metaobjects defined. One possible solution to this dilemma is to implement that defaulting behavior here, so that if the `:method-combination` keyword argument is not supplied, then it defaults to the `standard` method combination. [RS]
