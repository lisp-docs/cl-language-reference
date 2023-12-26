**slot-exists-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> *object slot-name → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> has a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name*. 



**Affected By:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



