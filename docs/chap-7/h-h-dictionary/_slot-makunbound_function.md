**slot-makunbound** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> *instance slot-name → instance* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> – instance. 



*Slot-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> restores a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to the unbound state. 



**Exceptional Situations:** 



If no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-makunbound) 



(Any values returned by <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> in this case are ignored by <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>.) 



The specific behavior depends on <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has any other <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



<DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



