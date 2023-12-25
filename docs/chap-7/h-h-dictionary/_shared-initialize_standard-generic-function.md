**shared-initialize** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> *instance slot-names* &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> (<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) *slot-names* &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*slot-names*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



*initargs*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *keyword/value pairs* (of initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>). 



**Description:** 



The generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is used to fill the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, and when an instance is updated to conform to a different <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called by the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 



The generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> takes the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to be initialized, a specification of a set of *slot-names accessible* in that <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, and any number of *initargs*. The arguments after the first two must form an *initialization argument list*. The system-supplied 







 



 



<DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> 



primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> initializes the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> should be initialized according to their :initform forms if no *initargs* are provided for those <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> behaves as follows, regardless of whether the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are local or shared: 



*•* If an *initarg* in the *initialization argument list* specifies a value for that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, that value is stored into the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, even if a value has already been stored in the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> before the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is run. 



*•* Any <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that has an :initform form, that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment of its defining <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and the result is stored into the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. For example, if a *before method* stores a value in the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, the :initform form will not be used to supply a value for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The *slots-names* argument specifies the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of slot <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>, which specifies the set of those slot <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>; or it can be the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, which specifies the set of all of the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the *lambda list* of any <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined on <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable. 



Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> and storing them into slots before running any <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> methods, rather than by handling them in the primary <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> method. (This optimization might be implemented by having the <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> method copy a prototype instance.) 



Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> when the only <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> that would receive the complete <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. In this case default initial value 



forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 







 



 



