**slot-unbound** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> *class instance slot-name → \{result\}*\* 



**Method Signatures:** 



<ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>) *instance slot-name* 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> in which an attempt was made to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> the *unbound slot*. 



*slot-name*—the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *unbound slot*. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is called when an unbound <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is read in an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> whose metaclass is <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>. The default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks>. The name slot of the <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks> <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is initialized to the name of the offending variable, and the instance slot of the <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks> <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is initialized to the offending instance. 



The generic function <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is called only indirectly by <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>. 



If <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> returns, only the *primary value* will be used by the caller, and all other values will be ignored. 



**Exceptional Situations:** 



The default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> 







 



 



**Notes:** 



An unbound <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> may occur if no :initform form was specified for the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> value has not been set, or if <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> has been called on the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



