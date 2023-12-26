 



<GlossaryTerm styled={true} term={"loop keyword"}><i>Loop keywords</i></GlossaryTerm> are not true <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks><sub>1</sub>; they are special <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, recognized by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> rather than <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> identity, that are meaningful only to the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> facility. A <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> but is recognized by its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (not its identity), regardless of the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in which it is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>. 



In general, <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> are not <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, except in the coincidental situation that a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with the same name as a <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> was needed for some other purpose in Common Lisp. For example, there is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is "UNLESS" but not one whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is "UNTIL". 



If no <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> are supplied in a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, the Loop Facility executes the loop body repeatedly; see Section 6.1.1.1.1 (Simple Loop). 







 



 



