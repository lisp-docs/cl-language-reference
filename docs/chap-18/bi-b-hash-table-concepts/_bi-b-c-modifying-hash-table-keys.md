 



The function supplied as the :test argument to <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> specifies the ‘equivalence test’ for the *hash table* it creates. 



An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is ‘visibly modified’ with regard to an equivalence test if there exists some set of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> (or potential <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>) which are equivalent to the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> before the modification but are no longer equivalent afterwards. 



If an *object O*<sub>1</sub> is used as a key in a *hash table H* and is then visibly modified with regard to the equivalence test of *H*, then the consequences are unspecified if *O*<sub>1</sub>, or any *object O*<sub>2</sub> equivalent to *O*<sub>1</sub> under the equivalence test (either before or after the modification), is used as a key in further operations on *H*. The consequences of using *O*<sub>1</sub> as a key are unspecified even if *O*<sub>1</sub> is visibly 



modified and then later modified again in such a way as to undo the visible modification. 



Following are specifications of the modifications which are visible to the equivalence tests which must be supported by *hash tables*. The modifications are described in terms of modification of components, and are defined recursively. Visible modifications of components of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> are visible modifications of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



