**slot-boundp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> *instance slot-name → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name* in <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is bound; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Exceptional Situations:** 



If no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the *name slot-name* exists in the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-boundp) 



(If <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked and returns a value, a *boolean equivalent* to its *primary value* is returned by <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>.) 







 



 



The specific behavior depends on <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> has any other <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> allows for writing *after methods* on <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> in order to initialize only those <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that have not already been bound. 



Although no <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> slot-boundp-using-class described in the *Metaobject Protocol*. 



