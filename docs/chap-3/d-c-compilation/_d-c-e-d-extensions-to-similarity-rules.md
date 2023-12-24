 



Some <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, such as <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks>, **readtables**, and **methods** are not *externalizable objects* under the definition of similarity given above. That is, such <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> may not portably appear as *literal objects* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to be processed by the *file compiler* . 



An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to extend the rules of similarity, so that other kinds of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are *externalizable objects* for that <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



If for some kind of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> is neither defined by this specification nor by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, then the *file compiler* must signal an error upon encountering such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as a *literal constant*. 



