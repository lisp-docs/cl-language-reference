 



The generic function **make-instance** behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod make-instance ((class standard-class) &amp;rest initargs) 



... 



(let ((instance (apply #’allocate-instance class initargs))) 



(apply #’initialize-instance instance initargs) 



instance)) 



(defmethod make-instance ((class-name symbol) &amp;rest initargs) 



(apply #’make-instance (find-class class-name) initargs)) 



The elided code in the definition of **make-instance** augments the initargs with any *defaulted initialization arguments* and checks the resulting initialization arguments to determine whether 







 



 



an initialization argument was supplied that neither filled a *slot* nor supplied an argument to an applicable *method*. 



The generic function **initialize-instance** behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod initialize-instance ((instance standard-object) &amp;rest initargs) 



(apply #’shared-initialize instance t initargs))) 



These procedures can be customized. 



Customizing at the Programmer Interface level includes using the :initform, :initarg, and :default-initargs options to **defclass**, as well as defining *methods* for **make-instance**, **allocate-instance**, and **initialize-instance**. It is also possible to define *methods* for **shared-initialize**, which would be invoked by the generic functions **reinitialize-instance**, **update-instance-for-redefined-class**, **update-instance-for-different-class**, and **initialize-instance**. The meta-object level supports additional customization. 



Implementations are permitted to make certain optimizations to **initialize-instance** and **shared-initialize**. The description of **shared-initialize** in Chapter 7 mentions the possible optimizations. 







 



 



