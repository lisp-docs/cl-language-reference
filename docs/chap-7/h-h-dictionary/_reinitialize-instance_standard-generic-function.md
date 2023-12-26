**reinitialize-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> <ClLinks  term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> can be used to change the values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> according to *initargs*. This <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be called by users. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. The <ClLinks  term={"method"}><i>method</i></ClLinks> then calls the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks> (which means no <ClLinks  term={"slot"}><i>slots</i></ClLinks> should be initialized according to their initforms), and the *initargs* it received. 



**Side Effects:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> changes the values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm>. 







 



 



**Exceptional Situations:** 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, or by defining <ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> or <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <ClLinks  term={"method"}><i>method</i></ClLinks> defined on <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> or <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is declared as a valid initialization argument name for all *classes* for which that <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable. 



