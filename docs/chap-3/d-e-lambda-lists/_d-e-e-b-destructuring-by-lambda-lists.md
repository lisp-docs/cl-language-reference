 



Anywhere in a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> where a parameter name can appear, and where <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> syntax (as described in Section 3.4.1 (Ordinary Lambda Lists)) does not otherwise allow a <ClLinks  term={"list"}><i>list</i></ClLinks>, a <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm> can appear in place of the parameter name. When this is done, then  







the argument that would match the parameter is treated as a (possibly dotted) <ClLinks  term={"list"}><i>list</i></ClLinks>, to be used as an argument list for satisfying the parameters in the embedded <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. This is known as destructuring. 



Destructuring is the process of decomposing a compound <ClLinks  term={"object"}><i>object</i></ClLinks> into its component parts, using an abbreviated, declarative syntax, rather than writing it out by hand using the primitive component-accessing functions. Each component part is bound to a variable. 



A destructuring operation requires an <ClLinks  term={"object"}><i>object</i></ClLinks> to be decomposed, a pattern that specifies what components are to be extracted, and the names of the variables whose values are to be the components. 



