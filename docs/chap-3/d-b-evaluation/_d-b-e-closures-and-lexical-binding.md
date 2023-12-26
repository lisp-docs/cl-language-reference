 



A <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm> is a <ClLinks  term={"function"}><i>function</i></ClLinks> that can refer to and alter the values of *lexical bindings established* by *binding forms* that textually include the function definition. 



Consider this code, where x is not declared <ClLinks  term={"special"}><b>special</b></ClLinks>: 



(defun two-funs (x) 



(list (function (lambda () x)) 



(function (lambda (y) (setq x y))))) 



(setq funs (two-funs 6)) 



(funcall (car funs)) → 6 



(funcall (cadr funs) 43) → 43 



(funcall (car funs)) → 43 



The <ClLinks  term={"function"}><b>function</b></ClLinks> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> coerces a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> into a <ClLinks  term={"closure"}><i>closure</i></ClLinks> in which the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in effect when the <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is evaluated is captured along with the <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. 



The function two-funs returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of two <ClLinks  term={"function"}><i>functions</i></ClLinks>, each of which refers to the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of the variable x created on entry to the function two-funs when it was called. This variable has the value 6 initially, but <ClLinks  term={"setq"}><b>setq</b></ClLinks> can alter this <ClLinks  term={"binding"}><i>binding</i></ClLinks>. The <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm> created for the first <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> does not “snapshot” the <ClLinks  term={"value"}><i>value</i></ClLinks> 6 for x when the <ClLinks  term={"closure"}><i>closure</i></ClLinks> is created; rather it captures the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of x. The second <ClLinks  term={"function"}><i>function</i></ClLinks> can be used to alter the <ClLinks  term={"value"}><i>value</i></ClLinks> in the same (captured) <ClLinks  term={"binding"}><i>binding</i></ClLinks> (to 43, in the example), and this altered variable binding then affects the value returned by the first <ClLinks  term={"function"}><i>function</i></ClLinks>.  







In situations where a <ClLinks  term={"closure"}><i>closure</i></ClLinks> of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> over the same set of <ClLinks  term={"binding"}><i>bindings</i></ClLinks> may be produced more than once, the various resulting <ClLinks  term={"closure"}><i>closures</i></ClLinks> may or may not be <ClLinks  term={"identical"}><i>identical</i></ClLinks>, at the discretion of the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. That is, two <ClLinks  term={"function"}><i>functions</i></ClLinks> that are behaviorally indistinguishable might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. Two <ClLinks  term={"function"}><i>functions</i></ClLinks> that are behaviorally distinguishable are <ClLinks  term={"distinct"}><i>distinct</i></ClLinks>. For example: 



(let ((x 5) (funs ’())) 



(dotimes (j 10) 



(push #’(lambda (z) 



(if (null z) (setq x 0) (+ x z))) 



funs)) 



funs) 



The result of the above <ClLinks  term={"form"}><i>form</i></ClLinks> is a <ClLinks  term={"list"}><i>list</i></ClLinks> of ten <ClLinks  term={"closure"}><i>closures</i></ClLinks>. Each requires only the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of x. It is the same <ClLinks  term={"binding"}><i>binding</i></ClLinks> in each case, but the ten *closure objects* might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. On the other hand, the result of the <ClLinks  term={"form"}><i>form</i></ClLinks> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) 



(if (null z) (setq x 0) (+ x z)))) 



funs))) 



funs) 



is also a <ClLinks  term={"list"}><i>list</i></ClLinks> of ten <ClLinks  term={"closure"}><i>closures</i></ClLinks>. However, in this case no two of the *closure objects* can be <ClLinks  term={"identical"}><i>identical</i></ClLinks> because each <ClLinks  term={"closure"}><i>closure</i></ClLinks> is closed over a distinct <ClLinks  term={"binding"}><i>binding</i></ClLinks> of x, and these <ClLinks  term={"binding"}><i>bindings</i></ClLinks> can be behaviorally distinguished because of the use of <ClLinks  term={"setq"}><b>setq</b></ClLinks>. 



The result of the <ClLinks  term={"form"}><i>form</i></ClLinks> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) (+ x z))) 



funs))) 



funs) 



is a <ClLinks  term={"list"}><i>list</i></ClLinks> of ten *closure objects* that might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. A different <ClLinks  term={"binding"}><i>binding</i></ClLinks> of x is involved for each <ClLinks  term={"closure"}><i>closure</i></ClLinks>, but the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> cannot be distinguished because their values are the <ClLinks  term={"same"}><i>same</i></ClLinks> and immutable (there being no occurrence of <ClLinks  term={"setq"}><b>setq</b></ClLinks> on x). A compiler could internally transform the <ClLinks  term={"form"}><i>form</i></ClLinks> to 



(let ((funs ’())) 



(dotimes (j 10) 



(push (function (lambda (z) (+ 5 z))) 



funs)) 



funs)  







where the <ClLinks  term={"closure"}><i>closures</i></ClLinks> may be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



It is possible that a <ClLinks  term={"closure"}><i>closure</i></ClLinks> does not close over any variable bindings. In the code fragment (mapcar (function (lambda (x) (+ x 2))) y) 



the function (lambda (x) (+ x 2)) contains no references to any outside object. In this case, the same <ClLinks  term={"closure"}><i>closure</i></ClLinks> might be returned for all evaluations of the <ClLinks  term={"function"}><b>function</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



