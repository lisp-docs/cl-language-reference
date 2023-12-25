 



Except where explicitly stated otherwise, no <ClLinks  term={"macro"}><i>macro</i></ClLinks> defined in the Common Lisp standard produces an expansion that could cause any of the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the *macro form* to be treated as *top level forms*. If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> also provides a *special operator* definition of a Common Lisp <ClLinks  term={"macro"}><i>macro</i></ClLinks>, the *special operator* definition must be semantically equivalent in this respect. 



*Compiler macro* expansions must also have the same top level evaluation semantics as the <ClLinks  term={"form"}><i>form</i></ClLinks> which they replace. This is of concern both to *conforming implementations* and to *conforming programs*. 



