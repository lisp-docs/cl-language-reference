 



Except where explicitly stated otherwise, no *macro* defined in the Common Lisp standard produces an expansion that could cause any of the *subforms* of the *macro form* to be treated as *top level forms*. If an *implementation* also provides a *special operator* definition of a Common Lisp *macro*, the *special operator* definition must be semantically equivalent in this respect. 



*Compiler macro* expansions must also have the same top level evaluation semantics as the *form* which they replace. This is of concern both to *conforming implementations* and to *conforming programs*. 



