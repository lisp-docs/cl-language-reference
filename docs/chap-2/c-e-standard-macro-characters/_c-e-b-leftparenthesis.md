 



The *left-parenthesis* initiates reading of a *list*. **read** is called recursively to read successive *objects* until a right parenthesis is found in the input *stream*. A *list* of the *objects* read is returned. Thus 



(a b c) 



is read as a *list* of three *objects* (the *symbols* a, b, and c). The right parenthesis need not immediately follow the printed representation of the last *object*; *whitespace*<sub>2</sub> characters and comments may precede it. 



If no *objects* precede the right parenthesis, it reads as a *list* of zero *objects* (the *empty list*). 



If a *token* that is just a dot not immediately preceded by an escape character is read after some *object* then exactly one more *object* must follow the dot, possibly preceded or followed by *whitespace*<sub>2</sub> or a comment, followed by the right parenthesis: 



(a b c . d) 



This means that the *cdr* of the last *cons* in the *list* is not **nil**, but rather the *object* whose representation followed the dot. The above example might have been the result of evaluating 



(cons ’a (cons ’b (cons ’c ’d))) 



Similarly, 



(cons ’this-one ’that-one) *→* (this-one . that-one) 



It is permissible for the *object* following the dot to be a *list*: 



(a b c d . (e f . (g))) *≡* (a b c d e f g) 



For information on how the *Lisp printer* prints *lists* and *conses*, see Section 22.1.3.5 (Printing Lists and Conses). 



