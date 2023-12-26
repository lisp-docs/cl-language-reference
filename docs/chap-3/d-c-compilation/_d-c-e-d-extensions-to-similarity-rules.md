 



Some <ClLinks  term={"object"}><i>objects</i></ClLinks>, such as <ClLinks  term={"stream"}><i>streams</i></ClLinks>, **readtables**, and **methods** are not <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> under the definition of similarity given above. That is, such <ClLinks  term={"object"}><i>objects</i></ClLinks> may not portably appear as *literal objects* in <ClLinks  term={"code"}><i>code</i></ClLinks> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> . 



An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to extend the rules of similarity, so that other kinds of <ClLinks  term={"object"}><i>objects</i></ClLinks> are <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> for that <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



If for some kind of <ClLinks  term={"object"}><i>object</i></ClLinks>, <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> is neither defined by this specification nor by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, then the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> must signal an error upon encountering such an <ClLinks  term={"object"}><i>object</i></ClLinks> as a *literal constant*. 



