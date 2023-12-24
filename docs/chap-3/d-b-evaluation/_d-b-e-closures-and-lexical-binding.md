 



A *lexical closure* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that can refer to and alter the values of *lexical bindings established* by *binding forms* that textually include the function definition. 



Consider this code, where x is not declared <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>: 



(defun two-funs (x) 



(list (function (lambda () x)) 



(function (lambda (y) (setq x y))))) 



(setq funs (two-funs 6)) 



(funcall (car funs)) → 6 



(funcall (cadr funs) 43) → 43 



(funcall (car funs)) → 43 



The <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form* coerces a *lambda expression* into a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> in which the *lexical environment* in effect when the *special form* is evaluated is captured along with the *lambda expression*. 



The function two-funs returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of two <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>, each of which refers to the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of the variable x created on entry to the function two-funs when it was called. This variable has the value 6 initially, but <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> can alter this <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. The *lexical closure* created for the first *lambda expression* does not “snapshot” the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> 6 for x when the <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> is created; rather it captures the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of x. The second <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can be used to alter the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> in the same (captured) <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> (to 43, in the example), and this altered variable binding then affects the value returned by the first <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>.  







In situations where a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> of a *lambda expression* over the same set of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> may be produced more than once, the various resulting <ClLinks styled={true} term={"closure"}><i>closures</i></ClLinks> may or may not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>, at the discretion of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. That is, two <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> that are behaviorally indistinguishable might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. Two <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> that are behaviorally distinguishable are <ClLinks styled={true} term={"distinct"}><i>distinct</i></ClLinks>. For example: 



(let ((x 5) (funs ’())) 



(dotimes (j 10) 



(push #’(lambda (z) 



(if (null z) (setq x 0) (+ x z))) 



funs)) 



funs) 



The result of the above <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of ten <ClLinks styled={true} term={"closure"}><i>closures</i></ClLinks>. Each requires only the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of x. It is the same <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in each case, but the ten *closure objects* might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. On the other hand, the result of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) 



(if (null z) (setq x 0) (+ x z)))) 



funs))) 



funs) 



is also a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of ten <ClLinks styled={true} term={"closure"}><i>closures</i></ClLinks>. However, in this case no two of the *closure objects* can be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> because each <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> is closed over a distinct <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of x, and these <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> can be behaviorally distinguished because of the use of <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>. 



The result of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) (+ x z))) 



funs))) 



funs) 



is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of ten *closure objects* that might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. A different <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of x is involved for each <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks>, but the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> cannot be distinguished because their values are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> and immutable (there being no occurrence of <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> on x). A compiler could internally transform the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to 



(let ((funs ’())) 



(dotimes (j 10) 



(push (function (lambda (z) (+ 5 z))) 



funs)) 



funs)  







where the <ClLinks styled={true} term={"closure"}><i>closures</i></ClLinks> may be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. 



It is possible that a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> does not close over any variable bindings. In the code fragment (mapcar (function (lambda (x) (+ x 2))) y) 



the function (lambda (x) (+ x 2)) contains no references to any outside object. In this case, the same <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> might be returned for all evaluations of the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



