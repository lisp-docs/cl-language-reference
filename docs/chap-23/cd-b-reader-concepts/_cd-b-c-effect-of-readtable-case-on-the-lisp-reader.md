 The <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> affects the *Lisp reader* in the following ways: :upcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :upcase, unescaped constituent <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are converted to <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks>, as specified in Section 2.2 (Reader Algorithm). 



:downcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :downcase, unescaped constituent <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are converted to <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. 



:preserve 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :preserve, the case of all <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> remains unchanged. 



:invert 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :invert, then if all of the unescaped letters in the extended token are of the same <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>, those (unescaped) letters are converted to the opposite <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>. 



