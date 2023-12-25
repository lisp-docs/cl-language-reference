**case, ccase, ecase** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> *keyform \{↓normal-clause\}*\* [*↓otherwise-clause*] *→ \{result\}*\* 



<DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> *keyplace \{↓normal-clause\}*\* *→ \{result\}*\* 



<DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> *keyform \{↓normal-clause\}*\* *→ \{result\}*\* 



*normal-clause::*=(*keys \{form\}*\*) 



*otherwise-clause::*=(*\{otherwise | t\} \{form\}*\*) 



*clause::*=*normal-clause | otherwise-clause* 



**Arguments and Values:** 



*keyform*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a *test-key*. 



*keyplace*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated initially to produce a *test-key*. Possibly also used later as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> match. 



*test-key*—an object produced by evaluating *keyform* or *keyplace*. 



<GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. In the case of <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> and **otherwise** may not be used as the *keys designator* . To refer to these <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> by themselves as <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>, the designators (t) and (otherwise), respectively, must be used instead. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the matching *clause*. 



**Description:** 



These <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> allow the conditional execution of a body of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a *clause* that is selected by matching the *test-key* on the basis of its identity. 



The *keyform* or *keyplace* is *evaluated* to produce the *test-key*. 



Each of the *normal-clauses* is then considered in turn. If the *test-key* is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as any <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> for that *clause*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in that *clause* are *evaluated* as an *implicit progn*, and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the value of the <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink>, <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>, or <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



These <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> differ only in their *behavior* when no *normal-clause* matches; specifically: <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> 



If no *normal-clause* matches, and there is an *otherwise-clause*, then that *otherwise-clause* 











**case, ccase, ecase** 



automatically matches; the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in that *clause* are *evaluated* as an *implicit progn*, and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the value of the <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink>. 



If there is no *otherwise-clause*, <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> 



If no *normal-clause* matches, a *correctable error* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (member *key1 key2* ...). The **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> can be used to correct the error. 



If the **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked, its <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> becomes the new *test-key*, and is stored in *keyplace* as if by (setf *keyplace test-key*). Then <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> starts over, considering each *clause* anew. 



The subforms of *keyplace* might be evaluated again if none of the cases holds. 



<DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> 



If no *normal-clause* matches, a *non-correctable error* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (member *key1 key2* ...). 



Note that in contrast with <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>, the caller of <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> may rely on the fact that <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> does not return if a *normal-clause* does not match. 



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
*→* NIL 
(defun add-em (x) (apply #’+ (mapcar #’decode x))) 
*→* ADD-EM 
(defun decode (x) 
  (ccase x 
    ((i uno) 1) 
    ((ii dos) 2) 
    ((iii tres) 3) 
    ((iv cuatro) 4))) 
*→* DECODE 
Data and Control 


(add-em ’(uno iii)) *→* 4 
(add-em ’(uno iiii)) 
▷ Error: The value of X, IIII, is not I, UNO, II, DOS, III, 
▷ TRES, IV, or CUATRO. 
▷ 1: Supply a value to use instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> :CONTINUE 1 
▷ Value to evaluate and use for X: ’IV 
*→* 5 

```
**Side Effects:** 



The debugger might be entered. If the **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of *keyplace* might be changed. 



**Affected By:** 



<DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> and <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink>, since they might signal an error, are potentially affected by existing <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> and **\*debug-io\***. 



**Exceptional Situations:** 



<DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> and <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if no *normal-clause* matches. 



**See Also:** 



<DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink styled={true} term={"typecase"}><b>typecase</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



(case *test-key* 



*\{*((<GlossaryTerm styled={true} term={"key"}><i>\{key\}</i></GlossaryTerm>\*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*)*\}*\*) 



*≡* 



(let ((#1=#:g0001 *test-key*)) 



(cond *\{*((member #1# ’(<GlossaryTerm styled={true} term={"key"}><i>\{key\}</i></GlossaryTerm>\*)) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*)*\}*\*)) 



The specific error message used by <DictionaryLink styled={true} term={"ecase"}><b>ecase</b></DictionaryLink> and <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink> can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> with an *otherwise-clause* that explicitly signals an error with an appropriate message. 



