 The *readtable case* of the *current readtable* affects the *Lisp reader* in the following ways: :upcase 



When the *readtable case* is :upcase, unescaped constituent <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are converted to <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks>, as specified in Section 2.2 (Reader Algorithm). 



:downcase 



When the *readtable case* is :downcase, unescaped constituent <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are converted to <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. 



:preserve 



When the *readtable case* is :preserve, the case of all <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> remains unchanged. 



:invert 



When the *readtable case* is :invert, then if all of the unescaped letters in the extended token are of the same <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>, those (unescaped) letters are converted to the opposite <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>. 



