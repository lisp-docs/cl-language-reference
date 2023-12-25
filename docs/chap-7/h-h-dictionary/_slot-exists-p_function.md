**slot-exists-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> *object slot-name → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name*. 



**Affected By:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



