**handler-case** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> [[ *\{↓error-clause\}*\* *| ↓no-error-clause* ]] *→ \{result\}*\* 



*clause::*=*↓error-clause | ↓no-error-clause* 



*error-clause::*=(*typespec* ([*var*]) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*no-error-clause::*=(:no-error *lambda-list \{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*typespec*—a *type specifier* . 







 



 



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> 



*var*—a *variable name*. 



*lambda-list*—an *ordinary lambda list*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—In the normal situation, the values returned are those that result from the evaluation of <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; in the exceptional situation when control is transferred to a *clause*, the value of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in that *clause* is returned. 



**Description:** 



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> executes <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> in a *dynamic environment* where various handlers are active. Each *error-clause* specifies how to handle a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> matching the indicated *typespec*. A *no-error-clause* allows the specification of a particular action if control returns normally. 



If a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is signaled for which there is an appropriate *error-clause* during the execution of <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> (*i.e.*, one for which (typep <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> ’*typespec*) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>) and if there is no intervening handler for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, then control is transferred to the body of the relevant *error-clause*. In this case, the dynamic state is unwound appropriately (so that the handlers established around the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> are no longer active), and *var* is bound to the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> that had been signaled. If more than one case is provided, those cases are made accessible in parallel. That is, in 



(handler-case <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> 



(*typespec1* (*var1*) *form1*) 



(*typespec2* (*var2*) *form2*)) 



if the first *clause* (containing *form1*) has been selected, the handler for the second is no longer visible (or vice versa). 



The *clauses* are searched sequentially from top to bottom. If there is <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> overlap between *typespecs*, the earlier of the *clauses* is selected. 



If *var* is not needed, it can be omitted. That is, a *clause* such as: 



(*typespec* (*var*) (declare (ignore *var*)) <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) 



can be written (*typespec* () <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



If there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a selected *clause*, the case, and therefore <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>, returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. If execution of <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> returns normally and no *no-error-clause* exists, the values returned by <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> are returned by <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>. If execution of <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> returns normally and a *no-error-clause* does exist, the values returned are used as arguments to the function described by constructing (lambda *lambda-list \{form\}*\*) from the *no-error-clause*, and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of that function call are returned by <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>. The handlers which were established around the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> are no longer active at the time of this call. 







 



 



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> 



**Examples:**
```lisp

(defun assess-condition (condition) 
  (handler-case (signal condition) 
    (warning () "Lots of smoke, but no fire.") 
    ((or arithmetic-error control-error cell-error stream-error) 
	(condition) 
      (format nil "~S looks especially bad." condition)) 
    (serious-condition (condition) 
      (format nil "~S looks serious." condition)) 
    (condition () "Hardly worth mentioning."))) 
*→* ASSESS-CONDITION 
(assess-condition (make-condition ’stream-error :stream \*terminal-io\*)) *→* "#<STREAM-ERROR 12352256> looks especially bad." 
(define-condition random-condition (condition) () 
  (:report (lambda (condition stream) 
	     (declare (ignore condition)) 
	     (princ "Yow" stream)))) 
*→* RANDOM-CONDITION 
(assess-condition (make-condition ’random-condition)) 
*→* "Hardly worth mentioning." 

```
**See Also:** 



<DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink>, Section 9.1 (Condition System Concepts) **Notes:** 



(handler-case form 



(*type1* (*var1*) . *body1*) 



(*type2* (*var2*) . *body2*) ...) 



is approximately equivalent to: 



(block #1=#:g0001 



(let ((#2=#:g0002 nil)) 



(tagbody 



(handler-bind ((*type1* #’(lambda (temp) 



(setq #1# temp) 



(go #3=#:g0003))) 



(*type2* #’(lambda (temp) 



(setq #2# temp) 



(go #4=#:g0004))) ...) 



(return-from #1# form)) 



#3# (return-from #1# (let ((*var1* #2#)) . *body1*)) 



#4# (return-from #1# (let ((*var2* #2#)) . *body2*)) ...))) 



(handler-case form 







 



 



(*type1 (var1)* . *body1*) 



... 



(:no-error (*varN-1 varN-2* ...) . *bodyN*)) 



is approximately equivalent to: 



(block #1=#:error-return 



(multiple-value-call #’(lambda (*varN-1 varN-2* ...) . *bodyN*) 



(block #2=#:normal-return 



(return-from #1# 



(handler-case (return-from #2# form) 



(*type1* (*var1*) . *body1*) ...))))) 



