**slot-boundp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks> *instance slot-name → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *slot-name* in <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is bound; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Exceptional Situations:** 



If no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the *name slot-name* exists in the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is called as follows: 



(slot-missing (class-of <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-boundp) 



(If <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is invoked and returns a value, a *boolean equivalent* to its *primary value* is returned by <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>.) 







 



 



The specific behavior depends on <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>’s <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>. An error is always signaled if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>. The consequences are undefined if <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> has any other <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> and <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks> allows for writing *after methods* on <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks> in order to initialize only those <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that have not already been bound. 



Although no <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks> using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> slot-boundp-using-class described in the *Metaobject Protocol*. 



