 The *readtable case* of the *current readtable* affects the *Lisp reader* in the following ways: :upcase 



When the *readtable case* is :upcase, unescaped constituent <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are converted to <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm>, as specified in Section 2.2 (Reader Algorithm). 



:downcase 



When the *readtable case* is :downcase, unescaped constituent <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are converted to <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. 



:preserve 



When the *readtable case* is :preserve, the case of all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> remains unchanged. 



:invert 



When the *readtable case* is :invert, then if all of the unescaped letters in the extended token are of the same <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, those (unescaped) letters are converted to the opposite <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>. 



