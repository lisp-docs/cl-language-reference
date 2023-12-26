**shared-initialize** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> *instance slot-names* &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> (<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) *slot-names* &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*slot-names*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



*initargs*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"keyword/value pair"}><i>keyword/value pairs</i></GlossaryTerm> (of initialization argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>). 



**Description:** 



The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is used to fill the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, and when an instance is updated to conform to a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called by the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 



The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> takes the following arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to be initialized, a specification of a set of *slot-names accessible* in that <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, and any number of *initargs*. The arguments after the first two must form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. The system-supplied 







 



 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> 



primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> initializes the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> should be initialized according to their :initform forms if no *initargs* are provided for those <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> behaves as follows, regardless of whether the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are local or shared: 



*•* If an *initarg* in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> specifies a value for that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, that value is stored into the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, even if a value has already been stored in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> before the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is run. 



*•* Any <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> that has an :initform form, that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment of its defining <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and the result is stored into the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. For example, if a <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> stores a value in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, the :initform form will not be used to supply a value for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The *slots-names* argument specifies the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of slot <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm>, which specifies the set of those slot <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm>; or it can be the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, which specifies the set of all of the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> defined on <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable. 



Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> and storing them into slots before running any <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> methods, rather than by handling them in the primary <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> method. (This optimization might be implemented by having the <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> method copy a prototype instance.) 



Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> when the only <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> that would receive the complete <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. In this case default initial value 



forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 







 



 



