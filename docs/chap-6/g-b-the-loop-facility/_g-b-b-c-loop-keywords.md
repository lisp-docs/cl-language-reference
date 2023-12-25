 



*Loop keywords* are not true <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm><sub>1</sub>; they are special <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, recognized by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> rather than <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> identity, that are meaningful only to the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> facility. A *loop keyword* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> but is recognized by its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (not its identity), regardless of the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in which it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>. 



In general, *loop keywords* are not *external symbols* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, except in the coincidental situation that a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with the same name as a *loop keyword* was needed for some other purpose in Common Lisp. For example, there is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is "UNLESS" but not one whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is "UNTIL". 



If no *loop keywords* are supplied in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, the Loop Facility executes the loop body repeatedly; see Section 6.1.1.1.1 (Simple Loop). 







 



 



