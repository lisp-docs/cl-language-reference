**case, ccase, ecase** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"case"}><b>case</b></ClLinks> *keyform \{↓normal-clause\}*\* [*↓otherwise-clause*] → \{result\}\* 



<ClLinks  term={"ccase"}><b>ccase</b></ClLinks> *keyplace \{↓normal-clause\}*\* → \{result\}\* 



<ClLinks  term={"ecase"}><b>ecase</b></ClLinks> *keyform \{↓normal-clause\}*\* → \{result\}\* 



*normal-clause::*=(*keys \{form\}*\*) 



*otherwise-clause::*=(*\{otherwise | t\} \{form\}*\*) 



*clause::*=*normal-clause | otherwise-clause* 



**Arguments and Values:** 



*keyform*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated to produce a *test-key*. 



*keyplace*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated initially to produce a *test-key*. Possibly also used later as a <ClLinks  term={"place"}><i>place</i></ClLinks> if no <ClLinks  term={"key"}><i>keys</i></ClLinks> match. 



*test-key*—an object produced by evaluating *keyform* or *keyplace*. 



<ClLinks  term={"key"}><i>keys</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"object"}><i>objects</i></ClLinks>. In the case of <ClLinks  term={"case"}><b>case</b></ClLinks>, the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> and **otherwise** may not be used as the *keys designator* . To refer to these <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> by themselves as <ClLinks  term={"key"}><i>keys</i></ClLinks>, the designators (t) and (otherwise), respectively, must be used instead. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks> in the matching *clause*. 



**Description:** 



These <ClLinks  term={"macro"}><i>macros</i></ClLinks> allow the conditional execution of a body of <ClLinks  term={"form"}><i>forms</i></ClLinks> in a *clause* that is selected by matching the *test-key* on the basis of its identity. 



The *keyform* or *keyplace* is *evaluated* to produce the *test-key*. 



Each of the *normal-clauses* is then considered in turn. If the *test-key* is the <ClLinks  term={"same"}><i>same</i></ClLinks> as any <ClLinks  term={"key"}><i>key</i></ClLinks> for that *clause*, the <ClLinks  term={"form"}><i>forms</i></ClLinks> in that *clause* are *evaluated* as an *implicit progn*, and the <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are returned as the value of the <ClLinks  term={"case"}><b>case</b></ClLinks>, <ClLinks  term={"ccase"}><b>ccase</b></ClLinks>, or <ClLinks  term={"ecase"}><b>ecase</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



These <ClLinks  term={"macro"}><i>macros</i></ClLinks> differ only in their *behavior* when no *normal-clause* matches; specifically: <ClLinks  term={"case"}><b>case</b></ClLinks> 



If no *normal-clause* matches, and there is an *otherwise-clause*, then that *otherwise-clause* 











**case, ccase, ecase** 



automatically matches; the <ClLinks  term={"form"}><i>forms</i></ClLinks> in that *clause* are *evaluated* as an *implicit progn*, and the <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are returned as the value of the <ClLinks  term={"case"}><b>case</b></ClLinks>. 



If there is no *otherwise-clause*, <ClLinks  term={"case"}><b>case</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"ccase"}><b>ccase</b></ClLinks> 



If no *normal-clause* matches, a *correctable error* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (member *key1 key2* ...). The **store-value** <ClLinks  term={"restart"}><i>restart</i></ClLinks> can be used to correct the error. 



If the **store-value** <ClLinks  term={"restart"}><i>restart</i></ClLinks> is invoked, its <ClLinks  term={"argument"}><i>argument</i></ClLinks> becomes the new *test-key*, and is stored in *keyplace* as if by (setf *keyplace test-key*). Then <ClLinks  term={"ccase"}><b>ccase</b></ClLinks> starts over, considering each *clause* anew. 



The subforms of *keyplace* might be evaluated again if none of the cases holds. 



<ClLinks  term={"ecase"}><b>ecase</b></ClLinks> 



If no *normal-clause* matches, a *non-correctable error* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (member *key1 key2* ...). 



Note that in contrast with <ClLinks  term={"ccase"}><b>ccase</b></ClLinks>, the caller of <ClLinks  term={"ecase"}><b>ecase</b></ClLinks> may rely on the fact that <ClLinks  term={"ecase"}><b>ecase</b></ClLinks> does not return if a *normal-clause* does not match. 



**Examples:**
```lisp
(dolist (k ’(1 2 3 :four #\v () t ’other)) 
  (format t "~S " 
	  (case k ((1 2) ’clause1) 
		(3 ’clause2) 
		(nil ’no-keys-so-never-seen) 
		((nil) ’nilslot) 
		((:four #\v) ’clause4) 
		((t) ’tslot) 
		(otherwise ’others)))) 
▷ CLAUSE1 CLAUSE1 CLAUSE2 CLAUSE4 CLAUSE4 NILSLOT TSLOT OTHERS 
→ NIL 
(defun add-em (x) (apply #’+ (mapcar #’decode x))) 
→ ADD-EM 
(defun decode (x) 
  (ccase x 
    ((i uno) 1) 
    ((ii dos) 2) 
    ((iii tres) 3) 
    ((iv cuatro) 4))) 
→ DECODE 
Data and Control 

(add-em ’(uno iii)) → 4 
(add-em ’(uno iiii)) 
▷ Error: The value of X, IIII, is not I, UNO, II, DOS, III, 
▷ TRES, IV, or CUATRO. 
▷ 1: Supply a value to use instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> :CONTINUE 1 
▷ Value to evaluate and use for X: ’IV 
→ 5 
```
**Side Effects:** 



The debugger might be entered. If the **store-value** <ClLinks  term={"restart"}><i>restart</i></ClLinks> is invoked, the <ClLinks  term={"value"}><i>value</i></ClLinks> of *keyplace* might be changed. 



**Affected By:** 



<ClLinks  term={"ccase"}><b>ccase</b></ClLinks> and <ClLinks  term={"ecase"}><b>ecase</b></ClLinks>, since they might signal an error, are potentially affected by existing <ClLinks  term={"handler"}><i>handlers</i></ClLinks> and **\*debug-io\***. 



**Exceptional Situations:** 



<ClLinks  term={"ccase"}><b>ccase</b></ClLinks> and <ClLinks  term={"ecase"}><b>ecase</b></ClLinks> signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if no *normal-clause* matches. 



**See Also:** 



<ClLinks  term={"cond"}><b>cond</b></ClLinks>, <ClLinks  term={"typecase"}><b>typecase</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks>, Section 5.1 (Generalized Reference) 



**Notes:** 



(case *test-key* 



*\{*((<ClLinks  term={"key"}><i>\{key\}</i></ClLinks>\*) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)*\}*\*) 



*≡* 



(let ((#1=#:g0001 *test-key*)) 



(cond *\{*((member #1# ’(<ClLinks  term={"key"}><i>\{key\}</i></ClLinks>\*)) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)*\}*\*)) 



The specific error message used by <ClLinks  term={"ecase"}><b>ecase</b></ClLinks> and <ClLinks  term={"ccase"}><b>ccase</b></ClLinks> can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use <ClLinks  term={"case"}><b>case</b></ClLinks> with an *otherwise-clause* that explicitly signals an error with an appropriate message. 



