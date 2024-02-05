<!-- ### Initialization of Slot Definition Metaobjects -->

A slot definition metaobject can be created by calling [make-instance](make-instance.html). The initialization arguments establish the definition of the slot definition. A slot definition metaobject cannot be redefined; calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance) signals an error.

Initialization of a slot definition metaobject must be done by calling [make-instance](make-instance.html) and allowing it to call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) Portable programs must not call [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance) directly to initialize a slot definition metaobject. Portable programs must not call [shared-initialize](https://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) directly to initialize a slot definition metaobject. Portable programs must not call [change-class](change-class.html) to change the class of any slot definition metaobject or to turn a non-slot-definition object into a slot definition metaobject.

Since metaobject classes may not be redefined, no behavior is specified for the result of calls to [update-instance-for-redefined-class](update-instance-for-redefined-class.html) on slot definition metaobjects. Since the class of a slot definition metaobject cannot be changed, no behavior is specified for the result of calls to [update-instance-for-different-class](update-instance-for-different-class) on slot definition metaobjects.

During initialization, each initialization argument is checked for errors and then associated with the slot definition metaobject. The value can then be accessed by calling the appropriate accessor as shown in [the table below](#slotd-mo-initargs).

This section begins with a description of the error checking and processing of each initialization argument. This is followed by a table showing the generic functions that can be used to access the stored initialization arguments.

In these descriptions, the phrase \`\`this argument defaults to _value_'' means that when that initialization argument is not supplied, initialization is performed as if _value_ had been supplied. For some initialization arguments this could be done by the use of default initialization arguments, but whether it is done this way is not specified. Implementations are free to define default initialization arguments for specified slot definition metaobject classes. Portable programs are free to define default initialization arguments for portable subclasses of the class [slot-definition](slot-definition.html).

* The :name argument is a slot name. An error is signaled if this argument is not a symbol which can be used as a variable name. An error is signaled if this argument is not supplied.
* The :initform argument is a form. The :initform argument defaults to **nil**. An error is signaled if the :initform argument is supplied, but the :initfunction argument is not supplied.
* The :initfunction argument is a function of zero arguments which, when called, evaluates the :initform in the appropriate lexical environment. The :initfunction argument defaults to false. An error is signaled if the :initfunction argument is supplied, but the :initform argument is not supplied.
* The :type argument is a type specifier name. An error is signaled otherwise. The :type argument defaults to the symbol **t**.
* The :allocation argument is a symbol. An error is signaled otherwise. The :allocation argument defaults to the symbol :instance.
* The :initargs argument is a list of symbols. An error is signaled if this argument is not a proper list, or if any element of this list is not a symbol. The :initargs argument defaults to the empty list.
* The :readers argument is a list of function names. An error is signaled if it is not a proper list, or if any element is not a valid function name. It defaults to the empty list. An error is signaled if this argument is supplied and the metaobject is not a direct slot definition.
* The :writers argument is a list of function names. An error is signaled if it is not a proper list, or if any element is not a valid function name. It defaults to the empty list. An error is signaled if this argument is supplied and the metaobject is not a direct slot definition.
* The :documentation argument is a string or **nil**. An error is signaled otherwise. The :documentation argument defaults to **nil**.

After the processing and defaulting of initialization arguments described above, the value of each initialization argument is associated with the slot definition metaobject. These values can then be accessed by calling the corresponding generic function. The correspondences are as follows:

Initialization arguments and accessors for slot definition metaobjects.

Initialization Argument

Generic Function

:name

[slot-definition-name](slot-definition-name.html)

:initform

[slot-definition-initform](slot-definition-initform.html)

:initfunction

[slot-definition-initfunction](slot-definition-initfunction.html)

:type

[slot-definition-type](slot-definition-type.html)

:allocation

[slot-definition-allocation](slot-definition-allocation.html)

:initargs

[slot-definition-initargs](slot-definition-initargs.html)

:readers

[slot-definition-readers](slot-definition-readers.html)

:writers

[slot-definition-writers](slot-definition-writers.html)

:documentation

[documentation](documentation.html)

It is not specified which methods provide the initialization and reinitialization behavior described above. Instead, the information needed to allow portable programs to specialize this behavior is presented as a set of restrictions on the methods a portable program can define. The model is that portable initialization methods have access to the slot definition metaobject when either all or none of the specified initialization has taken effect.

These restrictions govern the methods that a portable program can define on the generic functions [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance), [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance), and [shared-initialize](https://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize). These restrictions apply only to methods on these generic functions for which the first specializer is a subclass of the class [slot-definition](slot-definition.html). Other portable methods on these generic functions are not affected by these restrictions.

* Portable programs must not define methods on [shared-initialize](https://www.lispworks.com/documentation/HyperSpec/Body/f_shared.htm#shared-initialize) or [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance).
* For [initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm#initialize-instance):
  * Portable programs must not define primary methods.
  * Portable programs may define around-methods, but these must be extending, not overriding methods.
  * Portable before-methods must assume that when they are run, none of the initialization behavior described above has been completed.
  * Portable after-methods must assume that when they are run, all of the initialization behavior described above has been completed.

The results are undefined if any of these restrictions are violated.
