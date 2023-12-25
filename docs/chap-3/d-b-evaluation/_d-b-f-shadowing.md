 



If two <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that *establish lexical bindings* with the same *name N* are textually nested, then references to *N* within the inner <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> refer to the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> established by the inner <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; the inner <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for *N shadows* the outer <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for *N*. Outside the inner <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> but inside the outer one, references to *N* refer to the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> established by the outer <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. For example: 



(defun test (x z) 



(let ((z (\* x 2))) 



(print z)) 



z) 



The <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of the variable z by <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> shadows the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> binding for the function test. The reference to the variable z in the <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> refers to the <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> binding. The reference to z at the end of the function test refers to the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> named z. 



Constructs that are lexically scoped act as if new names were generated for each <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> on each execution. Therefore, dynamic shadowing cannot occur. For example: 



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



where f *→* #’(lambda () (return-from here<sub>1</sub> 4))  







(return-from here<sub>1</sub> 4) 



At the time the funcall is executed there are two <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> *exit points* outstanding, each apparently named here. The <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> executed as a result of the funcall operation refers to the outer outstanding *exit point* (here<sub>1</sub>), not the inner one (here<sub>2</sub>). It refers to that *exit point* textually visible at the point of execution of <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> (here abbreviated by the #’ syntax) that resulted in creation of the *function object* actually invoked by <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>. 



If, in this example, one were to change the (funcall f) to (funcall g), then the value of the call (contorted-example nil nil 2) would be 9. The value would change because <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> would cause the execution of (return-from here<sub>2</sub> 4), thereby causing a return from the inner *exit point* (here<sub>2</sub>). 



When that occurs, the value 4 is returned from the middle invocation of contorted-example, 5 is added to that to get 9, and that value is returned from the outer block and the outermost call to contorted-example. The point is that the choice of *exit point* returned from has nothing to do with its being innermost or outermost; rather, it depends on the lexical environment that is packaged up with a *lambda expression* when <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> is executed. 



