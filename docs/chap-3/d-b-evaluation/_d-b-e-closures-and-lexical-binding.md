 



A <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that can refer to and alter the values of *lexical bindings established* by *binding forms* that textually include the function definition. 



Consider this code, where x is not declared <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>: 



(defun two-funs (x) 



(list (function (lambda () x)) 



(function (lambda (y) (setq x y))))) 



(setq funs (two-funs 6)) 



(funcall (car funs)) → 6 



(funcall (cadr funs) 43) → 43 



(funcall (car funs)) → 43 



The <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> coerces a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> into a <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in effect when the <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is evaluated is captured along with the <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. 



The function two-funs returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of two <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>, each of which refers to the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of the variable x created on entry to the function two-funs when it was called. This variable has the value 6 initially, but <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> can alter this <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm> created for the first <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> does not “snapshot” the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> 6 for x when the <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> is created; rather it captures the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of x. The second <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> can be used to alter the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> in the same (captured) <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> (to 43, in the example), and this altered variable binding then affects the value returned by the first <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>.  







In situations where a <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> over the same set of <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> may be produced more than once, the various resulting <GlossaryTerm  term={"closure"}><i>closures</i></GlossaryTerm> may or may not be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>, at the discretion of the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. That is, two <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that are behaviorally indistinguishable might or might not be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. Two <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that are behaviorally distinguishable are <GlossaryTerm  term={"distinct"}><i>distinct</i></GlossaryTerm>. For example: 



(let ((x 5) (funs ’())) 



(dotimes (j 10) 



(push #’(lambda (z) 



(if (null z) (setq x 0) (+ x z))) 



funs)) 



funs) 



The result of the above <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of ten <GlossaryTerm  term={"closure"}><i>closures</i></GlossaryTerm>. Each requires only the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of x. It is the same <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> in each case, but the ten *closure objects* might or might not be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. On the other hand, the result of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) 



(if (null z) (setq x 0) (+ x z)))) 



funs))) 



funs) 



is also a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of ten <GlossaryTerm  term={"closure"}><i>closures</i></GlossaryTerm>. However, in this case no two of the *closure objects* can be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> because each <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> is closed over a distinct <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of x, and these <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> can be behaviorally distinguished because of the use of <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>. 



The result of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> 



(let ((funs ’())) 



(dotimes (j 10) 



(let ((x 5)) 



(push (function (lambda (z) (+ x z))) 



funs))) 



funs) 



is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of ten *closure objects* that might or might not be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. A different <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of x is involved for each <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm>, but the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> cannot be distinguished because their values are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> and immutable (there being no occurrence of <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> on x). A compiler could internally transform the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to 



(let ((funs ’())) 



(dotimes (j 10) 



(push (function (lambda (z) (+ 5 z))) 



funs)) 



funs)  







where the <GlossaryTerm  term={"closure"}><i>closures</i></GlossaryTerm> may be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. 



It is possible that a <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> does not close over any variable bindings. In the code fragment (mapcar (function (lambda (x) (+ x 2))) y) 



the function (lambda (x) (+ x 2)) contains no references to any outside object. In this case, the same <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> might be returned for all evaluations of the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



