**load-time-value** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> &amp;optional *read-only-p → object* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*read-only-p*—a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—the *primary value* resulting from evaluating <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> provides a mechanism for delaying evaluation of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> until the expression is in the run-time environment; see Section 3.2 (Compilation). 



*Read-only-p* designates whether the result can be considered a *constant object*. If <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, the result is a read-only quantity that can, if appropriate to the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, be copied into read-only space and/or *coalesced* with *similar constant objects* from other <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks>. If <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (the default), the result must be neither copied nor coalesced; it must be considered to be potentially modifiable data. 



If a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> expression is processed by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, the compiler performs its normal semantic processing (such as macro expansion and translation into machine code) on <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, but arranges for the execution of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to occur at load time in a *null lexical environment*, with the result of this <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> then being treated as a *literal object* at run time. It is guaranteed that 



the evaluation of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> will take place only once when the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is *loaded*, but the order of evaluation with respect to the evaluation of *top level forms* in the file is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



If a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> expression appears within a function compiled with <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>, the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated at compile time in a *null lexical environment*. The result of this compile-time evaluation is treated as a *literal object* in the compiled code.  







<ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> 



If a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> expression is processed by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks>, <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated in a *null lexical environment*, and one value is returned. Implementations that implicitly compile (or partially compile) expressions processed by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> might evaluate <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> only once, at the time this compilation is performed. 



If the *same list* (load-time-value <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) is evaluated or compiled more than once, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated only once or is evaluated more than once. This can happen both when an expression being evaluated or compiled shares substructure, and when the *same form* is processed by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> or <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> multiple times. Since a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> expression can be referenced in more than one place and can be evaluated multiple times by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks>, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether each execution returns a fresh <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> or returns the same <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as some other execution. Users must use caution when destructively modifying the resulting <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



If two lists (load-time-value <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) that are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> but are not <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> are evaluated or compiled, their values always come from distinct evaluations of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Their <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> may not be coalesced unless *read-only-p* is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



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



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>, <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks>, Section 3.2.2.2 (Minimal Compilation), Section 3.2 (Compilation) 



**Notes:** 



<ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> must appear outside of quoted structure in a “for <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>” position. In situations which would appear to call for use of <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> within a quoted structure, the *backquote reader macro* is probably called for; see Section 2.4.6 (Backquote). 



Specifying <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> for *read-only-p* is not a way to force an object to become modifiable if it has already been made read-only. It is only a way to say that, for an object that is modifiable, this operation is not intended to make that object read-only. 



