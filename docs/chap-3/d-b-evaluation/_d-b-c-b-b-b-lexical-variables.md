A <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> is a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> that can be referenced only within the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that establishes that <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>; <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. Each time a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> creates a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> of a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, a *fresh binding* is *established*. 



Within the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a `lexical variable name`, uses of that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> are considered to be references to that <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> except where the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is *shadowed* <sub>2</sub> by a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that *establishes* a *fresh binding* for that `variable name`, or by a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that locally <GlossaryTerm  term={"declare"}><i>declares</i></GlossaryTerm> the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> always has a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. There is no <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> that introduces a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> without giving it an initial <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, nor is there any <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> that can make a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> be <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>. 



<GlossaryTerm  term={"binding"}><i>Bindings</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> are found in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



