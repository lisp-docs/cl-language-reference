 

If the result of any computation would be a *complex* number whose real part is of *type* **rational** and whose imaginary part is zero, the result is converted to the *rational* which is the real part. This rule does not apply to *complex* numbers whose parts are *floats*. For example, #C(5 0) and 5 are not *different objects* in Common Lisp(they are always the *same* under **eql**); #C(5.0 0.0) and 

5\.0 are always *different objects* in Common Lisp (they are never the *same* under **eql**, although they are the *same* under **equalp** and **=**). 

