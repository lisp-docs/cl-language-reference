 



Computations with <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm> are only approximate, although they are described as if the results were mathematically accurate. Two mathematically identical expressions may be computationally different because of errors inherent in the floating-point approximation process. The precision of a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> is not necessarily correlated with the accuracy of that number. For instance, 3.142857142857142857 is a more precise approximation to *π* than 3.14159, but the latter is more accurate. The precision refers to the number of bits retained in the representation. When an operation combines a <GlossaryTerm styled={true} term={"short float"}><i>short float</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"long float"}><i>long float</i></GlossaryTerm>, the result will be a <GlossaryTerm styled={true} term={"long float"}><i>long float</i></GlossaryTerm>. Common Lisp functions assume that the accuracy of arguments to them does not exceed their precision. Therefore when two *small floats* are combined, the result is a *small float*. Common Lisp functions never convert automatically from a larger size to a smaller one. 



