**shared-initialize** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> *instance slot-names* &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) *slot-names* &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-names*—a <ClLinks  term={"list"}><i>list</i></ClLinks> or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



*initargs*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"keyword/value pair"}><i>keyword/value pairs</i></GlossaryTerm> (of initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks>). 



**Description:** 



The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is used to fill the <ClLinks  term={"slot"}><i>slots</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>, and when an instance is updated to conform to a different <ClLinks  term={"class"}><i>class</i></ClLinks>. The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called by the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 



The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> takes the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks> to be initialized, a specification of a set of *slot-names accessible* in that <ClLinks  term={"instance"}><i>instance</i></ClLinks>, and any number of *initargs*. The arguments after the first two must form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. The system-supplied 







 



 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> 



primary <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> initializes the <ClLinks  term={"slot"}><i>slots</i></ClLinks> with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which <ClLinks  term={"slot"}><i>slots</i></ClLinks> should be initialized according to their :initform forms if no *initargs* are provided for those <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> behaves as follows, regardless of whether the <ClLinks  term={"slot"}><i>slots</i></ClLinks> are local or shared: 



*•* If an *initarg* in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> specifies a value for that <ClLinks  term={"slot"}><i>slot</i></ClLinks>, that value is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks>, even if a value has already been stored in the <ClLinks  term={"slot"}><i>slot</i></ClLinks> before the <ClLinks  term={"method"}><i>method</i></ClLinks> is run. 



*•* Any <ClLinks  term={"slot"}><i>slots</i></ClLinks> indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such <ClLinks  term={"slot"}><i>slot</i></ClLinks> that has an :initform form, that <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in the lexical environment of its defining <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> and the result is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. For example, if a <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> stores a value in the <ClLinks  term={"slot"}><i>slot</i></ClLinks>, the :initform form will not be used to supply a value for the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The *slots-names* argument specifies the <ClLinks  term={"slot"}><i>slots</i></ClLinks> that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a <ClLinks  term={"list"}><i>list</i></ClLinks> of slot <ClLinks  term={"name"}><i>names</i></ClLinks>, which specifies the set of those slot <ClLinks  term={"name"}><i>names</i></ClLinks>; or it can be the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, which specifies the set of all of the <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <ClLinks  term={"method"}><i>methods</i></ClLinks> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <ClLinks  term={"method"}><i>method</i></ClLinks> defined on <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable. 



Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these <ClLinks  term={"form"}><i>forms</i></ClLinks> and storing them into slots before running any <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> methods, rather than by handling them in the primary <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> method. (This optimization might be implemented by having the <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> method copy a prototype instance.) 



Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument <ClLinks  term={"list"}><i>list</i></ClLinks> when the only <ClLinks  term={"method"}><i>method</i></ClLinks> that would receive the complete <ClLinks  term={"list"}><i>list</i></ClLinks> is the <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. In this case default initial value 



forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 







 



 



