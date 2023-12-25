 



A *lexical closure* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that can refer to and alter the values of *lexical bindings established* by *binding forms* that textually include the function definition. 



Consider this code, where x is not declared <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>: 



(defun two-funs (x) 



(list (function (lambda () x)) 



(function (lambda (y) (setq x y))))) 



(setq funs (two-funs 6)) 



(funcall (car funs)) *→* 6 



(funcall (cadr funs) 43) *→* 43 



(funcall (car funs)) *→* 43 



The <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form* coerces a *lambda expression* into a <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> in which the *lexical environment* in effect when the *special form* is evaluated is captured along with the *lambda expression*. 



The function two-funs returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>, each of which refers to the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of the variable x created on entry to the function two-funs when it was called. This variable has the value 6 initially, but <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> can alter this <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. The *lexical closure* created for the first *lambda expression* does not “snapshot” the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> 6 for x when the <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> is created; rather it captures the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of x. The second <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can be used to alter the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> in the same (captured) <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> (to 43, in the example), and this altered variable binding then affects the value returned by the first <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>.  







In situations where a <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> of a *lambda expression* over the same set of <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> may be produced more than once, the various resulting <GlossaryTerm styled={true} term={"closure"}><i>closures</i></GlossaryTerm> may or may not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>, at the discretion of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. That is, two <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that are behaviorally indistinguishable might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. Two <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that are behaviorally distinguishable are <GlossaryTerm styled={true} term={"distinct"}><i>distinct</i></GlossaryTerm>. For example: 



(let ((x 5) (funs ’())) 



(dotimes (j 10) 



(push #’(lambda (z) 



(if (null z) (setq x 0) (+ x z))) 



funs)) 



funs) 



The result of the above <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of ten <GlossaryTerm styled={true} term={"closure"}><i>closures</i></GlossaryTerm>. Each requires only the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of x. It is the same <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in each case, but the ten *closure objects* might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. On the other hand, the result of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) 



(if (null z) (setq x 0) (+ x z)))) 



funs))) 



funs) 



is also a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of ten <GlossaryTerm styled={true} term={"closure"}><i>closures</i></GlossaryTerm>. However, in this case no two of the *closure objects* can be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> because each <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> is closed over a distinct <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of x, and these <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> can be behaviorally distinguished because of the use of <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>. 



The result of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) (+ x z))) 



funs))) 



funs) 



is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of ten *closure objects* that might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. A different <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of x is involved for each <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm>, but the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> cannot be distinguished because their values are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> and immutable (there being no occurrence of <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> on x). A compiler could internally transform the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to 



(let ((funs ’())) 



(dotimes (j 10) 



(push (function (lambda (z) (+ 5 z))) 



funs)) 



funs)  







where the <GlossaryTerm styled={true} term={"closure"}><i>closures</i></GlossaryTerm> may be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



It is possible that a <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> does not close over any variable bindings. In the code fragment (mapcar (function (lambda (x) (+ x 2))) y) 



the function (lambda (x) (+ x 2)) contains no references to any outside object. In this case, the same <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> might be returned for all evaluations of the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



