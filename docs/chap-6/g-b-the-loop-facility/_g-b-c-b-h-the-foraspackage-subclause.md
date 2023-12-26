 



In the *for-as-package* subclause the for or as construct iterates over the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. In this syntax, a compound preposition is used to designate access to a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The variable *var* takes on the value of each <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the supplied <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The following <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> serve as valid prepositions within this syntax: 



being 



The keyword being introduces either the Loop schema symbol, present-symbol, or external-symbol. 



each, the 



The <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> each follows the <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> being when symbol, present-symbol, or external-symbol is used. The <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> the is used with symbols, present-symbols, and external-symbols only for ease of reading. This agreement isn’t required. 



present-symbol, present-symbols 



These Loop schemas iterate over the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> to be iterated over is supplied in the same way that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> arguments to <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> are supplied. If the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> for the iteration is not supplied, the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> is used. If a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that does not exist is supplied, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



symbol, symbols 



These Loop schemas iterate over <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in a given <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> to be iterated over is supplied in the same way that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> arguments to <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> are supplied. If the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> for the iteration is not supplied, the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> is used. If a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that does not exist is supplied, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



external-symbol, external-symbols 



These Loop schemas iterate over the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> to be iterated over is supplied in the same way that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> arguments to <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> are 







 



 



supplied. If the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> for the iteration is not supplied, the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> is used. If a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that does not exist is supplied, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



in, of 



These loop prepositions introduce <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



In effect 



being *\{*each *|* the*\} \{<ClLinks styled={true} term={"symbol"}><i>symbol </i></ClLinks>|* symbols *|* present-symbol *|* present-symbols *|* external-symbol *|* external-symbols*\} \{*in *|* of*\}* 



is a compound preposition. 



Iteration stops when there are no more <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to be referenced in the supplied <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 