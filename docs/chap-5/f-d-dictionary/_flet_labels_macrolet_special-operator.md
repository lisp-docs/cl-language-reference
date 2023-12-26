**flet, labels, macrolet** *Special Operator* 



**Syntax:** 



<ClLinks  term={"flet"}><b>flet</b></ClLinks> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



<ClLinks  term={"labels"}><b>labels</b></ClLinks> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



<ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> (*\{*(*name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*function-name*—a *function name*. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a *lambda list*; for <ClLinks  term={"flet"}><b>flet</b></ClLinks> and <ClLinks  term={"labels"}><b>labels</b></ClLinks>, it is an *ordinary lambda list*; for <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, it is a *macro lambda list*. 



*local-declaration*—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*local-documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



*local-forms*, <ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"flet"}><b>flet</b></ClLinks>, <ClLinks  term={"labels"}><b>labels</b></ClLinks>, and <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> define local <ClLinks  term={"function"}><i>functions</i></ClLinks> and <ClLinks  term={"macro"}><i>macros</i></ClLinks>, and execute <ClLinks  term={"form"}><i>forms</i></ClLinks> using the local definitions. <ClLinks  term={"form"}><i>Forms</i></ClLinks> are executed in order of occurrence. 



The body forms (but not the *lambda list*) of each <ClLinks  term={"function"}><i>function</i></ClLinks> created by <ClLinks  term={"flet"}><b>flet</b></ClLinks> and <ClLinks  term={"labels"}><b>labels</b></ClLinks> and each <ClLinks  term={"macro"}><i>macro</i></ClLinks> created by <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> are enclosed in an *implicit block* whose name is the *function block name* of the *function-name* or <ClLinks  term={"name"}><i>name</i></ClLinks>, as appropriate. 



The scope of the <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> between the list of local function/macro definitions and the body <ClLinks  term={"form"}><i>forms</i></ClLinks> in <ClLinks  term={"flet"}><b>flet</b></ClLinks> and <ClLinks  term={"labels"}><b>labels</b></ClLinks> does not include the bodies of the locally defined <ClLinks  term={"function"}><i>functions</i></ClLinks>, except that 















**flet, labels, macrolet** 



for <ClLinks  term={"labels"}><b>labels</b></ClLinks>, any <ClLinks  term={"inline"}><b>inline</b></ClLinks>, <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>, or <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> declarations that refer to the locally defined functions do apply to the local function bodies. That is, their <ClLinks  term={"scope"}><i>scope</i></ClLinks> is the same as the function name that they affect. The scope of these <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> does not include the bodies of the macro expander functions defined by <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>. 



<ClLinks  term={"flet"}><b>flet</b></ClLinks> 



<ClLinks  term={"flet"}><b>flet</b></ClLinks> defines locally named <ClLinks  term={"function"}><i>functions</i></ClLinks> and executes a series of <ClLinks  term={"form"}><i>forms</i></ClLinks> with these definition <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. Any number of such local <ClLinks  term={"function"}><i>functions</i></ClLinks> can be defined. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the name <ClLinks  term={"binding"}><i>binding</i></ClLinks> encompasses only the body. Within the body of <ClLinks  term={"flet"}><b>flet</b></ClLinks>, *function-names* matching those defined by <ClLinks  term={"flet"}><b>flet</b></ClLinks> refer to the locally defined <ClLinks  term={"function"}><i>functions</i></ClLinks> rather than to the global function definitions of the same name. Also, within the scope of <ClLinks  term={"flet"}><b>flet</b></ClLinks>, global *setf expander* definitions of the *function-name* defined by <ClLinks  term={"flet"}><b>flet</b></ClLinks> do not apply. Note that this applies to (defsetf *f* ...), not (defmethod (setf *f*) ...). 



The names of <ClLinks  term={"function"}><i>functions</i></ClLinks> defined by <ClLinks  term={"flet"}><b>flet</b></ClLinks> are in the *lexical environment*; they retain their local definitions only within the body of <ClLinks  term={"flet"}><b>flet</b></ClLinks>. The function definition bindings are visible only in the body of <ClLinks  term={"flet"}><b>flet</b></ClLinks>, not the definitions themselves. Within the function definitions, 



local function names that match those being defined refer to <ClLinks  term={"function"}><i>functions</i></ClLinks> or <ClLinks  term={"macro"}><i>macros</i></ClLinks> defined outside the <ClLinks  term={"flet"}><b>flet</b></ClLinks>. <ClLinks  term={"flet"}><b>flet</b></ClLinks> can locally <ClLinks  term={"shadow"}><i>shadow</i></ClLinks> a global function name, and the new definition can refer to the global definition. 



Any *local-documentation* is attached to the corresponding local <ClLinks  term={"function"}><i>function</i></ClLinks> (if one is actually created) as a *documentation string*. 



<ClLinks  term={"labels"}><b>labels</b></ClLinks> 



<ClLinks  term={"labels"}><b>labels</b></ClLinks> is equivalent to <ClLinks  term={"flet"}><b>flet</b></ClLinks> except that the scope of the defined function names for <ClLinks  term={"labels"}><b>labels</b></ClLinks> encompasses the function definitions themselves as well as the body. 



<ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> 



<ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> establishes local <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions, using the same format used by <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>. 



Within the body of <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, global *setf expander* definitions of the <ClLinks  term={"name"}><i>names</i></ClLinks> defined by the <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> do not apply; rather, <ClLinks  term={"setf"}><b>setf</b></ClLinks> expands the *macro form* and recursively process the resulting <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The macro-expansion functions defined by <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> are defined in the *lexical environment* in which the <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> form appears. Declarations and <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> and <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> definitions affect the local macro definitions in a <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, but the consequences are undefined if the local macro definitions reference any local <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *function bindings* that are visible in that *lexical environment*. 



Any *local-documentation* is attached to the corresponding local *macro function* as a *documentation string*. 



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



<ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, <ClLinks  term={"defun"}><b>defun</b></ClLinks>, **documentation**, <ClLinks  term={"let"}><b>let</b></ClLinks>, Section 3.1 (Evaluation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



It is not possible to define recursive <ClLinks  term={"function"}><i>functions</i></ClLinks> with <ClLinks  term={"flet"}><b>flet</b></ClLinks>. <ClLinks  term={"labels"}><b>labels</b></ClLinks> can be used to define mutually recursive <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



If a <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is a *top level form*, the body <ClLinks  term={"form"}><i>forms</i></ClLinks> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 



Data and Control 











