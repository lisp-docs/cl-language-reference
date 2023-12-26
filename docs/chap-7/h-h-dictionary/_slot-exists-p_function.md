**slot-exists-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks> *object slot-name → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"object"}><i>object</i></ClLinks> has a <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *slot-name*. 



**Affected By:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> 



**See Also:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> 



**Notes:** 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



