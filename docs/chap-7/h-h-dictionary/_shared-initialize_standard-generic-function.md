**shared-initialize** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> *instance slot-names* &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) *slot-names* &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*slot-names*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



*initargs*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *keyword/value pairs* (of initialization argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>). 



**Description:** 



The generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is used to fill the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, and when an instance is updated to conform to a different <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is called by the system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks>, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 



The generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> takes the following arguments: the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> to be initialized, a specification of a set of *slot-names accessible* in that <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, and any number of *initargs*. The arguments after the first two must form an *initialization argument list*. The system-supplied 







 



 



<ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> 



primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> initializes the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> should be initialized according to their :initform forms if no *initargs* are provided for those <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>. 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> behaves as follows, regardless of whether the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are local or shared: 



*•* If an *initarg* in the *initialization argument list* specifies a value for that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>, that value is stored into the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>, even if a value has already been stored in the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> before the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is run. 



*•* Any <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> that has an :initform form, that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated in the lexical environment of its defining <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and the result is stored into the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. For example, if a *before method* stores a value in the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>, the :initform form will not be used to supply a value for the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The *slots-names* argument specifies the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of slot <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>, which specifies the set of those slot <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>; or it can be the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, which specifies the set of all of the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, or by defining <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The keyword name of each keyword parameter specifier in the *lambda list* of any <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined on <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is declared as a valid *initarg* name for all *classes* for which that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is applicable. 



Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> and storing them into slots before running any <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> methods, rather than by handling them in the primary <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> method. (This optimization might be implemented by having the <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> method copy a prototype instance.) 



Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> when the only <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> that would receive the complete <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>. In this case default initial value 



forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 







 



 



