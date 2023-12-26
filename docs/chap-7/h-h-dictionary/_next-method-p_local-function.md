**next-method-p** *Local Function* 



**Syntax:** 



<DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> *⟨no arguments⟩ → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



The locally defined function <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> can be used within the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>) defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> to determine whether a next <ClLinks  term={"method"}><i>method</i></ClLinks> exists. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm>. 



Whether or not <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> outside of a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> are undefined. 



**See Also:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> 







 



 



