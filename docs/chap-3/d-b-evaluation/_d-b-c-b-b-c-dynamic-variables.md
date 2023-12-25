 



A <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is a *dynamic variable* if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>. 



*•* It occurs textually within a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that creates a *dynamic binding* for a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> of the *same name*, and the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> is not *shadowed* <sub>2</sub> by a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that creates a *lexical binding* of the same *variable name*. 



A *dynamic variable* can be referenced at any time in any <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>; there is no textual limitation on references to *dynamic variables*. At any given time, all *dynamic variables* with a given name refer to exactly one <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, either in the *dynamic environment* or in the *global environment*.  







The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> part of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *dynamic variable* might be empty; in this case, the *dynamic variable* is said to have no <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, or to be <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>. A *dynamic variable* can be made <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm> by using <DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink>. 



The effect of <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> a *dynamic variable* is to create a new <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> to which all references to that *dynamic variable* in any <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> refer for the duration of the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that creates the *dynamic binding*. 



A *dynamic variable* can be referenced outside the *dynamic extent* of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"bind"}><i>binds</i></GlossaryTerm> it. Such a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is sometimes called a “global variable” but is still in all respects just a *dynamic variable* whose <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> happens to exist in the *global environment* rather than in some *dynamic environment*. 



A *dynamic variable* is <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm> unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



