 



If :wild is the value of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component, that component is considered to be a wildcard, which matches anything. 



A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must be prepared to encounter a value of :wild as the value of any <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component, or as an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that is the value of the directory component. 



When constructing a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> may use :wild as the value of any or all of the directory, name, type, or version component, but must not use :wild as the value of the host, or device component. 



If :wild is used as the value of the directory component in the construction of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, the effect is equivalent to specifying the list (:absolute :wild-inferiors), or the same as (:absolute :wild) in a <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> that does not support :wild-inferiors. 







 



 



