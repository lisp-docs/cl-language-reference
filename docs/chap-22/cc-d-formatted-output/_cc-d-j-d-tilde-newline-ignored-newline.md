 



*Tilde* immediately followed by a *newline* ignores the *newline* and any following non-newline *whitespace*<sub>1</sub> characters. With a :, the *newline* is ignored, but any following *whitespace*<sub>1</sub> is left in place. With an @, the *newline* is left in place, but any following *whitespace*<sub>1</sub> is ignored. For example: 



(defun type-clash-error (fn nargs argnum right-type wrong-type) 



(format \*error-output\* 



"&#126;&amp;&#126;S requires its &#126;:[&#126;:R&#126;;&#126;\*&#126;]&#126; 



argument to be of type &#126;S,&#126;%but it was called &#126; 



with an argument of type &#126;S.&#126;%" 



fn (eql nargs 1) argnum right-type wrong-type)) 



(type-clash-error ’aref nil 2 ’integer ’vector) prints: 



AREF requires its second argument to be of type INTEGER, 



but it was called with an argument of type VECTOR. 



NIL 



(type-clash-error ’car 1 1 ’list ’short-float) prints: 



CAR requires its argument to be of type LIST, 



but it was called with an argument of type SHORT-FLOAT. 



NIL 



Note that in this example newlines appear in the output only as specified by the &#126;&amp; and &#126;% directives; the actual newline characters in the control string are suppressed because each is preceded by a tilde. 







 



 



