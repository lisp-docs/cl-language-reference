**flet, labels, macrolet** *Special Operator* 



**Syntax:** 



<DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



<DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



<DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> (*\{*(*name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*function-name*—a *function name*. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a *lambda list*; for <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, it is an *ordinary lambda list*; for <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>, it is a *macro lambda list*. 



*local-declaration*—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*local-documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



*local-forms*, <ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, and <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> define local <ClLinks  term={"function"}><i>functions</i></ClLinks> and <ClLinks  term={"macro"}><i>macros</i></ClLinks>, and execute <ClLinks  term={"form"}><i>forms</i></ClLinks> using the local definitions. <ClLinks  term={"form"}><i>Forms</i></ClLinks> are executed in order of occurrence. 



The body forms (but not the *lambda list*) of each <ClLinks  term={"function"}><i>function</i></ClLinks> created by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> and each <ClLinks  term={"macro"}><i>macro</i></ClLinks> created by <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> are enclosed in an *implicit block* whose name is the *function block name* of the *function-name* or <ClLinks  term={"name"}><i>name</i></ClLinks>, as appropriate. 



The scope of the <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> between the list of local function/macro definitions and the body <ClLinks  term={"form"}><i>forms</i></ClLinks> in <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> does not include the bodies of the locally defined <ClLinks  term={"function"}><i>functions</i></ClLinks>, except that 















**flet, labels, macrolet** 



for <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, any <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, or <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations that refer to the locally defined functions do apply to the local function bodies. That is, their <ClLinks  term={"scope"}><i>scope</i></ClLinks> is the same as the function name that they affect. The scope of these <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> does not include the bodies of the macro expander functions defined by <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>. 



<DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> 



<DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> defines locally named <ClLinks  term={"function"}><i>functions</i></ClLinks> and executes a series of <ClLinks  term={"form"}><i>forms</i></ClLinks> with these definition <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. Any number of such local <ClLinks  term={"function"}><i>functions</i></ClLinks> can be defined. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the name <ClLinks  term={"binding"}><i>binding</i></ClLinks> encompasses only the body. Within the body of <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, *function-names* matching those defined by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> refer to the locally defined <ClLinks  term={"function"}><i>functions</i></ClLinks> rather than to the global function definitions of the same name. Also, within the scope of <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, global *setf expander* definitions of the *function-name* defined by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> do not apply. Note that this applies to (defsetf *f* ...), not (defmethod (setf *f*) ...). 



The names of <ClLinks  term={"function"}><i>functions</i></ClLinks> defined by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> are in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>; they retain their local definitions only within the body of <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>. The function definition bindings are visible only in the body of <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, not the definitions themselves. Within the function definitions, 



local function names that match those being defined refer to <ClLinks  term={"function"}><i>functions</i></ClLinks> or <ClLinks  term={"macro"}><i>macros</i></ClLinks> defined outside the <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>. <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> can locally <ClLinks  term={"shadow"}><i>shadow</i></ClLinks> a global function name, and the new definition can refer to the global definition. 



Any *local-documentation* is attached to the corresponding local <ClLinks  term={"function"}><i>function</i></ClLinks> (if one is actually created) as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



<DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> 



<DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> is equivalent to <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> except that the scope of the defined function names for <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> encompasses the function definitions themselves as well as the body. 



<DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> 



<DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> establishes local <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions, using the same format used by <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>. 



Within the body of <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>, global <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> definitions of the <ClLinks  term={"name"}><i>names</i></ClLinks> defined by the <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> do not apply; rather, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> expands the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> and recursively process the resulting <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The macro-expansion functions defined by <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> are defined in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> form appears. Declarations and <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> and <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> definitions affect the local macro definitions in a <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>, but the consequences are undefined if the local macro definitions reference any local <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *function bindings* that are visible in that <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



Any *local-documentation* is attached to the corresponding local <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



Data and Control 











<DictionaryLink styled={true} term={"flet, labels, macrolet"}><b>flet, labels, macrolet</b></DictionaryLink> 



**Examples:**
```lisp
(defun foo (x flag) 
  (macrolet ((fudge (z) 
					;The parameters x and flag are not accessible 
					; at this point; a reference to flag would be to 
					; the global variable of that name. 
	       ‘(if flag (\* ,z ,z) ,z))) 
					;The parameters x and flag are accessible here. 
    (+ x 
       (fudge x) 
       (fudge (+ x 1))))) 
*≡* 
(defun foo (x flag) 
  (+ x 
     (if flag (\* x x) x) 
     (if flag (\* (+ x 1) (+ x 1)) (+ x 1)))) 
after macro expansion. The occurrences of x and flag legitimately refer to the parameters of the function foo because those parameters are visible at the site of the macro call which produced the expansion. 
(flet ((flet1 (n) (+ n n))) 
  (flet ((flet1 (n) (+ 2 (flet1 n)))) 
    (flet1 2))) → 6 
(defun dummy-function () ’top-level) → DUMMY-FUNCTION 
(funcall #’dummy-function) → TOP-LEVEL 
(flet ((dummy-function () ’shadow)) 
  (funcall #’dummy-function)) → SHADOW 
(eq (funcall #’dummy-function) (funcall ’dummy-function)) 
→ true 
(flet ((dummy-function () ’shadow)) 
  (eq (funcall #’dummy-function) 
      (funcall ’dummy-function))) 
→ false 
(defun recursive-times (k n) 
  (labels ((temp (n) 
	     (if (zerop n) 0 (+ k (temp (1- n)))))) 
    (temp n))) → RECURSIVE-TIMES 
(recursive-times 2 3) → 6 
(defmacro mlets (x &environment env) 
  (let ((form ‘(babbit ,x))) 
    (macroexpand form env))) → MLETS 

**flet, labels, macrolet** 
(macrolet ((babbit (z) ‘(+ ,z ,z))) (mlets 5)) → 10 
(flet ((safesqrt (x) (sqrt (abs x)))) 
  ;; The safesqrt function is used in two places. 
  (safesqrt (apply #’+ (map ’list #’safesqrt ’(1 2 3 4 5 6))))) 
→ 3.291173 
(defun integer-power (n k) 
  (declare (integer n)) 
  (declare (type (integer 0 \*) k)) 
  (labels ((expt0 (x k a) 
	     (declare (integer x a) (type (integer 0 \*) k)) 
	     (cond ((zerop k) a) 
		   ((evenp k) (expt1 (\* x x) (floor k 2) a)) 
		   (t (expt0 (\* x x) (floor k 2) (\* x a))))) 
	   (expt1 (x k a) 
	     (declare (integer x a) (type (integer 0 \*) k)) 
	     (cond ((evenp k) (expt1 (\* x x) (floor k 2) a)) 
		   (t (expt0 (\* x x) (floor k 2) (\* x a)))))) 
    (expt0 n k 1))) → INTEGER-POWER 
(defun example (y l) 
  (flet ((attach (x) 
	   (setq l (append l (list x))))) 
    (declare (inline attach)) 
    (dolist (x y) 
      (unless (null (cdr x)) 
	(attach x))) 
    l)) 
(example ’((a apple apricot) (b banana) (c cherry) (d) (e)) 
	  ’((1) (2) (3) (4 2) (5) (6 3 2))) 
→ ((1) (2) (3) (4 2) (5) (6 3 2) (A APPLE APRICOT) (B BANANA) (C CHERRY)) 
```
**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink>, **documentation**, <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, Section 3.1 (Evaluation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



It is not possible to define recursive <ClLinks  term={"function"}><i>functions</i></ClLinks> with <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>. <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> can be used to define mutually recursive <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



If a <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the body <ClLinks  term={"form"}><i>forms</i></ClLinks> are also processed as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. See Section 3.2.3 (File Compilation). 



Data and Control 











