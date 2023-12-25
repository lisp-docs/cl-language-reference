**defun** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defun"}><b>defun</b></ClLinks> *function-name lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ function-name 



**Arguments and Values:** 



*function-name*—a *function name*. 



*lambda-list*—an *ordinary lambda list*. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*block-name*—the *function block name* of the *function-name*. 



**Description:** 



Defines a new <ClLinks  term={"function"}><i>function</i></ClLinks> named *function-name* in the *global environment*. The body of the <ClLinks  term={"function"}><i>function</i></ClLinks> defined by <ClLinks  term={"defun"}><b>defun</b></ClLinks> consists of <ClLinks  term={"form"}><i>forms</i></ClLinks>; they are executed as an *implicit progn* when the <ClLinks  term={"function"}><i>function</i></ClLinks> is called. <ClLinks  term={"defun"}><b>defun</b></ClLinks> can be used to define a new <ClLinks  term={"function"}><i>function</i></ClLinks>, to install a corrected version of an incorrect definition, to redefine an already-defined <ClLinks  term={"function"}><i>function</i></ClLinks>, or to redefine a <ClLinks  term={"macro"}><i>macro</i></ClLinks> as a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



<ClLinks  term={"defun"}><b>defun</b></ClLinks> implicitly puts a <ClLinks  term={"block"}><b>block</b></ClLinks> named *block-name* around the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <ClLinks  term={"form"}><i>forms</i></ClLinks> in the *lambda-list*) of the <ClLinks  term={"function"}><i>function</i></ClLinks> defined. 



*Documentation* is attached as a *documentation string* to <ClLinks  term={"name"}><i>name</i></ClLinks> (as kind <ClLinks  term={"function"}><b>function</b></ClLinks>) and to the *function object*. 



Evaluating <ClLinks  term={"defun"}><b>defun</b></ClLinks> causes *function-name* to be a global name for the <ClLinks  term={"function"}><i>function</i></ClLinks> specified by the *lambda expression* 



(lambda *lambda-list* 



[[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] 



(block *block-name \{form\}*\*)) 



processed in the *lexical environment* in which <ClLinks  term={"defun"}><b>defun</b></ClLinks> was executed. 



Data and Control 











<ClLinks  term={"defun"}><b>defun</b></ClLinks> 



(None of the arguments are evaluated at macro expansion time.) 



<ClLinks  term={"defun"}><b>defun</b></ClLinks> is not required to perform any compile-time side effects. In particular, <ClLinks  term={"defun"}><b>defun</b></ClLinks> does not make the <ClLinks  term={"function"}><i>function</i></ClLinks> definition available at compile time. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may choose to store information about the <ClLinks  term={"function"}><i>function</i></ClLinks> for the purposes of compile-time error-checking (such as checking the number of arguments on calls), or to enable the <ClLinks  term={"function"}><i>function</i></ClLinks> to be expanded inline. 



**Examples:**
```lisp
(defun recur (x) 
  (when (> x 0) 
    (recur (1- x)))) → RECUR 
(defun ex (a b &optional c (d 66) &rest keys &key test (start 0)) 
  (list a b c d keys test start)) → EX 
(ex 1 2) → (1 2 NIL 66 NIL NIL 0) 
(ex 1 2 3 4 :test ’equal :start 50) 
→ (1 2 3 4 (:TEST EQUAL :START 50) EQUAL 50) 
(ex :test 1 :start 2) → (:TEST 1 :START 2 NIL NIL 0) 
;; This function assumes its callers have checked the types of the 
;; arguments, and authorizes the compiler to build in that assumption. 
(defun discriminant (a b c) 
  (declare (number a b c)) 
  "Compute the discriminant for a quadratic equation." 
  (- (\* b b) (\* 4 a c))) → DISCRIMINANT 
(discriminant 1 2/3 -2) → 76/9 
;; This function assumes its callers have not checked the types of the 
;; arguments, and performs explicit type checks before making any assumptions. (defun careful-discriminant (a b c) 
"Compute the discriminant for a quadratic equation." 
(check-type a number) 
(check-type b number) 
(check-type c number) 
(locally (declare (number a b c)) 
  (- (\* b b) (\* 4 a c)))) → CAREFUL-DISCRIMINANT 
(careful-discriminant 1 2/3 -2) → 76/9 
```
**See Also:** 



<ClLinks  term={"flet"}><b>flet</b></ClLinks>, <ClLinks  term={"labels"}><b>labels</b></ClLinks>, <ClLinks  term={"block"}><b>block</b></ClLinks>, <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, <ClLinks  term={"declare"}><b>declare</b></ClLinks>, **documentation**, Section 3.1 (Evaluation), Section 3.4.1 (Ordinary Lambda Lists), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<ClLinks  term={"return-from"}><b>return-from</b></ClLinks> can be used to return prematurely from a <ClLinks  term={"function"}><i>function</i></ClLinks> defined by <ClLinks  term={"defun"}><b>defun</b></ClLinks>. 











Additional side effects might take place when additional information (typically debugging information) about the function definition is recorded. 



