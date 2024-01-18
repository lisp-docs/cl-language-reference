Dependent maintenance protocol
==============================

### Dependent maintenance protocol

It is convenient for portable metaobjects to be able to memoize information about other metaobjects, portable or otherwise. Because class and generic function metaobjects can be reinitialized, and generic function metaobjects can be modified by adding and removing methods, a means must be provided to update this memoized information.

The dependent maintenance protocol supports this by providing a way to register an object which should be notified whenever a class or generic function is modified. An object which has been registered this way is called a *dependent* of the class or generic function metaobject. The dependents of class and generic function metaobjects are maintained with [add-dependent](/docs/meta-object-protocol/add-dependent) and [remove-dependent](/docs/meta-object-protocol/remove-dependent). The dependents of a class or generic function metaobject can be accessed with [map-dependents](/docs/meta-object-protocol/map-dependents). Dependents are notified about a modification by calling [update-dependent](/docs/meta-object-protocol/update-dependent). (See the specification of [update-dependent](/docs/meta-object-protocol/update-dependent) for detailed description of the circumstances under which it is called.)

To prevent conflicts between two portable programs, or between portable programs and the implementation, portable code must not register metaobjects themselves as dependents. Instead, portable programs which need to record a metaobject as a dependent, should encapsulate that metaobject in some other kind of object, and record that object as the dependent. The results are undefined if this restriction is violated.

**Example:**

This example shows a general facility for encapsulating metaobjects before recording them as dependents. The facility defines a basic kind of encapsulating object: an updater. Specializations of the basic class can be defined with appropriate special updating behavior. In this way, information about the updating required is associated with each updater rather than with the metaobject being updated.

Updaters are used to encapsulate any metaobject which requires updating when a given class or generic function is modified. The function record-updater is called to both create an updater and add it to the dependents of the class or generic function. Methods on the generic function [update-dependent](/docs/meta-object-protocol/update-dependent), specialized to the specific class of updater do the appropriate update work.

    (defclass updater ()
         ((dependent :initarg :dependent :reader dependent)))

    (defun record-updater (class dependee dependent &rest initargs)
      (let ((updater (apply #'make-instance class :dependent dependent
                                                  initargs)))
        (add-dependent dependee updater)
        updater))

A `flush-cache-updater` simply flushes the cache of the dependent when it is updated.

    (defclass flush-cache-updater (updater) ())

    (defmethod update-dependent (dependee (updater flush-cache-updater)
                                 &rest args)
      (declare (ignore args))
      (flush-cache (dependent updater)))
