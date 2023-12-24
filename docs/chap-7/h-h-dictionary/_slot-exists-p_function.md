**slot-exists-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks> *object slot-name → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *slot-name*. 



**Affected By:** 



<ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> 



**Notes:** 



Although no <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks> using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



