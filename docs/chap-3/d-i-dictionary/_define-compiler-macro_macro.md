**define-compiler-macro** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink> *name lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → name 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



*lambda-list*—a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



This is the normal mechanism for defining a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>. Its manner of definition is the same as for <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>; the only differences are: 



*•* The <ClLinks  term={"name"}><i>name</i></ClLinks> can be a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> naming any <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



*•* The expander function is installed as a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> for the <ClLinks  term={"name"}><i>name</i></ClLinks>, rather than as a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



*•* The **&amp;whole** argument is bound to the form argument that is passed to the <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>. The remaining lambda-list parameters are specified as if this form contained the function name in the <ClLinks  term={"car"}><i>car</i></ClLinks> and the actual arguments in the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> , but if the <ClLinks  term={"car"}><i>car</i></ClLinks> of the actual form is the symbol <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>, then the destructuring of the arguments is actually performed using its <ClLinks  term={"cddr"}><i>cddr</i></ClLinks> instead. 



*• Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to <ClLinks  term={"name"}><i>name</i></ClLinks> (as kind **compiler-macro**) and to the <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>.  







<DictionaryLink  term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink> 



*•* Unlike an ordinary <ClLinks  term={"macro"}><i>macro</i></ClLinks>, a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> can decline to provide an expansion merely by returning a form that is the <ClLinks  term={"same"}><i>same</i></ClLinks> as the original (which can be obtained by using **&amp;whole**). 



**Examples:**
```lisp
(defun square (x) (expt x 2)) → SQUARE 
(define-compiler-macro square (&whole form arg) 
  (if (atom arg) 
      ‘(expt ,arg 2) 
       (case (car arg) 
	 (square (if (= (length arg) 2) 
		     ‘(expt ,(nth 1 arg) 4) 
		      form)) 
	 (expt (if (= (length arg) 3) 
		   (if (numberp (nth 2 arg)) 
		       ‘(expt ,(nth 1 arg) ,(\* 2 (nth 2 arg))) 
			‘(expt ,(nth 1 arg) (\* 2 ,(nth 2 arg)))) 
		   form)) 
	 (otherwise ‘(expt ,arg 2))))) → SQUARE 
(square (square 3)) → 81 
(macroexpand ’(square x)) → (SQUARE X), *false* 
(funcall (compiler-macro-function ’square) ’(square x) nil) 
→ (EXPT X 2) 
(funcall (compiler-macro-function ’square) ’(square (square x)) nil) 
→ (EXPT X 4) 
(funcall (compiler-macro-function ’square) ’(funcall #’square x) nil) 
→ (EXPT X 2) 
(defun distance-positional (x1 y1 x2 y2) 
  (sqrt (+ (expt (- x2 x1) 2) (expt (- y2 y1) 2)))) 
→ DISTANCE-POSITIONAL 
(defun distance (&key (x1 0) (y1 0) (x2 x1) (y2 y1)) 
  (distance-positional x1 y1 x2 y2)) 
→ DISTANCE 
(define-compiler-macro distance (&whole form 
					&rest key-value-pairs 
					&key (x1 0 x1-p) 
					(y1 0 y1-p) 
					(x2 x1 x2-p) 
					(y2 y1 y2-p) 
					&allow-other-keys 
					&environment env) 
  (flet ((key (n) (nth (\* n 2) key-value-pairs)) 
	 (arg (n) (nth (1+ (\* n 2)) key-value-pairs)) 
	 (simplep (x)  
	   **define-compiler-macro** 
	   (let ((expanded-x (macroexpand x env))) 
	     (or (constantp expanded-x env) 
		 (symbolp expanded-x))))) 
    (let ((n (/ (length key-value-pairs) 2))) 
      (multiple-value-bind (x1s y1s x2s y2s others) 
	  (loop for (key) on key-value-pairs by #’cddr 
		count (eq key ’:x1) into x1s 
		count (eq key ’:y1) into y1s 
		count (eq key ’:x2) into x2s 
		count (eq key ’:y1) into y2s 
		count (not (member key ’(:x1 :x2 :y1 :y2))) 
		into others 
		finally (return (values x1s y1s x2s y2s others))) 
	(cond ((and (= n 4) 
		    (eq (key 0) :x1) 
		    (eq (key 1) :y1) 
		    (eq (key 2) :x2) 
		    (eq (key 3) :y2)) 
	       ‘(distance-positional ,x1 ,y1 ,x2 ,y2)) 
	      ((and (if x1-p (and (= x1s 1) (simplep x1)) t) 
		    (if y1-p (and (= y1s 1) (simplep y1)) t) 
		    (if x2-p (and (= x2s 1) (simplep x2)) t) 
		    (if y2-p (and (= y2s 1) (simplep y2)) t) 
		    (zerop others)) 
	       ‘(distance-positional ,x1 ,y1 ,x2 ,y2)) 
	      ((and (< x1s 2) (< y1s 2) (< x2s 2) (< y2s 2) 
		    (zerop others)) 
	       (let ((temps (loop repeat n collect (gensym)))) 
		 ‘(let ,(loop for i below n 
			      collect (list (nth i temps) (arg i))) 
		    (distance 
		     ,@(loop for i below n 
			     append (list (key i) (nth i temps))))))) 
	      (t form)))))) 
→ DISTANCE 
(dolist (form 
	  ’((distance :x1 (setq x 7) :x2 (decf x) :y1 (decf x) :y2 (decf x)) (distance :x1 (setq x 7) :y1 (decf x) :x2 (decf x) :y2 (decf x)) 
	    (distance :x1 (setq x 7) :y1 (incf x)) 
	    (distance :x1 (setq x 7) :y1 (incf x) :x1 (incf x)) 
	    (distance :x1 a1 :y1 b1 :x2 a2 :y2 b2) 
	    (distance :x1 a1 :x2 a2 :y1 b1 :y2 b2) 
	    (distance :x1 a1 :y1 b1 :z1 c1 :x2 a2 :y2 b2 :z2 c2))) 
  (print (funcall (compiler-macro-function ’distance) form nil))) 
▷ (LET ((#:G6558 (SETQ X 7))  
	▷ (#:G6559 (DECF X)) 
	▷ (#:G6560 (DECF X)) 
	▷ (#:G6561 (DECF X))) 
    ▷ (DISTANCE :X1 #:G6558 :X2 #:G6559 :Y1 #:G6560 :Y2 #:G6561)) 
▷ (DISTANCE-POSITIONAL (SETQ X 7) (DECF X) (DECF X) (DECF X)) 
▷ (LET ((#:G6567 (SETQ X 7)) 
	▷ (#:G6568 (INCF X))) 
    ▷ (DISTANCE :X1 #:G6567 :Y1 #:G6568)) 
▷ (DISTANCE :X1 (SETQ X 7) :Y1 (INCF X) :X1 (INCF X)) 
▷ (DISTANCE-POSITIONAL A1 B1 A2 B2) 
▷ (DISTANCE-POSITIONAL A1 B1 A2 B2) 
▷ (DISTANCE :X1 A1 :Y1 B1 :Z1 C1 :X2 A2 :Y2 B2 :Z2 C2) 
→ NIL 
```
**See Also:** 



<DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink>, <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The consequences of writing a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition for a function in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> are undefined; it is quite possible that in some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> such an attempt would override an equivalent or equally important definition. In general, it is recommended that a programmer only write <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definitions for <ClLinks  term={"function"}><i>functions</i></ClLinks> he or she personally maintains–writing a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition for a function maintained elsewhere is normally considered a violation of traditional rules of modularity and data abstraction. 



