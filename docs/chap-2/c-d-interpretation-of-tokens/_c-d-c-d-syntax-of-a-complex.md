 

A *complex* has a Cartesian structure, with a real part and an imaginary part each of which is a *real*. The parts of a *complex* are not necessarily *floats* but both parts must be of the same *type*: either both are *rationals*, or both are of the same *float subtype*. When constructing a *complex* , if the specified parts are not the same *type*, the parts are converted to be the same *type* internally 

(*i.e.*, the *rational* part is converted to a *float*). An *object* of type (complex rational) is converted internally and represented thereafter as a *rational* if its imaginary part is an *integer* whose value is 0. 

For further information, see Section 2.4.8.11 (Sharpsign C) and Section 22.1.3.1.4 (Printing Complexes). 

