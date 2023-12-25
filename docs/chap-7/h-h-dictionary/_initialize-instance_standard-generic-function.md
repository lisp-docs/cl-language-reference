**initialize-instance** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> to initialize a newly created <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. The generic function is called with the new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> and the *defaulted initialization argument list*. 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> initializes the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> with values according to the *initargs* and the :initform forms of the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. It does this by calling the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> (this indicates that all <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> to specify actions to be taken when an instance is initialized. If only *after methods* are defined, they will be run after the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



