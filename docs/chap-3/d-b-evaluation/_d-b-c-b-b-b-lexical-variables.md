 



A *lexical variable* is a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that can be referenced only within the *lexical scope* of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that establishes that <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>; *lexical variables* have *lexical scope*. Each time a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> creates a *lexical binding* of a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, a *fresh binding* is *established*. 



Within the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *lexical variable name*, uses of that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> are considered to be references to that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> except where the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is *shadowed* <sub>2</sub> by a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that *establishes* a *fresh binding* for that *variable name*, or by a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that locally <GlossaryTerm styled={true} term={"declare"}><i>declares</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>. 



A *lexical variable* always has a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. There is no <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that introduces a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *lexical variable* without giving it an initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, nor is there any <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that can make a *lexical variable* be <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"binding"}><i>Bindings</i></GlossaryTerm> of *lexical variables* are found in the *lexical environment*. 



