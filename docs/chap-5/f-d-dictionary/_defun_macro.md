**defun** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> *function-name lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ function-name* 



**Arguments and Values:** 



*function-name*—a *function name*. 



*lambda-list*—an *ordinary lambda list*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*block-name*—the *function block name* of the *function-name*. 



**Description:** 



Defines a new <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> named *function-name* in the *global environment*. The body of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> defined by <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> consists of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; they are executed as an *implicit progn* when the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called. <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> can be used to define a new <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, to install a corrected version of an incorrect definition, to redefine an already-defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or to redefine a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> implicitly puts a <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> named *block-name* around the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (but not the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the *lambda-list*) of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> defined. 



*Documentation* is attached as a *documentation string* to <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (as kind <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) and to the *function object*. 



Evaluating <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> causes *function-name* to be a global name for the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> specified by the *lambda expression* 



(lambda *lambda-list* 



[[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] 



(block *block-name \{form\}*\*)) 



processed in the *lexical environment* in which <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> was executed. 



Data and Control 











<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> 



(None of the arguments are evaluated at macro expansion time.) 



<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> is not required to perform any compile-time side effects. In particular, <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> does not make the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition available at compile time. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may choose to store information about the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> for the purposes of compile-time error-checking (such as checking the number of arguments on calls), or to enable the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be expanded inline. 



**Examples:**
```lisp

(defun recur (x) 
  (when (> x 0) 
    (recur (1- x)))) *→* RECUR 
(defun ex (a b &optional c (d 66) &rest keys &key test (start 0)) 
  (list a b c d keys test start)) *→* EX 
(ex 1 2) *→* (1 2 NIL 66 NIL NIL 0) 
(ex 1 2 3 4 :test ’equal :start 50) 
*→* (1 2 3 4 (:TEST EQUAL :START 50) EQUAL 50) 
(ex :test 1 :start 2) *→* (:TEST 1 :START 2 NIL NIL 0) 
;; This function assumes its callers have checked the types of the 
;; arguments, and authorizes the compiler to build in that assumption. 
(defun discriminant (a b c) 
  (declare (number a b c)) 
  "Compute the discriminant for a quadratic equation." 
  (- (\* b b) (\* 4 a c))) *→* DISCRIMINANT 
(discriminant 1 2/3 -2) *→* 76/9 
;; This function assumes its callers have not checked the types of the 
;; arguments, and performs explicit type checks before making any assumptions. (defun careful-discriminant (a b c) 
"Compute the discriminant for a quadratic equation." 
(check-type a number) 
(check-type b number) 
(check-type c number) 
(locally (declare (number a b c)) 
  (- (\* b b) (\* 4 a c)))) *→* CAREFUL-DISCRIMINANT 
(careful-discriminant 1 2/3 -2) *→* 76/9 

```
**See Also:** 



<DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, **documentation**, Section 3.1 (Evaluation), Section 3.4.1 (Ordinary Lambda Lists), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> can be used to return prematurely from a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> defined by <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink>. 











Additional side effects might take place when additional information (typically debugging information) about the function definition is recorded. 



