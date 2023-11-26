 

*Tilde* immediately followed by a *newline* ignores the *newline* and any following non-newline *whitespace*\<sub\>1\</sub\> characters. With a :, the *newline* is ignored, but any following *whitespace*\<sub\>1\</sub\> is left in place. With an @, the *newline* is left in place, but any following *whitespace*\<sub\>1\</sub\> is ignored. For example: 

(defun type-clash-error (fn nargs argnum right-type wrong-type) 

(format \*error-output\* 

"~&~S requires its ~:[~:R~;~\*~]~ 

argument to be of type ~S,~%but it was called ~ 

with an argument of type ~S.~%" 

fn (eql nargs 1) argnum right-type wrong-type)) 

(type-clash-error ’aref nil 2 ’integer ’vector) prints: 

AREF requires its second argument to be of type INTEGER, 

but it was called with an argument of type VECTOR. 

NIL 

(type-clash-error ’car 1 1 ’list ’short-float) prints: 

CAR requires its argument to be of type LIST, 

but it was called with an argument of type SHORT-FLOAT. 

NIL 

Note that in this example newlines appear in the output only as specified by the ~& and ~% directives; the actual newline characters in the control string are suppressed because each is preceded by a tilde. 

Printer **22–41**

 

 

