 



A *lexical variable* is a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that can be referenced only within the *lexical scope* of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that establishes that <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>; *lexical variables* have *lexical scope*. Each time a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> creates a *lexical binding* of a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, a *fresh binding* is *established*. 



Within the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *lexical variable name*, uses of that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> are considered to be references to that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> except where the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is *shadowed* <sub>2</sub> by a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that *establishes* a *fresh binding* for that *variable name*, or by a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that locally <ClLinks styled={true} term={"declare"}><i>declares</i></ClLinks> the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>. 



A *lexical variable* always has a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. There is no <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that introduces a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *lexical variable* without giving it an initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, nor is there any <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that can make a *lexical variable* be <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>. 



<ClLinks styled={true} term={"binding"}><i>Bindings</i></ClLinks> of *lexical variables* are found in the *lexical environment*. 



