**next-method-p** *Local Function* 



**Syntax:** 



<ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> *⟨no arguments⟩ → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The locally defined function <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> can be used within the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> (but not the *lambda list*) defined by a *method-defining form* to determine whether a next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> exists. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> has *lexical scope* and *indefinite extent*. 



Whether or not <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. The consequences of attempting to use <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> outside of a *method-defining form* are undefined. 



**See Also:** 



<ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>, <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> 







 



 



