**next-method-p** *Local Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> *hno argumentsi → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The locally defined function <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> can be used within the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (but not the *lambda list*) defined by a *method-defining form* to determine whether a next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> exists. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> has *lexical scope* and *indefinite extent*. 



Whether or not <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> outside of a *method-defining form* are undefined. 



**See Also:** 



<DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> 







 



 



