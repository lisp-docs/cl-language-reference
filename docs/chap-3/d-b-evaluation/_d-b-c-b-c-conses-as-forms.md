 



A <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> that is used as a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>. 



If the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> , and the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is either a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, depending on the *function binding* of the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. If the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is neither a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm>  







nor a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>, it is assumed to be a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> (even if there is no definition for such a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>). 



If the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, then that <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> must be a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, in which case the <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



How a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is processed depends on whether it is classified as a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



