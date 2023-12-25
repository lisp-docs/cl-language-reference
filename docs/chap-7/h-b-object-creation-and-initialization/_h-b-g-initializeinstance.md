 



The *generic function* <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> is called by <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> to initialize a newly created <ClLinks  term={"instance"}><i>instance</i></ClLinks>. It uses *standard method combination*. *Methods* for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> can be defined in order to perform any initialization that cannot be achieved simply by supplying initial values for <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



During initialization, <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> is invoked after the following actions have been taken: 



 



 



*•* The *defaulted initialization argument list* has been computed by combining the supplied *initialization argument list* with any default initialization arguments for the <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*•* The validity of the *defaulted initialization argument list* has been checked. If any of the initialization arguments has not been declared as valid, an error is signaled. 



*•* A new <ClLinks  term={"instance"}><i>instance</i></ClLinks> whose <ClLinks  term={"slot"}><i>slots</i></ClLinks> are unbound has been created. 



The generic function <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> is called with the new <ClLinks  term={"instance"}><i>instance</i></ClLinks> and the defaulted initialization arguments. There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> whose *parameter specializer* is the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. This <ClLinks  term={"method"}><i>method</i></ClLinks> calls the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> to fill in the <ClLinks  term={"slot"}><i>slots</i></ClLinks> according to the initialization arguments and the :initform forms for the <ClLinks  term={"slot"}><i>slots</i></ClLinks>; the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is called with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks>, and the defaulted initialization arguments. 



Note that <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> provides the *defaulted initialization argument list* in its call to <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, so the first step performed by the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> takes into account both the initialization arguments provided in the call to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> and the *defaulted initialization argument list*. 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> can be defined to specify actions to be taken when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is initialized. If only *after methods* for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> are defined, they will be run after the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. 



The object system provides two <ClLinks  term={"function"}><i>functions</i></ClLinks> that are useful in the bodies of <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> methods. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks> returns a *generic boolean* value that indicates whether a specified <ClLinks  term={"slot"}><i>slot</i></ClLinks> has a value; this provides a mechanism for writing *after methods* for <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> that initialize <ClLinks  term={"slot"}><i>slots</i></ClLinks> only if they have not already been initialized. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> causes the <ClLinks  term={"slot"}><i>slot</i></ClLinks> to have no value. 



