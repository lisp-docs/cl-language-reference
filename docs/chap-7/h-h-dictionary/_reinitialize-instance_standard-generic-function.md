**reinitialize-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*initargs*—an *initialization argument list*. 



**Description:** 



The *generic function* <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> can be used to change the values of *local slots* of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> according to *initargs*. This *generic function* can be called by users. 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. The <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> then calls the generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (which means no <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> should be initialized according to their initforms), and the *initargs* it received. 



**Side Effects:** 



The *generic function* <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> changes the values of *local slots*. 







 



 



**Exceptional Situations:** 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, or by defining <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The keyword name of each keyword parameter specifier in the *lambda list* of any <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined on <ClLinks styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is declared as a valid initialization argument name for all *classes* for which that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is applicable. 



