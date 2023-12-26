**slot-boundp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> *instance slot-name → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name* in <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is bound; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Exceptional Situations:** 



If no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the *name slot-name* exists in the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-boundp) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked and returns a value, a <GlossaryTerm styled={true} term={"boolean equivalent"}><i>boolean equivalent</i></GlossaryTerm> to its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is returned by <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>.) 







 



 



The specific behavior depends on <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>’s <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> has any other <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm  term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> allows for writing <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> on <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> in order to initialize only those <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that have not already been bound. 



Although no <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> slot-boundp-using-class described in the *Metaobject Protocol*. 



