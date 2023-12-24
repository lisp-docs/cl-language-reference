**initialize-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



<ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> to initialize a newly created <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. The generic function is called with the new <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> and the *defaulted initialization argument list*. 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> initializes the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> of the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> with values according to the *initargs* and the :initform forms of the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>. It does this by calling the generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> (this indicates that all <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> to specify actions to be taken when an instance is initialized. If only *after methods* are defined, they will be run after the system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



