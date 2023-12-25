 



A <ClLinks  term={"variable"}><i>variable</i></ClLinks> is a *dynamic variable* if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed <ClLinks  term={"special"}><b>special</b></ClLinks>. 



*•* It occurs textually within a <ClLinks  term={"form"}><i>form</i></ClLinks> that creates a *dynamic binding* for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> of the *same name*, and the <ClLinks  term={"binding"}><i>binding</i></ClLinks> is not *shadowed* <sub>2</sub> by a <ClLinks  term={"form"}><i>form</i></ClLinks> that creates a *lexical binding* of the same *variable name*. 



A *dynamic variable* can be referenced at any time in any <ClLinks  term={"program"}><i>program</i></ClLinks>; there is no textual limitation on references to *dynamic variables*. At any given time, all *dynamic variables* with a given name refer to exactly one <ClLinks  term={"binding"}><i>binding</i></ClLinks>, either in the *dynamic environment* or in the *global environment*.  







The <ClLinks  term={"value"}><i>value</i></ClLinks> part of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *dynamic variable* might be empty; in this case, the *dynamic variable* is said to have no <ClLinks  term={"value"}><i>value</i></ClLinks>, or to be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. A *dynamic variable* can be made <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> by using <ClLinks  term={"makunbound"}><b>makunbound</b></ClLinks>. 



The effect of <ClLinks  term={"binding"}><i>binding</i></ClLinks> a *dynamic variable* is to create a new <ClLinks  term={"binding"}><i>binding</i></ClLinks> to which all references to that *dynamic variable* in any <ClLinks  term={"program"}><i>program</i></ClLinks> refer for the duration of the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> that creates the *dynamic binding*. 



A *dynamic variable* can be referenced outside the *dynamic extent* of a <ClLinks  term={"form"}><i>form</i></ClLinks> that <ClLinks  term={"bind"}><i>binds</i></ClLinks> it. Such a <ClLinks  term={"variable"}><i>variable</i></ClLinks> is sometimes called a “global variable” but is still in all respects just a *dynamic variable* whose <ClLinks  term={"binding"}><i>binding</i></ClLinks> happens to exist in the *global environment* rather than in some *dynamic environment*. 



A *dynamic variable* is <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



