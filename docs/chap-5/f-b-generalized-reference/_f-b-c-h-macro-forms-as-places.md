 



A *macro form* can be used as a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, in which case Common Lisp expands the *macro form* as if by <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> and then uses the *macro expansion* in place of the original <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. Such *macro expansion* is attempted only after exhausting all other possibilities other than expanding into a call to a function named (setf <ClLinks styled={true} term={"reader"}><i>reader</i></ClLinks>). 



