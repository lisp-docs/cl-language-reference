 



A <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> is a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that can be referenced only within the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of the <ClLinks  term={"form"}><i>form</i></ClLinks> that establishes that <ClLinks  term={"variable"}><i>variable</i></ClLinks>; <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. Each time a <ClLinks  term={"form"}><i>form</i></ClLinks> creates a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> of a <ClLinks  term={"variable"}><i>variable</i></ClLinks>, a *fresh binding* is *established*. 



Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *lexical variable name*, uses of that <ClLinks  term={"name"}><i>name</i></ClLinks> as a <ClLinks  term={"variable"}><i>variable</i></ClLinks> are considered to be references to that <ClLinks  term={"binding"}><i>binding</i></ClLinks> except where the <ClLinks  term={"variable"}><i>variable</i></ClLinks> is *shadowed* <sub>2</sub> by a <ClLinks  term={"form"}><i>form</i></ClLinks> that *establishes* a *fresh binding* for that *variable name*, or by a <ClLinks  term={"form"}><i>form</i></ClLinks> that locally <ClLinks  term={"declare"}><i>declares</i></ClLinks> the <ClLinks  term={"name"}><i>name</i></ClLinks> <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> always has a <ClLinks  term={"value"}><i>value</i></ClLinks>. There is no <ClLinks  term={"operator"}><i>operator</i></ClLinks> that introduces a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> without giving it an initial <ClLinks  term={"value"}><i>value</i></ClLinks>, nor is there any <ClLinks  term={"operator"}><i>operator</i></ClLinks> that can make a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. 



<ClLinks  term={"binding"}><i>Bindings</i></ClLinks> of <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> are found in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



