 



A <ClLinks  term={"cons"}><i>cons</i></ClLinks> that is used as a <ClLinks  term={"form"}><i>form</i></ClLinks> is called a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>. 



If the <ClLinks  term={"car"}><i>car</i></ClLinks> of that <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks  term={"name"}><i>name</i></ClLinks> of an <ClLinks  term={"operator"}><i>operator</i></ClLinks> , and the <ClLinks  term={"form"}><i>form</i></ClLinks> is either a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, depending on the *function binding* of the <ClLinks  term={"operator"}><i>operator</i></ClLinks> in the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. If the <ClLinks  term={"operator"}><i>operator</i></ClLinks> is neither a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm>  







nor a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>, it is assumed to be a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> (even if there is no definition for such a <ClLinks  term={"function"}><i>function</i></ClLinks>). 



If the <ClLinks  term={"car"}><i>car</i></ClLinks> of the <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, then that <ClLinks  term={"car"}><i>car</i></ClLinks> must be a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, in which case the <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



How a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is processed depends on whether it is classified as a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



