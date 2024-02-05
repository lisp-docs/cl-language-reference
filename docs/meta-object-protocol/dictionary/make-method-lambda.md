make-method-lambda
==================

*Generic Function* **MAKE-METHOD-LAMBDA**

**Syntax:**

**make-method-lambda** *generic-function* *method* *lambda-expression* *environment* => *resulting-lambda-expression*, *initargs*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method* -- A (possibly uninitialized) method metaobject.

*lambda-expression* -- A lambda expression.

*environment* -- An[environment object](http://www.lispworks.com/documentation/HyperSpec/Body/03_aad.htm).

*resulting-lambda-expression* -- A lambda expression.

*initargs* -- A list of initialization arguments and values.

**Description:**

This generic function is called to produce a lambda expression which can itself be used to produce a method function for a method and generic function with the specified classes. The generic function and method the method function will be used with are not required to be the given ones. Moreover, the method metaobject may be uninitialized.

Either the function [compile](http://www.lispworks.com/documentation/HyperSpec/Body/f_cmp.htm#compile), the special form [function](http://www.lispworks.com/documentation/HyperSpec/Body/s_fn.htm) or the function [coerce](http://www.lispworks.com/documentation/HyperSpec/Body/f_coerce.htm#coerce) must be used to convert the lambda expression to a method function. The method function itself can be applied to arguments with [apply](http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply) or [funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall).

When a method is actually called by an effective method, its first argument will be a list of the arguments to the generic function. Its remaining arguments will be all but the first argument passed to [call-method](http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method). By default, all method functions must accept two arguments: the list of arguments to the generic function and the list of next methods.

For a given generic function and method class, the applicable methods on `make-method-lambda` and [compute-effective-method](/meta-object-protocol/compute-effective-method) must be consistent in the following way: each use of [call-method](http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method) returned by the method on [compute-effective-method](/meta-object-protocol/compute-effective-method) must have the same number of arguments, and the method lambda returned by the method on `make-method-lambda` must accept a corresponding number of arguments.

Note that the system-supplied implementation of [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method) is not required to handle extra arguments to the method function. Users who define additional arguments to the method function must either redefine or forego [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method). (See the example below.)

When the method metaobject is created with [make-instance](/meta-object-protocol/make-instance), the method function must be the value of the `:function` initialization argument. The additional initialization arguments, returned as the second value of this generic function, must also be passed in this call to [make-instance](/meta-object-protocol/make-instance).

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**make-method-lambda** (*generic-function* standard-generic-function) (*method* standard-method) *lambda-expression* *environment*](/meta-object-protocol/make-method-lambda-standard-generic-function-standard-method)
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Example:**

This example shows how to define a kind of method which, from within the body of the method, has access to the actual method metaobject for the method. This simplified code overrides whatever method combination is specified for the generic function, implementing a simple method combination supporting only primary methods, [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method) and [next-method-p](http://www.lispworks.com/documentation/HyperSpec/Body/f_next_m.htm#next-method-p). (In addition, its a simplified version of [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method) which does no error checking.)

Notice that the extra lexical function bindings get wrapped around the body before [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method) is called. In this way, the user's definition of [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method) and [next-method-p](http://www.lispworks.com/documentation/HyperSpec/Body/f_next_m.htm#next-method-p) are sure to override the system's definitions.

    (defclass my-generic-function (standard-generic-function)
         ()
      (:default-initargs :method-class (find-class 'my-method)))

    (defclass my-method (standard-method) ())

    (defmethod make-method-lambda ((gf my-generic-function)
                                   (method my-method)
                                   lambda-expression
                                   environment)
      (declare (ignore environment))
      `(lambda (args next-methods this-method)
         (,(call-next-method gf method
             `(lambda ,(cadr lambda-expression)
                (flet ((this-method () this-method)
                       (call-next-method (&rest cnm-args)
                         (funcall (method-function (car next-methods))
                                  (or cnm-args args)
                                  (cdr next-methods)
                                  (car next-methods)))
                       (next-method-p ()
                         (not (null next-methods))))
                  ,@(cddr lambda-expression)))
              environment)
           args next-methods)))

    (defmethod compute-effective-method ((gf my-generic-function)
                                         method-combination
                                         methods)
      `(call-method ,(car methods) ,(cdr methods) ,(car methods)))
