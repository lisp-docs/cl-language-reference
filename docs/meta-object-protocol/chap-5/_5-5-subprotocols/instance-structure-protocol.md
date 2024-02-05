Instance Structure Protocol
===========================

### Instance Structure Protocol

The instance structure protocol is responsible for implementing the behavior of the slot access functions like [slot-value](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value) and [(setf slot-value)](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value).

For each CLOS slot access function other than [slot-exists-p](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ex.htm#slot-exists-p), there is a corresponding generic function which actually provides the behavior of the function. When called, the slot access function finds the pertinent effective slot definition metaobject, calls the corresponding generic function and returns its result. The arguments passed on to the generic function include one additional value, the class of the *object* argument, which always immediately precedes the *object* argument.

The correspondences between slot access function and underlying slot access generic function are as follows:

  Slot access function                                                                                    Corresponding slot access generic function
  ------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------
  [slot-boundp](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_bo.htm#slot-boundp)           [slot-boundp-using-class](/meta-object-protocol/slot-boundp-using-class)
  [slot-makunbound](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ma.htm#slot-makunbound)   [slot-makunbound-using-class](/meta-object-protocol/slot-makunbound-using-class)
  [slot-value](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value)             [slot-value-using-class](/meta-object-protocol/slot-value-using-class)
  [(setf slot-value)](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value)      [(setf slot-value-using-class)](/meta-object-protocol/setf-slot-value-using-class)

At the lowest level, the instance structure protocol provides only limited mechanisms for portable programs to control the implementation of instances and to directly access the storage associated with instances without going through the indirection of slot access. This is done to allow portable programs to perform certain commonly requested slot access optimizations.

In particular, portable programs can control the implementation of, and obtain direct access to, slots with allocation `:instance` and type **t**. These are called *directly accessible slots*.

The relevant specified around-method on [compute-slots](/meta-object-protocol/compute-slots) determines the implementation of instances by deciding how each slot in the instance will be stored. For each directly accessible slot, this method allocates a *location* and associates it with the effective slot definition metaobject. The location can be accessed by calling the [slot-definition-location](/meta-object-protocol/slot-definition-location) generic function. Locations are non-negative integers. For a given class, the locations increase consecutively, in the order that the directly accessible slots appear in the list of effective slots. (Note that here, the next paragraph, and the specification of this around-method are the only places where the value returned by [compute-slots](/meta-object-protocol/compute-slots) is described as a list rather than a set.)

Given the location of a directly accessible slot, the value of that slot in an instance can be accessed with the appropriate accessor. For [standard-class](/meta-object-protocol/class-standard-class), this accessor is the function [standard-instance-access](/meta-object-protocol/standard-instance-access). For [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class), this accessor is the function [funcallable-standard-instance-access](/meta-object-protocol/funcallable-standard-instance-access). In each case, the arguments to the accessor are the instance and the slot location, in that order. See the definition of each accessor for additional restrictions on the use of these function.
<!-- /meta-object-protocol/standard-class -->
<!-- /meta-object-protocol/funcallable-standard-class -->

#### Example:

The following example shows the use of this mechanism to implement a new class metaobject class, `ordered-class` and class option `:slot-order`. This option provides control over the allocation of slot locations. In this simple example implementation, the `:slot-order` option is not inherited by subclasses; it controls only instances of the class itself.

    (defclass ordered-class (standard-class)
      ((slot-order :initform ()
                   :initarg :slot-order
                   :reader class-slot-order)))

    (defmethod compute-slots ((class ordered-class))
      (let ((order (class-slot-order class)))
        (sort (copy-list (call-next-method))
              #'(lambda (a b)
                  (< (position (slot-definition-name a) order)
                     (position (slot-definition-name b) order))))))

Following is the source code the user of this extension would write. Note that because the code above doesn't implement inheritance of the `:slot-order` option, the function `distance` must not be called on instances of subclasses of `point`; it can only be called on instances of `point` itself.

    (defclass point ()
         ((x :initform 0)
          (y :initform 0))
      (:metaclass ordered-class)
      (:slot-order x y))

    (defun distance (point)
      (sqrt (/ (+ (expt (standard-instance-access point 0) 2)
                  (expt (standard-instance-access point 1) 2))
               2.0)))

In more realistic uses of this mechanism, the calls to the low-level instance structure accessors would not actually appear textually in the source program, but rather would be generated by a meta-level analysis program run during the process of compiling the source program.
