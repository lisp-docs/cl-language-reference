 



A <ClLinks  term={"variable"}><i>variable</i></ClLinks> is a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> if one of the following conditions hold: 



*•* It is locally declared or globally proclaimed <ClLinks  term={"special"}><b>special</b></ClLinks>. 



*•* It occurs textually within a <ClLinks  term={"form"}><i>form</i></ClLinks> that creates a <GlossaryTerm styled={true} term={"dynamic binding"}><i>dynamic binding</i></GlossaryTerm> for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> of the *same name*, and the <ClLinks  term={"binding"}><i>binding</i></ClLinks> is not *shadowed* <sub>2</sub> by a <ClLinks  term={"form"}><i>form</i></ClLinks> that creates a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> of the same *variable name*. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be referenced at any time in any <ClLinks  term={"program"}><i>program</i></ClLinks>; there is no textual limitation on references to <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>. At any given time, all <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> with a given name refer to exactly one <ClLinks  term={"binding"}><i>binding</i></ClLinks>, either in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> or in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.  







The <ClLinks  term={"value"}><i>value</i></ClLinks> part of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> might be empty; in this case, the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is said to have no <ClLinks  term={"value"}><i>value</i></ClLinks>, or to be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be made <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> by using <ClLinks  term={"makunbound"}><b>makunbound</b></ClLinks>. 



The effect of <ClLinks  term={"binding"}><i>binding</i></ClLinks> a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is to create a new <ClLinks  term={"binding"}><i>binding</i></ClLinks> to which all references to that <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> in any <ClLinks  term={"program"}><i>program</i></ClLinks> refer for the duration of the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> that creates the <GlossaryTerm styled={true} term={"dynamic binding"}><i>dynamic binding</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> can be referenced outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of a <ClLinks  term={"form"}><i>form</i></ClLinks> that <ClLinks  term={"bind"}><i>binds</i></ClLinks> it. Such a <ClLinks  term={"variable"}><i>variable</i></ClLinks> is sometimes called a “global variable” but is still in all respects just a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> whose <ClLinks  term={"binding"}><i>binding</i></ClLinks> happens to exist in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> rather than in some <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> is <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> unless and until explicitly assigned a value, except for those variables whose initial value is defined in this specification or by an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



