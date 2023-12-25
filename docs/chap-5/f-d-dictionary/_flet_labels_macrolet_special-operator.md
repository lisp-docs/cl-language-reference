**flet, labels, macrolet** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



<DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> (*\{*(*function-name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



<DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> (*\{*(*name lambda-list* [[ *\{local-declaration\}*\* *| local-documentation* ]] *\{local-form\}*\*)*\}*\*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*function-name*—a *function name*. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*lambda-list*—a *lambda list*; for <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, it is an *ordinary lambda list*; for <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, it is a *macro lambda list*. 



*local-declaration*—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*local-documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



*local-forms*, <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, and <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> define local <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>, and execute <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> using the local definitions. <GlossaryTerm styled={true} term={"form"}><i>Forms</i></GlossaryTerm> are executed in order of occurrence. 



The body forms (but not the *lambda list*) of each <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> and each <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> are enclosed in an *implicit block* whose name is the *function block name* of the *function-name* or <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, as appropriate. 



The scope of the <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> between the list of local function/macro definitions and the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> and <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> does not include the bodies of the locally defined <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>, except that 















**flet, labels, macrolet** 



for <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, any <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>, or <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declarations that refer to the locally defined functions do apply to the local function bodies. That is, their <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> is the same as the function name that they affect. The scope of these <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> does not include the bodies of the macro expander functions defined by <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> 



<DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> defines locally named <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and executes a series of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> with these definition <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. Any number of such local <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> can be defined. 



The <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the name <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> encompasses only the body. Within the body of <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, *function-names* matching those defined by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> refer to the locally defined <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> rather than to the global function definitions of the same name. Also, within the scope of <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, global *setf expander* definitions of the *function-name* defined by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> do not apply. Note that this applies to (defsetf *f* ...), not (defmethod (setf *f*) ...). 



The names of <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> defined by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> are in the *lexical environment*; they retain their local definitions only within the body of <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>. The function definition bindings are visible only in the body of <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, not the definitions themselves. Within the function definitions, 



local function names that match those being defined refer to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> defined outside the <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>. <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> can locally <GlossaryTerm styled={true} term={"shadow"}><i>shadow</i></GlossaryTerm> a global function name, and the new definition can refer to the global definition. 



Any *local-documentation* is attached to the corresponding local <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (if one is actually created) as a *documentation string*. 



<DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> 



<DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> is equivalent to <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> except that the scope of the defined function names for <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> encompasses the function definitions themselves as well as the body. 



<DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> 



<DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> establishes local <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definitions, using the same format used by <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>. 



Within the body of <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, global *setf expander* definitions of the <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> defined by the <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> do not apply; rather, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> expands the *macro form* and recursively process the resulting <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



The macro-expansion functions defined by <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> are defined in the *lexical environment* in which the <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> form appears. Declarations and <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> and <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> definitions affect the local macro definitions in a <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, but the consequences are undefined if the local macro definitions reference any local <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or *function bindings* that are visible in that *lexical environment*. 



Any *local-documentation* is attached to the corresponding local *macro function* as a *documentation string*. 



Data and Control 











**flet, labels, macrolet** 



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
    (flet1 2))) *→* 6 
(defun dummy-function () ’top-level) *→* DUMMY-FUNCTION 
(funcall #’dummy-function) *→* TOP-LEVEL 
(flet ((dummy-function () ’shadow)) 
  (funcall #’dummy-function)) *→* SHADOW 
(eq (funcall #’dummy-function) (funcall ’dummy-function)) 
*→ true* 
(flet ((dummy-function () ’shadow)) 
  (eq (funcall #’dummy-function) 
      (funcall ’dummy-function))) 
*→ false* 
(defun recursive-times (k n) 
  (labels ((temp (n) 
	     (if (zerop n) 0 (+ k (temp (1- n)))))) 
    (temp n))) *→* RECURSIVE-TIMES 
(recursive-times 2 3) *→* 6 
(defmacro mlets (x &environment env) 
  (let ((form ‘(babbit ,x))) 
    (macroexpand form env))) *→* MLETS 



**flet, labels, macrolet** 
(macrolet ((babbit (z) ‘(+ ,z ,z))) (mlets 5)) *→* 10 
(flet ((safesqrt (x) (sqrt (abs x)))) 
  ;; The safesqrt function is used in two places. 
  (safesqrt (apply #’+ (map ’list #’safesqrt ’(1 2 3 4 5 6))))) 
*→* 3.291173 
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
    (expt0 n k 1))) *→* INTEGER-POWER 
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
*→* ((1) (2) (3) (4 2) (5) (6 3 2) (A APPLE APRICOT) (B BANANA) (C CHERRY)) 

```
**See Also:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink>, **documentation**, <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, Section 3.1 (Evaluation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



It is not possible to define recursive <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> with <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>. <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> can be used to define mutually recursive <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



If a <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *top level form*, the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 



Data and Control 











