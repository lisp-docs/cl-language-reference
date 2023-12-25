**slot-unbound** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> *class instance slot-name → \{result\}*\* 



**Method Signatures:** 



<ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>) *instance slot-name* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—the <ClLinks  term={"instance"}><i>instance</i></ClLinks> in which an attempt was made to <ClLinks  term={"read"}><i>read</i></ClLinks> the *unbound slot*. 



*slot-name*—the <ClLinks  term={"name"}><i>name</i></ClLinks> of the *unbound slot*. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is called when an unbound <ClLinks  term={"slot"}><i>slot</i></ClLinks> is read in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> whose metaclass is <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>. The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"unbound-slot"}><b>unbound-slot</b></ClLinks>. The name slot of the <ClLinks  term={"unbound-slot"}><b>unbound-slot</b></ClLinks> <ClLinks  term={"condition"}><i>condition</i></ClLinks> is initialized to the name of the offending variable, and the instance slot of the <ClLinks  term={"unbound-slot"}><b>unbound-slot</b></ClLinks> <ClLinks  term={"condition"}><i>condition</i></ClLinks> is initialized to the offending instance. 



The generic function <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is called only indirectly by <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>. 



If <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> returns, only the *primary value* will be used by the caller, and all other values will be ignored. 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> on <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"unbound-slot"}><b>unbound-slot</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> 







 



 



**Notes:** 



An unbound <ClLinks  term={"slot"}><i>slot</i></ClLinks> may occur if no :initform form was specified for the <ClLinks  term={"slot"}><i>slot</i></ClLinks> and the <ClLinks  term={"slot"}><i>slot</i></ClLinks> value has not been set, or if <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> has been called on the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



