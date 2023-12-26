 



Contorted-example works only because the <ClLinks  term={"function"}><i>function</i></ClLinks> named by f is invoked during the <ClLinks  term={"extent"}><i>extent</i></ClLinks> of the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>. Once the flow of execution has left the block, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is *disestablished*. For example: 



(defun invalid-example () 



(let ((y (block here #’(lambda (z) (return-from here z))))) 



(if (numberp y) y (funcall y 5)))) 



One might expect the call (invalid-example) to produce 5 by the following incorrect reasoning: <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> binds y to the value of <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>; this value is a <ClLinks  term={"function"}><i>function</i></ClLinks> resulting from the <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. Because y is not a number, it is invoked on the value 5. The <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> should then return this value from the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> named here, thereby exiting from the block again and giving y the value 5 which, being a number, is then returned as the value of the call to invalid-example. 



The argument fails only because <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. The argument is correct up to the execution of <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>. The execution of <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"control-error"}><b>control-error</b></DictionaryLink>, however, not because it cannot refer to the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, but because it does correctly refer to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> and that <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> has been *disestablished*. 



A reference by name to a dynamic <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> binding such as a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm> refers to the most recently *established binding* of that name that has not been *disestablished*. For example: 



(defun fun1 (x) 



(catch ’trap (+ 3 (fun2 x)))) 



(defun fun2 (y) 



(catch ’trap (\* 5 (fun3 y)))) 



(defun fun3 (z) 



(throw ’trap z))  







Consider the call (fun1 7). The result is 10. At the time the <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is executed, there are two outstanding catchers with the name trap: one established within procedure fun1, and the other within procedure fun2. The latter is the more recent, and so the value 7 is returned from <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> in fun2. Viewed from within fun3, the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> in fun2 shadows the one in fun1. Had fun2 been defined as 



(defun fun2 (y) 



(catch ’snare (\* 5 (fun3 y)))) 



then the two <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> would have different <ClLinks  term={"name"}><i>names</i></ClLinks>, and therefore the one in fun1 would not be shadowed. The result would then have been 7. 



