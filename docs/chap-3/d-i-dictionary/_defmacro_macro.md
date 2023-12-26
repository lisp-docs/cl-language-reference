**defmacro** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> *name lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ name 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>.  







<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> 



**Description:** 



Defines <ClLinks  term={"name"}><i>name</i></ClLinks> as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> by associating a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> with that <ClLinks  term={"name"}><i>name</i></ClLinks> in the global environment. The <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> is defined in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears. 



The parameter variables in *lambda-list* are bound to destructured portions of the macro call. 



The expansion function accepts two arguments, a <ClLinks  term={"form"}><i>form</i></ClLinks> and an <ClLinks  term={"environment"}><i>environment</i></ClLinks>. The expansion function returns a <ClLinks  term={"form"}><i>form</i></ClLinks>. The body of the expansion function is specified by <ClLinks  term={"form"}><i>forms</i></ClLinks>. <ClLinks  term={"form"}><i>Forms</i></ClLinks> are executed in order. The value of the last <ClLinks  term={"form"}><i>form</i></ClLinks> executed is returned as the expansion of the <ClLinks  term={"macro"}><i>macro</i></ClLinks>. The body <ClLinks  term={"form"}><i>forms</i></ClLinks> of the expansion function (but not the *lambda-list*) are implicitly enclosed in a <ClLinks  term={"block"}><i>block</i></ClLinks> whose name is <ClLinks  term={"name"}><i>name</i></ClLinks>. 



The *lambda-list* conforms to the requirements described in Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to <ClLinks  term={"name"}><i>name</i></ClLinks> (as kind <ClLinks  term={"function"}><b>function</b></ClLinks>) and to the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> can be used to redefine a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or to replace a <ClLinks  term={"function"}><i>function</i></ClLinks> definition with a <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition. 



Recursive expansion of the <ClLinks  term={"form"}><i>form</i></ClLinks> returned must terminate, including the expansion of other <ClLinks  term={"macro"}><i>macros</i></ClLinks> which are <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of other <ClLinks  term={"form"}><i>forms</i></ClLinks> returned. 



The consequences are undefined if the result of fully macroexpanding a <ClLinks  term={"form"}><i>form</i></ClLinks> contains any *circular list structure* except in *literal objects*. 



If a <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must store the <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. Users must ensure that the body of the <ClLinks  term={"macro"}><i>macro</i></ClLinks> can be evaluated at compile time if it is referenced within the <ClLinks  term={"file"}><i>file</i></ClLinks> being *compiled*. 



**Examples:**
```lisp
(defmacro mac1 (a b) "Mac1 multiplies and adds" 
	  ‘(+ ,a (\* ,b 3))) → MAC1 
(mac1 4 5) → 19 
(documentation ’mac1 ’function) → "Mac1 multiplies and adds" 
(defmacro mac2 (&optional (a 2 b) (c 3 d) &rest x) ‘’(,a ,b ,c ,d ,x)) → MAC2 (mac2 6) → (6 T 3 NIL NIL) 
(mac2 6 3 8) → (6 T 3 T (8)) 
(defmacro mac3 (&whole r a &optional (b 3) &rest x &key c (d a)) 
  ‘’(,r ,a ,b ,c ,d ,x)) → MAC3 
(mac3 1 6 :d 8 :c 9 :d 10) → ((MAC3 1 6 :D 8 :C 9 :D 10) 1 6 9 8 (:D 8 :C 9 :D 10)) 
The stipulation that an embedded *destructuring lambda list* is permitted only where *ordinary lambda list* syntax would permit a parameter name but not a *list* is made to prevent ambiguity. For example, the following is not valid:  
**defmacro** 
(defmacro loser (x &optional (a b &rest c) &rest z) 
  ...) 
because *ordinary lambda list* syntax does permit a *list* following &optional; the list (a b &rest c) would be interpreted as describing an optional parameter named a whose default value is that of the form b, with a supplied-p parameter named **&rest** (not valid), and an extraneous symbol c in the list (also not valid). An almost correct way to express this is 
(defmacro loser (x &optional ((a b &rest c)) &rest z) 
  ...) 
The extra set of parentheses removes the ambiguity. However, the definition is now incorrect because a macro call such as (loser (car pool)) would not provide any argument form for the lambda list (a b &rest c), and so the default value against which to match the *lambda list* would be **nil** because no explicit default value was specified. The consequences of this are unspecified since the empty list, **nil**, does not have *forms* to satisfy the parameters a and b. The fully correct definition would be either 
(defmacro loser (x &optional ((a b &rest c) ’(nil nil)) &rest z) 
  ...) 
or 
(defmacro loser (x &optional ((&optional a b &rest c)) &rest z) 
  ...) 
These differ slightly: the first requires that if the macro call specifies a explicitly then it must also specify b explicitly, whereas the second does not have this requirement. For example, 
(loser (car pool) ((+ x 1))) 
would be a valid call for the second definition but not for the first. 
(defmacro dm1a (&whole x) ‘’,x) 
(macroexpand ’(dm1a)) → (QUOTE (DM1A)) 
(macroexpand ’(dm1a a)) is an error. 
(defmacro dm1b (&whole x a &optional b) ‘’(,x ,a ,b)) 
(macroexpand ’(dm1b)) is an error. 
(macroexpand ’(dm1b q)) → (QUOTE ((DM1B Q) Q NIL)) 
(macroexpand ’(dm1b q r)) → (QUOTE ((DM1B Q R) Q R)) 
(macroexpand ’(dm1b q r s)) is an error. 
(defmacro dm2a (&whole form a b) ‘’(form ,form a ,a b ,b)) 
(macroexpand ’(dm2a x y)) → (QUOTE (FORM (DM2A X Y) A X B Y)) 
(dm2a x y) → (FORM (DM2A X Y) A X B Y) 
(defmacro dm2b (&whole form a (&whole b (c . d) &optional (e 5)) 
		&body f &environment env)  
  “(,’,form „a ,’,b ,’,(macroexpand c env) ,’,d ,’,e ,’,f)) 
					;Note that because backquote is involved, implementations may differ 
					;slightly in the nature (though not the functionality) of the expansion. 
(macroexpand ’(dm2b x1 (((incf x2) x3 x4)) x5 x6)) 
→ (LIST\* ’(DM2B X1 (((INCF X2) X3 X4)) 
		 X5 X6) 
	   X1 
	   ’((((INCF X2) X3 X4)) (SETQ X2 (+ X2 1)) (X3 X4) 5 (X5 X6))), 
T 
(let ((x1 5)) 
  (macrolet ((segundo (x) ‘(cadr ,x))) 
    (dm2b x1 (((segundo x2) x3 x4)) x5 x6))) 
→ ((DM2B X1 (((SEGUNDO X2) X3 X4)) X5 X6) 
   5 (((SEGUNDO X2) X3 X4)) (CADR X2) (X3 X4) 5 (X5 X6)) 
```
**See Also:** 



<ClLinks  term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks>, <ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks>, **documentation**, <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks>, 



**\*macroexpand-hook\***, <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks>, Section 3.1 (Evaluation), Section 3.2 (Compilation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



