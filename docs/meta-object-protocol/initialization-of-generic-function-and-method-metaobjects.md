Initialization of generic function and method metaobjects
=========================================================

#### Initialization of generic function and method metaobjects

An example of creating a generic function and a method metaobject, and then adding the method to the generic function is shown below. This example is comparable to the method definition shown in [this figure](fig-defmethod-1.md).

    (let* ((gf (make-instance 'standard-generic-function
                              :lambda-list '(p l &optional visiblyp &key)))
           (method-class (generic-function-method-class gf)))
      (multiple-value-bind (lambda initargs)
           (make-method-lambda
             gf
             (class-prototype method-class)
             '(lambda (p l &optional (visiblyp t) &key color)
                (set-to-origin p)
                (when visiblyp (show-move p 0 color)))
             nil)
        (add-method gf
                    (apply #'make-instance method-class
                           :function (compile nil lambda)
                           :specializers (list (find-class 'position)
                                               (intern-eql-specializer 0))
                           :qualifiers ()
                           :lambda-list '(p l &optional (visiblyp t)
                                              &key color)
                           initargs))))
