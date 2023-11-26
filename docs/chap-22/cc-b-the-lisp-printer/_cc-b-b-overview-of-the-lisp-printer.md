 

Common Lisp provides a representation of most *objects* in the form of printed text called the printed representation. Functions such as **print** take an *object* and send the characters of its printed representation to a *stream*. The collection of routines that does this is known as the (Common Lisp) printer. 

Reading a printed representation typically produces an *object* that is **equal** to the originally printed *object*. 

