**defun** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> *function-name lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ function-name 



**Arguments and Values:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



*lambda-list*—an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*block-name*—the <GlossaryTerm styled={true} term={"function block name"}><i>function block name</i></GlossaryTerm> of the *function-name*. 



**Description:** 



Defines a new <ClLinks  term={"function"}><i>function</i></ClLinks> named *function-name* in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The body of the <ClLinks  term={"function"}><i>function</i></ClLinks> defined by <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> consists of <ClLinks  term={"form"}><i>forms</i></ClLinks>; they are executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm> when the <ClLinks  term={"function"}><i>function</i></ClLinks> is called. <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> can be used to define a new <ClLinks  term={"function"}><i>function</i></ClLinks>, to install a corrected version of an incorrect definition, to redefine an already-defined <ClLinks  term={"function"}><i>function</i></ClLinks>, or to redefine a <ClLinks  term={"macro"}><i>macro</i></ClLinks> as a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> implicitly puts a <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> named *block-name* around the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <ClLinks  term={"form"}><i>forms</i></ClLinks> in the *lambda-list*) of the <ClLinks  term={"function"}><i>function</i></ClLinks> defined. 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to <ClLinks  term={"name"}><i>name</i></ClLinks> (as kind <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>) and to the *function object*. 



Evaluating <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> causes *function-name* to be a global name for the <ClLinks  term={"function"}><i>function</i></ClLinks> specified by the <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> 



(lambda *lambda-list* 



[[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] 



(block *block-name \{form\}*\*)) 



processed in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> was executed. 



Data and Control 











<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> 



(None of the arguments are evaluated at macro expansion time.) 



<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> is not required to perform any compile-time side effects. In particular, <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> does not make the <ClLinks  term={"function"}><i>function</i></ClLinks> definition available at compile time. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may choose to store information about the <ClLinks  term={"function"}><i>function</i></ClLinks> for the purposes of compile-time error-checking (such as checking the number of arguments on calls), or to enable the <ClLinks  term={"function"}><i>function</i></ClLinks> to be expanded inline. 



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



<DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, **documentation**, Section 3.1 (Evaluation), Section 3.4.1 (Ordinary Lambda Lists), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> can be used to return prematurely from a <ClLinks  term={"function"}><i>function</i></ClLinks> defined by <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink>. 











Additional side effects might take place when additional information (typically debugging information) about the function definition is recorded. 



