 

The :initarg slot option may be specified more than once for a given *slot*. 

The following rules specify when initialization arguments may be multiply defined: 

*•* A given initialization argument can be used to initialize more than one *slot* if the same initialization argument name appears in more than one :initarg slot option. 

*•* A given initialization argument name can appear in the *lambda list* of more than one initialization *method*. 



 

 

*•* A given initialization argument name can appear both in an :initarg slot option and in the *lambda list* of an initialization *method*. 

If two or more initialization arguments that initialize the same *slot* are given in the arguments to **make-instance**, the leftmost of these initialization arguments in the *initialization argument list* supplies the value, even if the initialization arguments have different names. 

If two or more different initialization arguments that initialize the same *slot* have default values and none is given explicitly in the arguments to **make-instance**, the initialization argument that appears in a :default-initargs class option in the most specific of the *classes* supplies the value. If a single :default-initargs class option specifies two or more initialization arguments that initialize the same *slot* and none is given explicitly in the arguments to **make-instance**, the leftmost in the :default-initargs class option supplies the value, and the values of the remaining default value *forms* are ignored. 

Initialization arguments given explicitly in the arguments to **make-instance** appear to the left of defaulted initialization arguments. Suppose that the classes *C*&#60;sub&#62;1&#60;/sub&#62; and *C*&#60;sub&#62;2&#60;/sub&#62; supply the values of defaulted initialization arguments for different *slots*, and suppose that *C*&#60;sub&#62;1&#60;/sub&#62; is more specific than *C*&#60;sub&#62;2&#60;/sub&#62;; then the defaulted initialization argument whose value is supplied by *C*&#60;sub&#62;1&#60;/sub&#62; is to the left of 

the defaulted initialization argument whose value is supplied by *C*&#60;sub&#62;2&#60;/sub&#62; in the *defaulted initialization argument list*. If a single :default-initargs class option supplies the values of initialization arguments for two different *slots*, the initialization argument whose value is specified farther to the left in the :default-initargs class option appears farther to the left in the *defaulted initialization argument list*. 

If a *slot* has both an :initform form and an :initarg slot option, and the initialization argument is defaulted using :default-initargs or is supplied to **make-instance**, the captured :initform form is neither used nor evaluated. 

The following is an example of the above rules: 

(defclass q () ((x :initarg a))) 

(defclass r (q) ((x :initarg b)) 

(:default-initargs a 1 b 2)) 

**Defaulted** 

**Form Initialization Argument List Contents of Slot X** (make-instance ’r) (a 1 b 2) 1 

(make-instance ’r ’a 3) (a 3 b 2) 3 

(make-instance ’r ’b 4) (b 4 a 1) 4 

(make-instance ’r ’a 1 ’a 2) (a 1 a 2 b 2) 1 



 

 

