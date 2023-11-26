 The *readtable case* of the *current readtable* affects the *Lisp reader* in the following ways: :upcase 

When the *readtable case* is :upcase, unescaped constituent *characters* are converted to *uppercase*, as specified in Section 2.2 (Reader Algorithm). 

:downcase 

When the *readtable case* is :downcase, unescaped constituent *characters* are converted to *lowercase*. 

:preserve 

When the *readtable case* is :preserve, the case of all *characters* remains unchanged. 

:invert 

When the *readtable case* is :invert, then if all of the unescaped letters in the extended token are of the same *case*, those (unescaped) letters are converted to the opposite *case*. 

