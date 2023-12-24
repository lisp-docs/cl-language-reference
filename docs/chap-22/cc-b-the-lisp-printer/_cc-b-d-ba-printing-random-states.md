 



A specific syntax for printing <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks> is not specified. However, every <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> must arrange to print a *random state object* in such a way that, within the same implementation, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> can construct from the printed representation a copy of the *random state* object as if the copy had been made by <ClLinks styled={true} term={"make-random-state"}><b>make-random-state</b></ClLinks>. 



If the type *random state* is effectively implemented by using the machinery for <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, the usual structure syntax can then be used for printing *random state* objects; one might look something like 



#S(RANDOM-STATE :DATA #(14 49 98436589 786345 8734658324 ... )) 



where the components are <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



