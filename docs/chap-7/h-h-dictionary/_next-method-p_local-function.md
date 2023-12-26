**next-method-p** *Local Function* 



**Syntax:** 



<ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> *⟨no arguments⟩ → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



The locally defined function <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> can be used within the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>) defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> to determine whether a next <ClLinks  term={"method"}><i>method</i></ClLinks> exists. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm>. 



Whether or not <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> outside of a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> are undefined. 



**See Also:** 



<ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> 







 



 



