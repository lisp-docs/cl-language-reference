**slot-makunbound** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> *instance slot-name → instance* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> – instance. 



*Slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> restores a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to the unbound state. 



**Exceptional Situations:** 



If no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <ClLinks  term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-makunbound) 



(Any values returned by <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> in this case are ignored by <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>.) 



The specific behavior depends on <ClLinks  term={"instance"}><i>instance</i></ClLinks>’s <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has any other <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> and <ClLinks  term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



