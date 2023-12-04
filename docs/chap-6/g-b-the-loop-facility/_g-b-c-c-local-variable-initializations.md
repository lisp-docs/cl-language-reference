 



When a **loop** *form* is executed, the local variables are bound and are initialized to some value. These local variables exist until **loop** iteration terminates, at which point they cease to exist. Implicit variables are also established by iteration control clauses and the into preposition of accumulation clauses. 



The with construct initializes variables that are local to a loop. The variables are initialized one time only. If the optional *type-spec* argument is supplied for the variable *var*, but there is no related expression to be evaluated, *var* is initialized to an appropriate default value for its *type*. For example, for the types **t**, **number**, and **float**, the default values are **nil**, 0, and 0.0 respectively. The consequences are undefined if a *type-spec* argument is supplied for *var* if the related expression returns a value that is not of the supplied *type*. By default, the with construct initializes variables *sequentially*; that is, one variable is assigned a value before the next expression is evaluated. However, by using the *loop keyword* and to join several with clauses, initializations can be forced to 







 



 



occur in *parallel*; that is, all of the supplied *forms* are evaluated, and the results are bound to the respective variables simultaneously. 



*Sequential binding* is used when it is desireable for the initialization of some variables to depend on the values of previously bound variables. For example, suppose the variables a, b, and c are to be bound in sequence: 



(loop with a = 1 



with b = (+ a 2) 



with c = (+ b 3) 



return (list a b c)) 



*→* (1 3 6) 



The execution of the above **loop** is equivalent to the execution of the following code: 



(block nil 



(let\* ((a 1) 



(b (+ a 2)) 



(c (+ b 3))) 



(tagbody 



(next-loop (return (list a b c)) 



(go next-loop) 



end-loop)))) 



If the values of previously bound variables are not needed for the initialization of other local variables, an and clause can be used to specify that the bindings are to occur in *parallel*: 



(loop with a = 1 



and b = 2 



and c = 3 



return (list a b c)) 



*→* (1 2 3) 



The execution of the above loop is equivalent to the execution of the following code: 



(block nil 



(let ((a 1) 



(b 2) 



(c 3)) 



(tagbody 



(next-loop (return (list a b c)) 



(go next-loop) 



end-loop)))) 



