 

When *printer escaping* is disabled, or the characters under consideration are not already quoted specifically by *single escape* or *multiple escape* syntax, the *readtable case* of the *current readtable* affects the way the *Lisp printer* writes *symbols* in the following ways: 

:upcase 

When the *readtable case* is :upcase, *uppercase characters* are printed in the case specified by **\*print-case\***, and *lowercase characters* are printed in their own case. 



 

 

:downcase 

When the *readtable case* is :downcase, *uppercase characters* are printed in their own case, and *lowercase characters* are printed in the case specified by **\*print-case\***. 

:preserve 

When the *readtable case* is :preserve, all *alphabetic characters* are printed in their own case. 

:invert 

When the *readtable case* is :invert, the case of all *alphabetic characters* in single case symbol names is inverted. Mixed-case symbol names are printed as is. 

The rules for escaping *alphabetic characters* in symbol names are affected by the **readtable-case** if *printer escaping* is enabled. *Alphabetic characters* are escaped as follows: 

:upcase 

When the *readtable case* is :upcase, all *lowercase characters* must be escaped. 

:downcase 

When the *readtable case* is :downcase, all *uppercase characters* must be escaped. 

:preserve 

When the *readtable case* is :preserve, no *alphabetic characters* need be escaped. 

:invert 

When the *readtable case* is :invert, no *alphabetic characters* need be escaped. 

