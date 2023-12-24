 



If two <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that *establish lexical bindings* with the same *name N* are textually nested, then references to *N* within the inner <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> refer to the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> established by the inner <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; the inner <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for *N shadows* the outer <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for *N*. Outside the inner <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> but inside the outer one, references to *N* refer to the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> established by the outer <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. For example: 



(defun test (x z) 



(let ((z (\* x 2))) 



(print z)) 



z) 



The <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of the variable z by <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> shadows the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> binding for the function test. The reference to the variable z in the <ClLinks styled={true} term={"print"}><b>print</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> refers to the <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> binding. The reference to z at the end of the function test refers to the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> named z. 



Constructs that are lexically scoped act as if new names were generated for each <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> on each execution. Therefore, dynamic shadowing cannot occur. For example: 



(defun contorted-example (f g x) 



(if (= x 0) 



(funcall f) 



(block here 



(+ 5 (contorted-example g 



#’(lambda () (return-from here 4)) 



(- x 1)))))) 



Consider the call (contorted-example nil nil 2). This produces 4. During the course of execution, there are three calls to contorted-example, interleaved with two blocks: 



(contorted-example nil nil 2) 



(block here<sub>1</sub> ...) 



(contorted-example nil #’(lambda () (return-from here<sub>1</sub> 4)) 1) 



(block here<sub>2</sub> ...) 



(contorted-example #’(lambda () (return-from here<sub>1</sub> 4)) 



#’(lambda () (return-from here<sub>2</sub> 4)) 



\0) 



(funcall f) 



where f → #’(lambda () (return-from here<sub>1</sub> 4))  







(return-from here<sub>1</sub> 4) 



At the time the funcall is executed there are two <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> *exit points* outstanding, each apparently named here. The <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> executed as a result of the funcall operation refers to the outer outstanding *exit point* (here<sub>1</sub>), not the inner one (here<sub>2</sub>). It refers to that *exit point* textually visible at the point of execution of <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> (here abbreviated by the #’ syntax) that resulted in creation of the *function object* actually invoked by <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks>. 



If, in this example, one were to change the (funcall f) to (funcall g), then the value of the call (contorted-example nil nil 2) would be 9. The value would change because <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks> would cause the execution of (return-from here<sub>2</sub> 4), thereby causing a return from the inner *exit point* (here<sub>2</sub>). 



When that occurs, the value 4 is returned from the middle invocation of contorted-example, 5 is added to that to get 9, and that value is returned from the outer block and the outermost call to contorted-example. The point is that the choice of *exit point* returned from has nothing to do with its being innermost or outermost; rather, it depends on the lexical environment that is packaged up with a *lambda expression* when <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> is executed. 



