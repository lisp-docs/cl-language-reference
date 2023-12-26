 



Some <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, such as <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm>, **readtables**, and **methods** are not <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> under the definition of similarity given above. That is, such <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> may not portably appear as *literal objects* in <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> . 



An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to extend the rules of similarity, so that other kinds of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> for that <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



If for some kind of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, <GlossaryTerm  term={"similarity"}><i>similarity</i></GlossaryTerm> is neither defined by this specification nor by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, then the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> must signal an error upon encountering such an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> as a *literal constant*. 



