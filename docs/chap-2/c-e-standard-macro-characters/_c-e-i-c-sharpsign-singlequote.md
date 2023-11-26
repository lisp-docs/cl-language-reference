 

Any *expression* preceded by #’ (*sharpsign* followed by *single-quote*), as in #’*expression*, is treated by the *Lisp reader* as an abbreviation for and parsed identically to the *expression* (function *expression*). See **function**. For example, 

(apply #’+ l) *≡* (apply (function +) l) 

