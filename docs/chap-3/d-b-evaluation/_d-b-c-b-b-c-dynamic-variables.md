A <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. 



*•* It occurs textually within a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that creates a <GlossaryTerm styled={true} term={"dynamic binding"}><i>dynamic binding</i></GlossaryTerm> for a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> of the *same name*, and the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> is not *shadowed* <sub>2</sub> by a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that creates a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> of the same *variable name*. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be referenced at any time in any <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm>; there is no textual limitation on references to <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>. At any given time, all <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> with a given name refer to exactly one <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, either in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> or in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.  







The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> part of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> might be empty; in this case, the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is said to have no <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, or to be <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be made <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm> by using <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>. 



The effect of <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is to create a new <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> to which all references to that <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> in any <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> refer for the duration of the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that creates the <GlossaryTerm styled={true} term={"dynamic binding"}><i>dynamic binding</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be referenced outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that <GlossaryTerm  term={"bind"}><i>binds</i></GlossaryTerm> it. Such a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is sometimes called a “global variable” but is still in all respects just a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> whose <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> happens to exist in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> rather than in some <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm> unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>.

