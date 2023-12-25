 



When *printer escaping* is disabled, only the characters of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> are output (but the case in which to print characters in the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is controlled by <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>; see Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer)). 



The remainder of this section applies only when *printer escaping* is enabled. 



When printing a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, the printer inserts enough *single escape* and/or *multiple escape* characters (*backslashes* and/or <GlossaryTerm styled={true} term={"vertical-bar"}><i>vertical-bars</i></GlossaryTerm>) so that if <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> were called with the same <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> and with **\*read-base\*** bound to the *current output base*, it would return the same <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (if it is not *apparently uninterned*) or an *uninterned symbol* with the same *print name* (otherwise). 



For example, if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*print-base\*** were 16 when printing the symbol face, it would have to be printed as \FACE or \Face or |FACE|, because the token face would be read as a hexadecimal number (decimal value 64206) if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*read-base\*** were 16. 



For additional restrictions concerning characters with nonstandard *syntax types* in the *current readtable*, see the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



For information about how the *Lisp reader* parses <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, see Section 2.3.4 (Symbols as Tokens) and Section 2.4.8.5 (Sharpsign Colon). 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> might be printed as () when <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and *printer escaping* is enabled. 



 



 



