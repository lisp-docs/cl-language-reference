 



The macro <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> defines new forms of method combination. It provides a mechanism for customizing the production of the effective method. The default procedure for producing an effective method is described in Section 7.6.6.1 (Determining the Effective Method). 







 



 



There are two forms of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. The short form is a simple facility while the long form is more powerful and more verbose. The long form resembles <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> in that the body is an expression that computes a Lisp form; it provides mechanisms for implementing arbitrary control structures within method combination and for arbitrary processing of method <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



