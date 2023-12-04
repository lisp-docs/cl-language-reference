 



**Syntax:** #\⟨x⟩ 



When the *token x* is a single *character* long, this parses as the literal *character char*. *Uppercase* and *lowercase* letters are distinguished after #\; #\A and #\a denote different *character objects*. Any single *character* works after #\, even those that are normally special to **read**, such as *left-parenthesis* and *right-parenthesis*. 



In the single *character* case, the *x* must be followed by a non-constituent *character* . After #\ is read, the reader backs up over the *slash* and then reads a *token*, treating the initial *slash* as a *single escape character* (whether it really is or not in the *current readtable*). 



When the *token x* is more than one *character* long, the *x* must have the syntax of a *symbol* with no embedded *package markers*. In this case, the *sharpsign backslash* notation parses as the *character* whose *name* is (string-upcase *x*); see Section 13.1.7 (Character Names). 



For information about how the *Lisp printer* prints *character objects*, see Section 22.1.3.2 (Printing Characters). 



