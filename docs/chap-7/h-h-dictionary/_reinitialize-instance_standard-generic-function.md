**reinitialize-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> <ClLinks  term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> can be used to change the values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> according to *initargs*. This <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be called by users. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. The <ClLinks  term={"method"}><i>method</i></ClLinks> then calls the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> (which means no <ClLinks  term={"slot"}><i>slots</i></ClLinks> should be initialized according to their initforms), and the *initargs* it received. 



**Side Effects:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> changes the values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm>. 







 



 



**Exceptional Situations:** 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <ClLinks  term={"method"}><i>methods</i></ClLinks> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <ClLinks  term={"method"}><i>method</i></ClLinks> defined on <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid initialization argument name for all *classes* for which that <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable. 



