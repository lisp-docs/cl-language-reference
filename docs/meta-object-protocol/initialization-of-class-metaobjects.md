Initialization of Class Metaobjects
===================================

#### Initialization of Class Metaobjects

Class metaobjects created with [make-instance](/docs/meta-object-protocol/make-instance)\{#make-instance-1\} are usually *anonymous*; that is, they have no proper name. An anonymous class metaobject can be given a proper name using [(setf find-class)](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_c.htm#find-class) and [(setf class-name)](/docs/meta-object-protocol/setf-class-name).

When a class metaobject is created with [make-instance](/docs/meta-object-protocol/make-instance), it is initialized in the usual way. The initialization arguments passed to [make-instance](/docs/meta-object-protocol/make-instance) are use to establish the definition of the class. Each initialization argument is checked for errors and associated with the class metaobject. The initialization arguments correspond roughly to the arguments accepted by the [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) macro, and more closely to the arguments accepted by the [ensure-class](/docs/meta-object-protocol/ensure-class) function.

Some class metaobject classes allow their instances to be redefined. When permissible, this is done by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). This is discussed in the next section.

An example of creating an anonymous class directly using [make-instance](/docs/meta-object-protocol/make-instance) follows:

    (flet ((zero () 0)
           (propellor () *propellor*))
      (make-instance 'standard-class
        :name '(my-class foo)
        :direct-superclasses (list (find-class 'plane)
                                   another-anonymous-class)
        :direct-slots `((:name x
                         :initform 0
                         :initfunction ,#'zero
                         :initargs (:x)
                         :readers (position-x)
                         :writers ((setf position-x)))
                        (:name y
                         :initform 0
                         :initfunction ,#'zero
                         :initargs (:y)
                         :readers (position-y)
                         :writers ((setf position-y))))
        :direct-default-initargs `((:engine *propellor* ,#'propellor))))

##### Comments and remarks

This section is named *Initialization of Class Metaobjects* and appears in Chapter 5 (Concepts) of the original text. There is [a section with the same name in Chapter 6 (Generic functions and methods) of the original text.](/docs/meta-object-protocol/initialization-of-class-metaobjects2) When sections are referred to in the text, it is not specified which one.
