Funcallable Instances
=====================

### Funcallable Instances

Instances of classes which are themselves instances of [funcallable-standard-class](class-funcallable-standard-class.md) or one of its subclasses are called *funcallable instances*. Funcallable instances can only be created by [allocate-instance (class funcallable-standard-class)](allocate-instance-funcallable-standard-class.md).

Like standard instances, funcallable instances have slots with the normal behavior. They differ from standard instances in that they can be used as functions as well; that is, they can be passed to [funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall) and [apply](http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply), and they can be stored as the definition of a function name. Associated with each funcallable instance is the function which it runs when it is called. This function can be changed with [set-funcallable-instance-function](set-funcallable-instance-function.md)

#### Example

The following simple example shows the use of funcallable instances to create a simple, [defstruct](http://www.lispworks.com/documentation/HyperSpec/Body/m_defstr.htm#defstruct)-like facility. (Funcallable instances are useful when a program needs to construct and maintain a set of functions and information about those functions. They make it possible to maintain both as the same object rather than two separate objects linked, for example, by hash tables.)

    (defclass constructor ()
         ((name :initarg :name :accessor constructor-name)
          (fields :initarg :fields :accessor constructor-fields))
      (:metaclass funcallable-standard-class))

    (defmethod initialize-instance :after ((c constructor) &key)
      (with-slots (name fields) c
        (set-funcallable-instance-function
          c
          #'(lambda ()
              (let ((new (make-array (1+ (length fields)))))
                (setf (aref new 0) name)
                new)))))

    (setq c1 (make-instance 'constructor
                            :name 'position :fields '(x y)))
    #<CONSTRUCTOR 262437>

    (setq p1 (funcall c1))
    #<ARRAY 3 263674>
