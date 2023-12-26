 



If two <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> that *establish lexical bindings* with the same *name N* are textually nested, then references to *N* within the inner <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> refer to the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> established by the inner <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; the inner <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for *N shadows* the outer <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for *N*. Outside the inner <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> but inside the outer one, references to *N* refer to the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> established by the outer <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. For example: 



(defun test (x z) 



(let ((z (\* x 2))) 



(print z)) 



z) 



The <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of the variable z by <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> shadows the <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> binding for the function test. The reference to the variable z in the <DictionaryLink  term={"print"}><b>print</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> refers to the <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> binding. The reference to z at the end of the function test refers to the <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> named z. 



Constructs that are lexically scoped act as if new names were generated for each <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> on each execution. Therefore, dynamic shadowing cannot occur. For example: 



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



At the time the funcall is executed there are two <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> outstanding, each apparently named here. The <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> executed as a result of the funcall operation refers to the outer outstanding <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> (here<sub>1</sub>), not the inner one (here<sub>2</sub>). It refers to that <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> textually visible at the point of execution of <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> (here abbreviated by the #’ syntax) that resulted in creation of the *function object* actually invoked by <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>. 



If, in this example, one were to change the (funcall f) to (funcall g), then the value of the call (contorted-example nil nil 2) would be 9. The value would change because <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> would cause the execution of (return-from here<sub>2</sub> 4), thereby causing a return from the inner <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> (here<sub>2</sub>). 



When that occurs, the value 4 is returned from the middle invocation of contorted-example, 5 is added to that to get 9, and that value is returned from the outer block and the outermost call to contorted-example. The point is that the choice of <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> returned from has nothing to do with its being innermost or outermost; rather, it depends on the lexical environment that is packaged up with a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> when <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> is executed. 



