 



A <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is a *dynamic variable* if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>. 



*•* It occurs textually within a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that creates a *dynamic binding* for a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> of the *same name*, and the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> is not *shadowed* <sub>2</sub> by a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that creates a *lexical binding* of the same *variable name*. 



A *dynamic variable* can be referenced at any time in any <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>; there is no textual limitation on references to *dynamic variables*. At any given time, all *dynamic variables* with a given name refer to exactly one <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, either in the *dynamic environment* or in the *global environment*.  







The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> part of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *dynamic variable* might be empty; in this case, the *dynamic variable* is said to have no <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, or to be <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>. A *dynamic variable* can be made <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks> by using <ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks>. 



The effect of <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> a *dynamic variable* is to create a new <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> to which all references to that *dynamic variable* in any <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> refer for the duration of the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that creates the *dynamic binding*. 



A *dynamic variable* can be referenced outside the *dynamic extent* of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that <ClLinks styled={true} term={"bind"}><i>binds</i></ClLinks> it. Such a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is sometimes called a “global variable” but is still in all respects just a *dynamic variable* whose <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> happens to exist in the *global environment* rather than in some *dynamic environment*. 



A *dynamic variable* is <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks> unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



