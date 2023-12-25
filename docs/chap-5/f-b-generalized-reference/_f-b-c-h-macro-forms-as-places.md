 



A *macro form* can be used as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, in which case Common Lisp expands the *macro form* as if by <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> and then uses the *macro expansion* in place of the original <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. Such *macro expansion* is attempted only after exhausting all other possibilities other than expanding into a call to a function named (setf <GlossaryTerm styled={true} term={"reader"}><i>reader</i></GlossaryTerm>). 



