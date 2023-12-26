**initialize-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> (<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> to initialize a newly created <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. The generic function is called with the new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> and the *defaulted initialization argument list*. 



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> initializes the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> with values according to the *initargs* and the :initform forms of the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. It does this by calling the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> (this indicates that all <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> to specify actions to be taken when an instance is initialized. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> are defined, they will be run after the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



