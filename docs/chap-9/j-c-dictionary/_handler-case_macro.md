**handler-case** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> [[ *\{↓error-clause\}*\* *| ↓no-error-clause* ]] → \{result\}\* 



*clause::*=*↓error-clause | ↓no-error-clause* 



*error-clause::*=(*typespec* ([*var*]) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



*no-error-clause::*=(:no-error *lambda-list \{declaration\}*\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



**Arguments and Values:** 



<ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*typespec*—a *type specifier* . 







 



 



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> 



*var*—a *variable name*. 



*lambda-list*—an *ordinary lambda list*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—In the normal situation, the values returned are those that result from the evaluation of <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; in the exceptional situation when control is transferred to a *clause*, the value of the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in that *clause* is returned. 



**Description:** 



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> executes <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> in a *dynamic environment* where various handlers are active. Each *error-clause* specifies how to handle a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> matching the indicated *typespec*. A *no-error-clause* allows the specification of a particular action if control returns normally. 



If a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is signaled for which there is an appropriate *error-clause* during the execution of <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> (*i.e.*, one for which (typep <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> ’*typespec*) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>) and if there is no intervening handler for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, then control is transferred to the body of the relevant *error-clause*. In this case, the dynamic state is unwound appropriately (so that the handlers established around the <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> are no longer active), and *var* is bound to the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> that had been signaled. If more than one case is provided, those cases are made accessible in parallel. That is, in 



(handler-case <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> 



(*typespec1* (*var1*) *form1*) 



(*typespec2* (*var2*) *form2*)) 



if the first *clause* (containing *form1*) has been selected, the handler for the second is no longer visible (or vice versa). 



The *clauses* are searched sequentially from top to bottom. If there is <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> overlap between *typespecs*, the earlier of the *clauses* is selected. 



If *var* is not needed, it can be omitted. That is, a *clause* such as: 



(*typespec* (*var*) (declare (ignore *var*)) <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) 



can be written (*typespec* () <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). 



If there are no <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a selected *clause*, the case, and therefore <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>, returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. If execution of <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> returns normally and no *no-error-clause* exists, the values returned by <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> are returned by <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>. If execution of <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> returns normally and a *no-error-clause* does exist, the values returned are used as arguments to the function described by constructing (lambda *lambda-list \{form\}*\*) from the *no-error-clause*, and the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of that function call are returned by <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>. The handlers which were established around the <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> are no longer active at the time of this call. 







 



 



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> 



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
→ ASSESS-CONDITION 
(assess-condition (make-condition ’stream-error :stream \*terminal-io\*)) → "#<STREAM-ERROR 12352256> looks especially bad." 
(define-condition random-condition (condition) () 
  (:report (lambda (condition stream) 
	     (declare (ignore condition)) 
	     (princ "Yow" stream)))) 
→ RANDOM-CONDITION 
(assess-condition (make-condition ’random-condition)) 
→ "Hardly worth mentioning." 
```
**See Also:** 



<ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks>, <ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks>, Section 9.1 (Condition System Concepts) **Notes:** 



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



