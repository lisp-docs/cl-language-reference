 



When <GlossaryTerm styled={true} term={"printer escaping"}><i>printer escaping</i></GlossaryTerm> is disabled, or the characters under consideration are not already quoted specifically by <GlossaryTerm styled={true} term={"single escape"}><i>single escape</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm> syntax, the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> affects the way the *Lisp printer* writes <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the following ways: 



:upcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :upcase, *uppercase characters* are printed in the case specified by <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, and *lowercase characters* are printed in their own case. 







 



 



:downcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :downcase, *uppercase characters* are printed in their own case, and *lowercase characters* are printed in the case specified by <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>. 



:preserve 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :preserve, all *alphabetic characters* are printed in their own case. 



:invert 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :invert, the case of all *alphabetic characters* in single case symbol names is inverted. Mixed-case symbol names are printed as is. 



The rules for escaping *alphabetic characters* in symbol names are affected by the <ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks> if <GlossaryTerm styled={true} term={"printer escaping"}><i>printer escaping</i></GlossaryTerm> is enabled. *Alphabetic characters* are escaped as follows: 



:upcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :upcase, all *lowercase characters* must be escaped. 



:downcase 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :downcase, all *uppercase characters* must be escaped. 



:preserve 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :preserve, no *alphabetic characters* need be escaped. 



:invert 



When the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> is :invert, no *alphabetic characters* need be escaped. 



