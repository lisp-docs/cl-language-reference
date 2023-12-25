 



The macro <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> defines new forms of method combination. It provides a mechanism for customizing the production of the effective method. The default procedure for producing an effective method is described in Section 7.6.6.1 (Determining the Effective Method). 







 



 



There are two forms of <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. The short form is a simple facility while the long form is more powerful and more verbose. The long form resembles <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> in that the body is an expression that computes a Lisp form; it provides mechanisms for implementing arbitrary control structures within method combination and for arbitrary processing of method <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



