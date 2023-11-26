**3.1.5 Shadowing** 

If two *forms* that *establish lexical bindings* with the same *name N* are textually nested, then references to *N* within the inner *form* refer to the *binding* established by the inner *form*; the inner *binding* for *N shadows* the outer *binding* for *N*. Outside the inner *form* but inside the outer one, references to *N* refer to the *binding* established by the outer *form*. For example: 

(defun test (x z) 

(let ((z (\* x 2))) 

(print z)) 

z) 

The *binding* of the variable z by **let** shadows the *parameter* binding for the function test. The reference to the variable z in the **print** *form* refers to the **let** binding. The reference to z at the end of the function test refers to the *parameter* named z. 

Constructs that are lexically scoped act as if new names were generated for each *object* on each execution. Therefore, dynamic shadowing cannot occur. For example: 

(defun contorted-example (f g x) 

(if (= x 0) 

(funcall f) 

(block here 

(+ 5 (contorted-example g 

#’(lambda () (return-from here 4)) 

(- x 1)))))) 

Consider the call (contorted-example nil nil 2). This produces 4. During the course of execution, there are three calls to contorted-example, interleaved with two blocks: 

(contorted-example nil nil 2) 

(block here\<sub\>1\</sub\> ...) 

(contorted-example nil #’(lambda () (return-from here\<sub\>1\</sub\> 4)) 1) 

(block here\<sub\>2\</sub\> ...) 

(contorted-example #’(lambda () (return-from here\<sub\>1\</sub\> 4)) 

#’(lambda () (return-from here\<sub\>2\</sub\> 4)) 

\0) 

(funcall f) 

where f *→* #’(lambda () (return-from here\<sub\>1\</sub\> 4))  



(return-from here\<sub\>1\</sub\> 4) 

At the time the funcall is executed there are two **block** *exit points* outstanding, each apparently named here. The **return-from** *form* executed as a result of the funcall operation refers to the outer outstanding *exit point* (here\<sub\>1\</sub\>), not the inner one (here\<sub\>2\</sub\>). It refers to that *exit point* textually visible at the point of execution of **function** (here abbreviated by the #’ syntax) that resulted in creation of the *function object* actually invoked by **funcall**. 

If, in this example, one were to change the (funcall f) to (funcall g), then the value of the call (contorted-example nil nil 2) would be 9. The value would change because **funcall** would cause the execution of (return-from here\<sub\>2\</sub\> 4), thereby causing a return from the inner *exit point* (here\<sub\>2\</sub\>). 

When that occurs, the value 4 is returned from the middle invocation of contorted-example, 5 is added to that to get 9, and that value is returned from the outer block and the outermost call to contorted-example. The point is that the choice of *exit point* returned from has nothing to do with its being innermost or outermost; rather, it depends on the lexical environment that is packaged up with a *lambda expression* when **function** is executed. 

