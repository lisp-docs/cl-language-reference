 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The first argument is a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> or the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, and the remaining arguments form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



The initialization of a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> consists of several distinct steps, including the following: combining the explicitly supplied initialization arguments with default values for the unsupplied initialization arguments, checking the validity of the initialization arguments, allocating storage for the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, filling <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> with values, and executing user-supplied <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> that perform additional initialization. Each step of <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> is implemented by a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> to provide a mechanism for customizing that step. In addition, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> is itself a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and thus also can be customized. 



The object system specifies system-supplied primary <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for each step and thus specifies a well-defined standard behavior for the entire initialization process. The standard behavior provides four simple mechanisms for controlling initialization: 



*•* Declaring a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> to be an initialization argument for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. An initialization argument is declared by using the :initarg slot option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. This provides a mechanism for supplying a value for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in a call to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>. 



*•* Supplying a default value form for an initialization argument. Default value forms for initialization arguments are defined by using the :default-initargs class option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. If an initialization argument is not explicitly provided as an argument to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, the default value form is evaluated in the lexical environment of the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form that defined it, and the resulting value is used as the value of the initialization argument. 



*•* Supplying a default initial value form for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. A default initial value form for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is defined by using the :initform slot option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. If no initialization argument associated with that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is given as an argument to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> or is defaulted by :default-initargs, this default initial value form is evaluated in the lexical environment 



of the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form that defined it, and the resulting value is stored in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. The :initform form for a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> may be used when creating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, or when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The :initform form for a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> may be used when defining or re-defining the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*•* Defining <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> and <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The slot-filling behavior described above is implemented by a system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> which invokes <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> implements the parts of initialization shared by these four situations: when making an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, when re-initializing an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, and when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> directly implements the slot-filling behavior described above, and <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> simply invokes <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 







 



 



