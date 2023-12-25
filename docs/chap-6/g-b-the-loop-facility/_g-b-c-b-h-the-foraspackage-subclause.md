 



In the *for-as-package* subclause the for or as construct iterates over the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. In this syntax, a compound preposition is used to designate access to a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The variable *var* takes on the value of each <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the supplied <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The following *loop keywords* serve as valid prepositions within this syntax: 



being 



The keyword being introduces either the Loop schema symbol, present-symbol, or external-symbol. 



each, the 



The *loop keyword* each follows the *loop keyword* being when symbol, present-symbol, or external-symbol is used. The *loop keyword* the is used with symbols, present-symbols, and external-symbols only for ease of reading. This agreement isn’t required. 



present-symbol, present-symbols 



These Loop schemas iterate over the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to be iterated over is supplied in the same way that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> arguments to <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> are supplied. If the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> for the iteration is not supplied, the *current package* is used. If a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that does not exist is supplied, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



symbol, symbols 



These Loop schemas iterate over <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to be iterated over is supplied in the same way that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> arguments to <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> are supplied. If the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> for the iteration is not supplied, the *current package* is used. If a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that does not exist is supplied, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



external-symbol, external-symbols 



These Loop schemas iterate over the *external symbols* of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to be iterated over is supplied in the same way that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> arguments to <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> are 







 



 



supplied. If the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> for the iteration is not supplied, the *current package* is used. If a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that does not exist is supplied, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



in, of 



These loop prepositions introduce <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



In effect 



being *\{*each *|* the*\} \{<GlossaryTerm styled={true} term={"symbol"}><i>symbol </i></GlossaryTerm>|* symbols *|* present-symbol *|* present-symbols *|* external-symbol *|* external-symbols*\} \{*in *|* of*\}* 



is a compound preposition. 



Iteration stops when there are no more <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to be referenced in the supplied <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 