 



The :initarg slot option may be specified more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



The following rules specify when initialization arguments may be multiply defined: 



*•* A given initialization argument can be used to initialize more than one <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> if the same initialization argument name appears in more than one :initarg slot option. 



*•* A given initialization argument name can appear in the *lambda list* of more than one initialization <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 







 



 



*•* A given initialization argument name can appear both in an :initarg slot option and in the *lambda list* of an initialization <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



If two or more initialization arguments that initialize the same <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> are given in the arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, the leftmost of these initialization arguments in the *initialization argument list* supplies the value, even if the initialization arguments have different names. 



If two or more different initialization arguments that initialize the same <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> have default values and none is given explicitly in the arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, the initialization argument that appears in a :default-initargs class option in the most specific of the *classes* supplies the value. If a single :default-initargs class option specifies two or more initialization arguments that initialize the same <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and none is given explicitly in the arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, the leftmost in the :default-initargs class option supplies the value, and the values of the remaining default value <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are ignored. 



Initialization arguments given explicitly in the arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> appear to the left of defaulted initialization arguments. Suppose that the classes *C*<sub>1</sub> and *C*<sub>2</sub> supply the values of defaulted initialization arguments for different <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and suppose that *C*<sub>1</sub> is more specific than *C*<sub>2</sub>; then the defaulted initialization argument whose value is supplied by *C*<sub>1</sub> is to the left of 



the defaulted initialization argument whose value is supplied by *C*<sub>2</sub> in the *defaulted initialization argument list*. If a single :default-initargs class option supplies the values of initialization arguments for two different <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, the initialization argument whose value is specified farther to the left in the :default-initargs class option appears farther to the left in the *defaulted initialization argument list*. 



If a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has both an :initform form and an :initarg slot option, and the initialization argument is defaulted using :default-initargs or is supplied to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, the captured :initform form is neither used nor evaluated. 



The following is an example of the above rules: 



(defclass q () ((x :initarg a))) 



(defclass r (q) ((x :initarg b)) 



(:default-initargs a 1 b 2)) 



**Defaulted** 



**Form Initialization Argument List Contents of Slot X** (make-instance ’r) (a 1 b 2) 1 



(make-instance ’r ’a 3) (a 3 b 2) 3 



(make-instance ’r ’b 4) (b 4 a 1) 4 



(make-instance ’r ’a 1 ’a 2) (a 1 a 2 b 2) 1 







 



 



