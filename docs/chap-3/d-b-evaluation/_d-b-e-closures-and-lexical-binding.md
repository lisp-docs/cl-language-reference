 



A *lexical closure* is a *function* that can refer to and alter the values of *lexical bindings established* by *binding forms* that textually include the function definition. 



Consider this code, where x is not declared **special**: 



(defun two-funs (x) 



(list (function (lambda () x)) 



(function (lambda (y) (setq x y))))) 



(setq funs (two-funs 6)) 



(funcall (car funs)) *→* 6 



(funcall (cadr funs) 43) *→* 43 



(funcall (car funs)) *→* 43 



The **function** *special form* coerces a *lambda expression* into a *closure* in which the *lexical environment* in effect when the *special form* is evaluated is captured along with the *lambda expression*. 



The function two-funs returns a *list* of two *functions*, each of which refers to the *binding* of the variable x created on entry to the function two-funs when it was called. This variable has the value 6 initially, but **setq** can alter this *binding*. The *lexical closure* created for the first *lambda expression* does not “snapshot” the *value* 6 for x when the *closure* is created; rather it captures the *binding* of x. The second *function* can be used to alter the *value* in the same (captured) *binding* (to 43, in the example), and this altered variable binding then affects the value returned by the first *function*.  







In situations where a *closure* of a *lambda expression* over the same set of *bindings* may be produced more than once, the various resulting *closures* may or may not be *identical*, at the discretion of the *implementation*. That is, two *functions* that are behaviorally indistinguishable might or might not be *identical*. Two *functions* that are behaviorally distinguishable are *distinct*. For example: 



(let ((x 5) (funs ’())) 



(dotimes (j 10) 



(push #’(lambda (z) 



(if (null z) (setq x 0) (+ x z))) 



funs)) 



funs) 



The result of the above *form* is a *list* of ten *closures*. Each requires only the *binding* of x. It is the same *binding* in each case, but the ten *closure objects* might or might not be *identical*. On the other hand, the result of the *form* 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) 



(if (null z) (setq x 0) (+ x z)))) 



funs))) 



funs) 



is also a *list* of ten *closures*. However, in this case no two of the *closure objects* can be *identical* because each *closure* is closed over a distinct *binding* of x, and these *bindings* can be behaviorally distinguished because of the use of **setq**. 



The result of the *form* 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) (+ x z))) 



funs))) 



funs) 



is a *list* of ten *closure objects* that might or might not be *identical*. A different *binding* of x is involved for each *closure*, but the *bindings* cannot be distinguished because their values are the *same* and immutable (there being no occurrence of **setq** on x). A compiler could internally transform the *form* to 



(let ((funs ’())) 



(dotimes (j 10) 



(push (function (lambda (z) (+ 5 z))) 



funs)) 



funs)  







where the *closures* may be *identical*. 



It is possible that a *closure* does not close over any variable bindings. In the code fragment (mapcar (function (lambda (x) (+ x 2))) y) 



the function (lambda (x) (+ x 2)) contains no references to any outside object. In this case, the same *closure* might be returned for all evaluations of the **function** *form*. 



