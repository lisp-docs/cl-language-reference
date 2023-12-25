 



If :wild is the value of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component, that component is considered to be a wildcard, which matches anything. 



A *conforming program* must be prepared to encounter a value of :wild as the value of any <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component, or as an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the value of the directory component. 



When constructing a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, a *conforming program* may use :wild as the value of any or all of the directory, name, type, or version component, but must not use :wild as the value of the host, or device component. 



If :wild is used as the value of the directory component in the construction of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, the effect is equivalent to specifying the list (:absolute :wild-inferiors), or the same as (:absolute :wild) in a *file system* that does not support :wild-inferiors. 







 



 



