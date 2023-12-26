**slot-exists-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> *object slot-name → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"object"}><i>object</i></ClLinks> has a <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *slot-name*. 



**Affected By:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> 



**Notes:** 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



