 



Common Lisp provides a representation of most <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the form of printed text called the printed representation. Functions such as <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> take an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and send the characters of its printed representation to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. The collection of routines that does this is known as the (Common Lisp) printer. 



Reading a printed representation typically produces an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> to the originally printed <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



