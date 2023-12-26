**slot-boundp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> *instance slot-name → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *slot-name* in <ClLinks  term={"instance"}><i>instance</i></ClLinks> is bound; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Exceptional Situations:** 



If no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the *name slot-name* exists in the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <ClLinks  term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-boundp) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked and returns a value, a <GlossaryTerm styled={true} term={"boolean equivalent"}><i>boolean equivalent</i></GlossaryTerm> to its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is returned by <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>.) 







 



 



The specific behavior depends on <ClLinks  term={"instance"}><i>instance</i></ClLinks>’s <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are undefined if <ClLinks  term={"instance"}><i>instance</i></ClLinks> has any other <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> and <ClLinks  term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> allows for writing <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> on <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> in order to initialize only those <ClLinks  term={"slot"}><i>slots</i></ClLinks> that have not already been bound. 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-boundp-using-class described in the *Metaobject Protocol*. 



