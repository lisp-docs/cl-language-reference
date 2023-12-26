**slot-makunbound** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> *instance slot-name → instance* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> – instance. 



*Slot-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> restores a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* in an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to the unbound state. 



**Exceptional Situations:** 



If no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-makunbound) 



(Any values returned by <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> in this case are ignored by <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>.) 



The specific behavior depends on <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>’s <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has any other <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm  term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



