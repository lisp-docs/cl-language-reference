 



The :default-initargs class option is inherited. The set of defaulted initialization arguments for a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is the union of the sets of initialization arguments supplied in the :default-initargs class options of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses*. When more than one default initial value <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is supplied 



for a given initialization argument, the default initial value <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is used is the one supplied by the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is most specific according to the *class precedence list*. 



If a given :default-initargs class option specifies an initialization argument of the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> more than once, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled.  







