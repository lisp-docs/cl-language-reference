**slot-makunbound** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> *instance slot-name → instance* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> – instance. 



*Slot-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> restores a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* in an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> to the unbound state. 



**Exceptional Situations:** 



If no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is called as follows: 



(slot-missing (class-of <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-makunbound) 



(Any values returned by <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> in this case are ignored by <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>.) 



The specific behavior depends on <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>’s <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>. An error is always signaled if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>. The consequences are undefined if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has any other <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> and <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> 



**Notes:** 



Although no <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



<ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> 



