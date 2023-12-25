**assert** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> *test-form* [(<GlossaryTerm styled={true} term={"place"}><i>\{place\}</i></GlossaryTerm>\*) [*datum-form \{argument-form\}*\*]] 



*→* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*test-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; always evaluated. 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>; evaluated if an error is signaled. 



*datum-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to a *datum*. Evaluated each time an error is to be signaled, or not at all if no error is to be signaled. 



*argument-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. Evaluated each time an error is to be signaled, or not at all if no error is to be signaled. 



*datum*, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. (These <GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> are the result of evaluating *datum-form* and each of the *argument-forms*.) 







 



 



<DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> assures that *test-form* evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. If *test-form* evaluates to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> signals a *correctable error* (denoted by *datum* and <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>). Continuing from this error using the **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> makes it possible for the user to alter the values of the <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> before <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> evaluates *test-form* again. If the value of *test-form* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> are *generalized references* to data upon which *test-form* depends, whose values can be changed by the user in attempting to correct the error. <GlossaryTerm styled={true} term={"subform"}><i>Subforms</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are only evaluated if an error is signaled, and might be re-evaluated if the error is re-signaled (after continuing without actually fixing the problem). The order of evaluation of the <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> is not specified; see Section 5.1.1.1 (Evaluation of Subforms to Places). If a *place form* is supplied that produces more values than there are store variables, the extra values are ignored. If the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> produces fewer values than there are store variables, the missing values are set to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(setq x (make-array ’(3 5) :initial-element 3)) 
*→* #2A((3 3 3 3 3) (3 3 3 3 3) (3 3 3 3 3)) 
(setq y (make-array ’(3 5) :initial-element 7)) 
*→* #2A((7 7 7 7 7) (7 7 7 7 7) (7 7 7 7 7)) 
(defun matrix-multiply (a b) 
  (let ((\*print-array\* nil)) 
    (assert (and (= (array-rank a) (array-rank b) 2) 
		 (= (array-dimension a 1) (array-dimension b 0))) 
	    (a b) 
	    "Cannot multiply ~S by ~S." a b) 
    (really-matrix-multiply a b))) *→* MATRIX-MULTIPLY 
(matrix-multiply x y) 
▷ Correctable error in MATRIX-MULTIPLY: 
▷ Cannot multiply #<ARRAY ...> by #<ARRAY ...>. 
▷ Restart options: 
▷ 1: You will be prompted for one or more new values. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Value for A: x 
▷ Value for B: (make-array ’(5 3) :initial-element 6) 
*→* #2A((54 54 54 54 54) 
	(54 54 54 54 54) 
	(54 54 54 54 54) 
	(54 54 54 54 54) 
	(54 54 54 54 54)) 
(defun double-safely (x) (assert (numberp x) (x)) (+ x x)) 
(double-safely 4) 
*→* 8 



(double-safely t) 
▷ Correctable error in DOUBLE-SAFELY: The value of (NUMBERP X) must be non-NIL. ▷ Restart options: 
▷ 1: You will be prompted for one or more new values. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Value for X: 7 
*→* 14 

```
**Affected By:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



The set of active *condition handlers*. 



**See Also:** 



<DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



The debugger need not include the *test-form* in the error message, and the <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> should not be included in the message, but they should be made available for the user’s perusal. If the user gives the “continue” command, the values of any of the references can be altered. The details of this depend on the implementation’s style of user interface. 



