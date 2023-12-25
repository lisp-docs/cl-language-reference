**slot-makunbound** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> *instance slot-name → instance* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> – instance. 



*Slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> restores a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to the unbound state. 



**Exceptional Situations:** 



If no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> is called as follows: 



(slot-missing (class-of <ClLinks  term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-makunbound) 



(Any values returned by <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> in this case are ignored by <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>.) 



The specific behavior depends on <ClLinks  term={"instance"}><i>instance</i></ClLinks>’s <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>. An error is always signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks>. The consequences are undefined if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has any other <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> and <ClLinks  term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> 



**Notes:** 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



<ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> 



