**typecase, ctypecase, etypecase** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> *keyform \{↓normal-clause\}*\* [*↓otherwise-clause*] → \{result\}\* 



<DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> *keyplace \{↓normal-clause\}*\* → \{result\}\* 















**typecase, ctypecase, etypecase** 



<DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> *keyform \{↓normal-clause\}*\* → \{result\}\* 



*normal-clause::*=(*type \{form\}*\*) 



*otherwise-clause::*=(*\{otherwise | t\} \{form\}*\*) 



*clause::*=*normal-clause | otherwise-clause* 



**Arguments and Values:** 



*keyform*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a *test-key*. 



*keyplace*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated initially to produce a *test-key*. Possibly also used later as a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> if no <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> match. 



*test-key*—an object produced by evaluating *keyform* or *keyplace*. 



<GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>—a *type specifier* . 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in the matching *clause*. 



**Description:** 



These <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> allow the conditional execution of a body of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in a *clause* that is selected by matching the *test-key* on the basis of its <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



The *keyform* or *keyplace* is *evaluated* to produce the *test-key*. 



Each of the *normal-clauses* is then considered in turn. If the *test-key* is of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> given by the *clauses*’s <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that *clause* are *evaluated* as an *implicit progn*, and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the value of the <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink>, <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, or <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



These <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> differ only in their *behavior* when no *normal-clause* matches; specifically: 



<DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> 



If no *normal-clause* matches, and there is an *otherwise-clause*, then that *otherwise-clause* automatically matches; the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that *clause* are *evaluated* as an *implicit progn*, and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the value of the <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink>. 



If there is no *otherwise-clause*, <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> 



If no *normal-clause* matches, a *correctable error* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (or *type1 type2* ...). The **store-value** <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> can be used to correct the error. 



If the **store-value** <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> is invoked, its <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> becomes the new *test-key*, and is stored Data and Control 











**typecase, ctypecase, etypecase** 



in *keyplace* as if by (setf *keyplace test-key*). Then <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> starts over, considering each *clause* anew. 



If the **store-value** <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> is invoked interactively, the user is prompted for a new *test-key* to use. 



The subforms of *keyplace* might be evaluated again if none of the cases holds. 



<DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> 



If no *normal-clause* matches, a *non-correctable error* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. The offending datum is the *test-key* and the expected type is <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to (or *type1 type2* ...). 



Note that in contrast with <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, the caller of <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> may rely on the fact that <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> does not return if a *normal-clause* does not match. 



In all three cases, is permissible for more than one *clause* to specify a matching <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, particularly if one is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of another; the earliest applicable *clause* is chosen. 



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



<DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> and <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink>, since they might signal an error, are potentially a↵ected by existing <GlossaryTerm  term={"handler"}><i>handlers</i></GlossaryTerm> and **\*debug-io\***. 



**Exceptional Situations:** 



<DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> and <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if no *normal-clause* matches. 



The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> may choose to issue a warning of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink> if a *clause* will never be selected because it is completely shadowed by earlier clauses. 



**See Also:** 



<DictionaryLink  term={"case"}><b>case</b></DictionaryLink>, <DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



(typecase *test-key* 



*\{*(*type \{form\}*\*)*\}*\*) 



*⌘* 



(let ((#1=#:g0001 *test-key*)) 



(cond *\{*((typep #1# ’<GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*)*\}*\*)) 



The specific error message used by <DictionaryLink  term={"etypecase"}><b>etypecase</b></DictionaryLink> and <DictionaryLink  term={"ctypecase"}><b>ctypecase</b></DictionaryLink> can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink> with an *otherwise-clause* that explicitly signals an error with an appropriate message. 



