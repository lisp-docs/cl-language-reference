**muffle-warning** *Restart* 



**Data Arguments Required:** 



None. 



**Description:** 



This *restart* is established by **warn** so that *handlers* of **warning** *conditions* have a way to tell **warn** that a warning has already been dealt with and that no further action is warranted. 



**Examples:**
```lisp
 



(defvar \*all-quiet\* nil) *→* \*ALL-QUIET\* 



(defvar \*saved-warnings\* ’()) *→* \*SAVED-WARNINGS\* 



(defun quiet-warning-handler (c) 



(when \*all-quiet\* 



(let ((r (find-restart ’muffle-warning c))) 







 



 



(when r 



(push c \*saved-warnings\*) 



(invoke-restart r))))) 



*→* CUSTOM-WARNING-HANDLER 



(defmacro with-quiet-warnings (&amp;body forms) 



‘(let ((\*all-quiet\* t) 



(\*saved-warnings\* ’())) 



(handler-bind ((warning #’quiet-warning-handler)) 



,@forms 



\*saved-warnings\*))) 



*→* WITH-QUIET-WARNINGS 



(setq saved 



(with-quiet-warnings 



(warn "Situation #1.") 



(let ((\*all-quiet\* nil)) 



(warn "Situation #2.")) 



(warn "Situation #3."))) 



▷ Warning: Situation #2. 



*→* (#<SIMPLE-WARNING 42744421> #<SIMPLE-WARNING 42744365>) 



(dolist (s saved) (format t "&#126;&amp;&#126;A&#126;%" s)) 



▷ Situation #3. 



▷ Situation #1. 



*→* NIL 




```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), **invoke-restart**, **muffle-warning** (*function*), **warn** 



