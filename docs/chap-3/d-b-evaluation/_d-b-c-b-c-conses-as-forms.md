 



A <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> that is used as a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is called a *compound form*. 



If the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of that *compound form* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> , and the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is either a *special form*, a *macro form*, or a *function form*, depending on the *function binding* of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> in the current *lexical environment*. If the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is neither a *special operator*  







nor a *macro name*, it is assumed to be a *function name* (even if there is no definition for such a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>). 



If the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the *compound form* is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, then that <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> must be a *lambda expression*, in which case the *compound form* is a *lambda form*. 



How a *compound form* is processed depends on whether it is classified as a *special form*, a *macro form*, a *function form*, or a *lambda form*. 



