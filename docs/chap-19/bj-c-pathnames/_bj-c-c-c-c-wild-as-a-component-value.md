 



If :wild is the value of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> component, that component is considered to be a wildcard, which matches anything. 



A *conforming program* must be prepared to encounter a value of :wild as the value of any <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> component, or as an <ClLinks  term={"element"}><i>element</i></ClLinks> of a <ClLinks  term={"list"}><i>list</i></ClLinks> that is the value of the directory component. 



When constructing a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, a *conforming program* may use :wild as the value of any or all of the directory, name, type, or version component, but must not use :wild as the value of the host, or device component. 



If :wild is used as the value of the directory component in the construction of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, the effect is equivalent to specifying the list (:absolute :wild-inferiors), or the same as (:absolute :wild) in a *file system* that does not support :wild-inferiors. 







 



 



