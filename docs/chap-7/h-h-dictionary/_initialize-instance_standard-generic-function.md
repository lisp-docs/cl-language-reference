**initialize-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> <ClLinks  term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



<ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> to initialize a newly created <ClLinks  term={"instance"}><i>instance</i></ClLinks>. The generic function is called with the new <ClLinks  term={"instance"}><i>instance</i></ClLinks> and the *defaulted initialization argument list*. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> on <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> initializes the <ClLinks  term={"slot"}><i>slots</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> with values according to the *initargs* and the :initform forms of the <ClLinks  term={"slot"}><i>slots</i></ClLinks>. It does this by calling the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> (this indicates that all <ClLinks  term={"slot"}><i>slots</i></ClLinks> for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define <ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> to specify actions to be taken when an instance is initialized. If only *after methods* are defined, they will be run after the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. 







 



 



**See Also:** 



<ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



