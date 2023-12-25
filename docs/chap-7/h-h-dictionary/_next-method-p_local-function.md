**next-method-p** *Local Function* 



**Syntax:** 



<ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> *⟨no arguments⟩ → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The locally defined function <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> can be used within the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the *lambda list*) defined by a *method-defining form* to determine whether a next <ClLinks  term={"method"}><i>method</i></ClLinks> exists. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> has *lexical scope* and *indefinite extent*. 



Whether or not <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the *global environment* is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. The consequences of attempting to use <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> outside of a *method-defining form* are undefined. 



**See Also:** 



<ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> 







 



 



