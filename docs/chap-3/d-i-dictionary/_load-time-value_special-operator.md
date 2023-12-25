**load-time-value** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> &amp;optional *read-only-p → object* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*read-only-p*—a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—the *primary value* resulting from evaluating <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> provides a mechanism for delaying evaluation of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> until the expression is in the run-time environment; see Section 3.2 (Compilation). 



*Read-only-p* designates whether the result can be considered a *constant object*. If <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, the result is a read-only quantity that can, if appropriate to the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, be copied into read-only space and/or *coalesced* with *similar constant objects* from other <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm>. If <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (the default), the result must be neither copied nor coalesced; it must be considered to be potentially modifiable data. 



If a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> expression is processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, the compiler performs its normal semantic processing (such as macro expansion and translation into machine code) on <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, but arranges for the execution of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to occur at load time in a *null lexical environment*, with the result of this <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> then being treated as a *literal object* at run time. It is guaranteed that 



the evaluation of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> will take place only once when the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is *loaded*, but the order of evaluation with respect to the evaluation of *top level forms* in the file is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



If a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> expression appears within a function compiled with <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated at compile time in a *null lexical environment*. The result of this compile-time evaluation is treated as a *literal object* in the compiled code.  







<DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> 



If a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> expression is processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>, <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in a *null lexical environment*, and one value is returned. Implementations that implicitly compile (or partially compile) expressions processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> might evaluate <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> only once, at the time this compilation is performed. 



If the *same list* (load-time-value <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) is evaluated or compiled more than once, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated only once or is evaluated more than once. This can happen both when an expression being evaluated or compiled shares substructure, and when the *same form* is processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> or <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> multiple times. Since a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> expression can be referenced in more than one place and can be evaluated multiple times by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether each execution returns a fresh <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> or returns the same <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as some other execution. Users must use caution when destructively modifying the resulting <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



If two lists (load-time-value <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) that are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> but are not <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> are evaluated or compiled, their values always come from distinct evaluations of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Their <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> may not be coalesced unless *read-only-p* is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**Examples:**
```lisp

;;; The function INCR1 always returns the same value, even in different images. ;;; The function INCR2 always returns the same value in a given image, 
;;; but the value it returns might vary from image to image. 
(defun incr1 (x) (+ x #.(random 17))) 
(defun incr2 (x) (+ x (load-time-value (random 17)))) 
;;; The function FOO1-REF references the nth element of the first of 
;;; the \*FOO-ARRAYS\* that is available at load time. It is permissible for 
;;; that array to be modified (e.g., by SET-FOO1-REF); FOO1-REF will see the 
;;; updated values. 
(defvar \*foo-arrays\* (list (make-array 7) (make-array 8))) 
(defun foo1-ref (n) (aref (load-time-value (first \*my-arrays\*) nil) n)) 
(defun set-foo1-ref (n val) 
  (setf (aref (load-time-value (first \*my-arrays\*) nil) n) val)) 
;;; The function BAR1-REF references the nth element of the first of 
;;; the \*BAR-ARRAYS\* that is available at load time. The programmer has 
;;; promised that the array will be treated as read-only, so the system 
;;; can copy or coalesce the array. 
(defvar \*bar-arrays\* (list (make-array 7) (make-array 8))) 
(defun bar1-ref (n) (aref (load-time-value (first \*my-arrays\*) t) n)) 
;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced 
;;; even though NIL was specified, because the object was already read-only 
;;; when it was written as a literal vector rather than created by a constructor. ;;; User programs must treat the vector v as read-only. 
(defun baz-ref (n)  

  (let ((v (load-time-value #(A B C) nil))) 
    (values (svref v n) v))) 
;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced 
;;; even though NIL was specified in the outer situation because T was specified ;;; in the inner situation. User programs must treat the vector v as read-only. (defun baz-ref (n) 
(let ((v (load-time-value (load-time-value (vector 1 2 3) t) nil))) 
  (values (svref v n) v))) 

```
**See Also:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>, Section 3.2.2.2 (Minimal Compilation), Section 3.2 (Compilation) 



**Notes:** 



<DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> must appear outside of quoted structure in a “for <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>” position. In situations which would appear to call for use of <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> within a quoted structure, the *backquote reader macro* is probably called for; see Section 2.4.6 (Backquote). 



Specifying <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> for *read-only-p* is not a way to force an object to become modifiable if it has already been made read-only. It is only a way to say that, for an object that is modifiable, this operation is not intended to make that object read-only. 



