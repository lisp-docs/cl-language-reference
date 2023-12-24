 



When *printer escaping* is disabled, only the characters of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> are output (but the case in which to print characters in the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is controlled by <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>; see Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer)). 



The remainder of this section applies only when *printer escaping* is enabled. 



When printing a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, the printer inserts enough *single escape* and/or *multiple escape* characters (*backslashes* and/or <ClLinks styled={true} term={"vertical-bar"}><i>vertical-bars</i></ClLinks>) so that if <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> were called with the same <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> and with **\*read-base\*** bound to the *current output base*, it would return the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (if it is not *apparently uninterned*) or an *uninterned symbol* with the same *print name* (otherwise). 



For example, if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*print-base\*** were 16 when printing the symbol face, it would have to be printed as \FACE or \Face or |FACE|, because the token face would be read as a hexadecimal number (decimal value 64206) if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*read-base\*** were 16. 



For additional restrictions concerning characters with nonstandard *syntax types* in the *current readtable*, see the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> 



For information about how the *Lisp reader* parses <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, see Section 2.3.4 (Symbols as Tokens) and Section 2.4.8.5 (Sharpsign Colon). 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> might be printed as () when <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and *printer escaping* is enabled. 



 



 



