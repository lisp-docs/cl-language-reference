 



A <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> has a Cartesian structure, with a real part and an imaginary part each of which is a *real*. The parts of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> are not necessarily <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> but both parts must be of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>: either both are <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks>, or both are of the same *float subtype*. When constructing a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , if the specified parts are not the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the parts are converted to be the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> internally 



(*i.e.*, the <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> part is converted to a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>). An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of type (complex rational) is converted internally and represented thereafter as a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> if its imaginary part is an *integer* whose value is 0. 



For further information, see Section 2.4.8.11 (Sharpsign C) and Section 22.1.3.1.4 (Printing Complexes). 



