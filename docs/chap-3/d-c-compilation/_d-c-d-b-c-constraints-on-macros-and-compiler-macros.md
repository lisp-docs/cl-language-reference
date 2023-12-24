 



Except where explicitly stated otherwise, no <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> defined in the Common Lisp standard produces an expansion that could cause any of the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the *macro form* to be treated as *top level forms*. If an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> also provides a *special operator* definition of a Common Lisp <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, the *special operator* definition must be semantically equivalent in this respect. 



*Compiler macro* expansions must also have the same top level evaluation semantics as the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> which they replace. This is of concern both to *conforming implementations* and to *conforming programs*. 



