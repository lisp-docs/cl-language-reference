**typecase, ctypecase, etypecase** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks> *keyform \{↓normal-clause\}*\* [*↓otherwise-clause*] → \{result\}\* 



<ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> *keyplace \{↓normal-clause\}*\* → \{result\}\* 















**typecase, ctypecase, etypecase** 



<ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> *keyform \{↓normal-clause\}*\* → \{result\}\* 



*normal-clause::*=(*type \{form\}*\*) 



*otherwise-clause::*=(*\{otherwise | t\} \{form\}*\*) 



*clause::*=*normal-clause | otherwise-clause* 



**Arguments and Values:** 



*keyform*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce a *test-key*. 



*keyplace*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated initially to produce a *test-key*. Possibly also used later as a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> if no <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> match. 



*test-key*—an object produced by evaluating *keyform* or *keyplace*. 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>—a *type specifier* . 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in the matching *clause*. 



**Description:** 



These <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> allow the conditional execution of a body of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a *clause* that is selected by matching the *test-key* on the basis of its <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



The *keyform* or *keyplace* is *evaluated* to produce the *test-key*. 



Each of the *normal-clauses* is then considered in turn. If the *test-key* is of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given by the *clauses*’s <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in that *clause* are *evaluated* as an *implicit progn*, and the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> it returns are returned as the value of the <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks>, <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, or <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



These <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> differ only in their *behavior* when no *normal-clause* matches; specifically: 



<ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks> 



If no *normal-clause* matches, and there is an *otherwise-clause*, then that *otherwise-clause* automatically matches; the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in that *clause* are *evaluated* as an *implicit progn*, and the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> it returns are returned as the value of the <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks>. 



If there is no *otherwise-clause*, <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> 



If no *normal-clause* matches, a *correctable error* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (or *type1 type2* ...). The **store-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> can be used to correct the error. 



If the **store-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked, its <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> becomes the new *test-key*, and is stored Data and Control 











**typecase, ctypecase, etypecase** 



in *keyplace* as if by (setf *keyplace test-key*). Then <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> starts over, considering each *clause* anew. 



If the **store-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked interactively, the user is prompted for a new *test-key* to use. 



The subforms of *keyplace* might be evaluated again if none of the cases holds. 



<ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> 



If no *normal-clause* matches, a *non-correctable error* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (or *type1 type2* ...). 



Note that in contrast with <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, the caller of <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> may rely on the fact that <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> does not return if a *normal-clause* does not match. 



In all three cases, is permissible for more than one *clause* to specify a matching <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, particularly if one is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of another; the earliest applicable *clause* is chosen. 



**Examples:**
```lisp

;;; (Note that the parts of this example which use TYPE-OF 
;;; are implementation-dependent.) 
(defun what-is-it (x) 
  (format t "~&~S is ~A.~%" 
	  x (typecase x 
	      (float "a float") 
	      (null "a symbol, boolean false, or the empty list") 
	      (list "a list") 
	      (t (format nil "a(n) ~(~A~)" (type-of x)))))) 
→ WHAT-IS-IT 
(map ’nil #’what-is-it ’(nil (a b) 7.0 7 box)) 
▷ NIL is a symbol, boolean false, or the empty list. 
▷ (A B) is a list. 
▷ 7.0 is a float. 
▷ 7 is a(n) integer. 
▷ BOX is a(n) symbol. 
→ NIL 
(setq x 1/3) 
→ 1/3 
(ctypecase x 
  (integer (\* x 4)) 
  (symbol (symbol-value x))) 
▷ Error: The value of X, 1/3, is neither an integer nor a symbol. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 



▷ 2: Return to Lisp Toplevel. 
▷ Debug> :CONTINUE 1 
▷ Use value: 3.7 
▷ Error: The value of X, 3.7, is neither an integer nor a symbol. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> :CONTINUE 1 
▷ Use value: 12 
*!* 48 
x *!* 12 

```
**Aected By:** 



<ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> and <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks>, since they might signal an error, are potentially a↵ected by existing <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> and **\*debug-io\***. 



**Exceptional Situations:** 



<ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> and <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if no *normal-clause* matches. 



The <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> may choose to issue a warning of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks> if a *clause* will never be selected because it is completely shadowed by earlier clauses. 



**See Also:** 



<ClLinks styled={true} term={"case"}><b>case</b></ClLinks>, <ClLinks styled={true} term={"cond"}><b>cond</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, Section 5.1 (Generalized Reference) 



**Notes:** 



(typecase *test-key* 



*\{*(*type \{form\}*\*)*\}*\*) 



*⌘* 



(let ((#1=#:g0001 *test-key*)) 



(cond *\{*((typep #1# ’<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*)*\}*\*)) 



The specific error message used by <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks> and <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks> can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks> with an *otherwise-clause* that explicitly signals an error with an appropriate message. 



