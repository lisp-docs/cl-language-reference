 



The generic function <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod make-instance ((class standard-class) &amp;rest initargs) 



... 



(let ((instance (apply #’allocate-instance class initargs))) 



(apply #’initialize-instance instance initargs) 



instance)) 



(defmethod make-instance ((class-name symbol) &amp;rest initargs) 



(apply #’make-instance (find-class class-name) initargs)) 



The elided code in the definition of <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> augments the initargs with any *defaulted initialization arguments* and checks the resulting initialization arguments to determine whether 







 



 



an initialization argument was supplied that neither filled a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> nor supplied an argument to an applicable <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



The generic function <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod initialize-instance ((instance standard-object) &amp;rest initargs) 



(apply #’shared-initialize instance t initargs))) 



These procedures can be customized. 



Customizing at the Programmer Interface level includes using the :initform, :initarg, and :default-initargs options to <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, as well as defining <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks>, and <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. It is also possible to define <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, which would be invoked by the generic functions <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks>, **update-instance-for-redefined-class**, **update-instance-for-different-class**, and <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. The meta-object level supports additional customization. 



Implementations are permitted to make certain optimizations to <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> and <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The description of <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> in Chapter 7 mentions the possible optimizations. 







 



 



