 



The generic function <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod make-instance ((class standard-class) &amp;rest initargs) 



... 



(let ((instance (apply #’allocate-instance class initargs))) 



(apply #’initialize-instance instance initargs) 



instance)) 



(defmethod make-instance ((class-name symbol) &amp;rest initargs) 



(apply #’make-instance (find-class class-name) initargs)) 



The elided code in the definition of <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> augments the initargs with any *defaulted initialization arguments* and checks the resulting initialization arguments to determine whether 







 



 



an initialization argument was supplied that neither filled a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> nor supplied an argument to an applicable <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



The generic function <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> behaves as if it were defined as follows, except that certain optimizations are permitted: 



(defmethod initialize-instance ((instance standard-object) &amp;rest initargs) 



(apply #’shared-initialize instance t initargs))) 



These procedures can be customized. 



Customizing at the Programmer Interface level includes using the :initform, :initarg, and :default-initargs options to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, as well as defining <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, and <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. It is also possible to define <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, which would be invoked by the generic functions <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, **update-instance-for-different-class**, and <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. The meta-object level supports additional customization. 



Implementations are permitted to make certain optimizations to <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> and <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The description of <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> in Chapter 7 mentions the possible optimizations. 







 



 



