 



A *lexical variable* is a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that can be referenced only within the *lexical scope* of the <ClLinks  term={"form"}><i>form</i></ClLinks> that establishes that <ClLinks  term={"variable"}><i>variable</i></ClLinks>; *lexical variables* have *lexical scope*. Each time a <ClLinks  term={"form"}><i>form</i></ClLinks> creates a *lexical binding* of a <ClLinks  term={"variable"}><i>variable</i></ClLinks>, a *fresh binding* is *established*. 



Within the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *lexical variable name*, uses of that <ClLinks  term={"name"}><i>name</i></ClLinks> as a <ClLinks  term={"variable"}><i>variable</i></ClLinks> are considered to be references to that <ClLinks  term={"binding"}><i>binding</i></ClLinks> except where the <ClLinks  term={"variable"}><i>variable</i></ClLinks> is *shadowed* <sub>2</sub> by a <ClLinks  term={"form"}><i>form</i></ClLinks> that *establishes* a *fresh binding* for that *variable name*, or by a <ClLinks  term={"form"}><i>form</i></ClLinks> that locally <ClLinks  term={"declare"}><i>declares</i></ClLinks> the <ClLinks  term={"name"}><i>name</i></ClLinks> <ClLinks  term={"special"}><b>special</b></ClLinks>. 



A *lexical variable* always has a <ClLinks  term={"value"}><i>value</i></ClLinks>. There is no <ClLinks  term={"operator"}><i>operator</i></ClLinks> that introduces a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *lexical variable* without giving it an initial <ClLinks  term={"value"}><i>value</i></ClLinks>, nor is there any <ClLinks  term={"operator"}><i>operator</i></ClLinks> that can make a *lexical variable* be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. 



<ClLinks  term={"binding"}><i>Bindings</i></ClLinks> of *lexical variables* are found in the *lexical environment*. 



