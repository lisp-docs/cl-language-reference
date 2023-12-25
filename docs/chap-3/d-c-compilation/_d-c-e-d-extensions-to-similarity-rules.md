 



Some <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, such as <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>, **readtables**, and **methods** are not *externalizable objects* under the definition of similarity given above. That is, such <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> may not portably appear as *literal objects* in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> to be processed by the *file compiler* . 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to extend the rules of similarity, so that other kinds of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are *externalizable objects* for that <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



If for some kind of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> is neither defined by this specification nor by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, then the *file compiler* must signal an error upon encountering such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as a *literal constant*. 



