 



The same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can name both a *lexical variable* and a *dynamic variable*, but never in the same *lexical environment*. 



In the following example, the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> x is used, at different times, as the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a *lexical variable* and as the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a *dynamic variable*. 



(let ((x 1)) ;Binds a special variable X 



(declare (special x)) 



(let ((x 2)) ;Binds a lexical variable X 



(+ x ;Reads a lexical variable X 



(locally (declare (special x)) 



x)))) ;Reads a special variable X 



→ 3 



