 



A *macro form* can be used as a *place*, in which case Common Lisp expands the *macro form* as if by **macroexpand-1** and then uses the *macro expansion* in place of the original *place*. Such *macro expansion* is attempted only after exhausting all other possibilities other than expanding into a call to a function named (setf *reader*). 



