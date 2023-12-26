 



A <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> has a Cartesian structure, with a real part and an imaginary part each of which is a *real*. The parts of a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> are not necessarily <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm> but both parts must be of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>: either both are <GlossaryTerm  term={"rational"}><i>rationals</i></GlossaryTerm>, or both are of the same *float subtype*. When constructing a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , if the specified parts are not the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, the parts are converted to be the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> internally 



(*i.e.*, the <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> part is converted to a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>). An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of type (complex rational) is converted internally and represented thereafter as a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> if its imaginary part is an *integer* whose value is 0. 



For further information, see Section 2.4.8.11 (Sharpsign C) and Section 22.1.3.1.4 (Printing Complexes). 



