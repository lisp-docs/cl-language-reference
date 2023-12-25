**reinitialize-instance** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*initargs*—an *initialization argument list*. 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> can be used to change the values of *local slots* of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> according to *initargs*. This *generic function* can be called by users. 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. The <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> then calls the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (which means no <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> should be initialized according to their initforms), and the *initargs* it received. 



**Side Effects:** 



The *generic function* <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> changes the values of *local slots*. 







 



 



**Exceptional Situations:** 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the *lambda list* of any <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined on <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid initialization argument name for all *classes* for which that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable. 



