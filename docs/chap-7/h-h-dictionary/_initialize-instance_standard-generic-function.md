**initialize-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> <ClLinks  term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> to initialize a newly created <ClLinks  term={"instance"}><i>instance</i></ClLinks>. The generic function is called with the new <ClLinks  term={"instance"}><i>instance</i></ClLinks> and the *defaulted initialization argument list*. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> initializes the <ClLinks  term={"slot"}><i>slots</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> with values according to the *initargs* and the :initform forms of the <ClLinks  term={"slot"}><i>slots</i></ClLinks>. It does this by calling the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> (this indicates that all <ClLinks  term={"slot"}><i>slots</i></ClLinks> for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define <ClLinks  term={"method"}><i>methods</i></ClLinks> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> to specify actions to be taken when an instance is initialized. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> are defined, they will be run after the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



