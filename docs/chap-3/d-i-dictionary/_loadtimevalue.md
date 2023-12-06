**load-time-value** *Special Operator* 



**Syntax:** 



**load-time-value** *form* &amp;optional *read-only-p → object* 



**Arguments and Values:** 



*form*—a *form*; evaluated as described below. 



*read-only-p*—a *boolean*; not evaluated. 



*object*—the *primary value* resulting from evaluating *form*. 



**Description:** 



**load-time-value** provides a mechanism for delaying evaluation of *form* until the expression is in the run-time environment; see Section 3.2 (Compilation). 



*Read-only-p* designates whether the result can be considered a *constant object*. If **t**, the result is a read-only quantity that can, if appropriate to the *implementation*, be copied into read-only space and/or *coalesced* with *similar constant objects* from other *programs*. If **nil** (the default), the result must be neither copied nor coalesced; it must be considered to be potentially modifiable data. 



If a **load-time-value** expression is processed by **compile-file**, the compiler performs its normal semantic processing (such as macro expansion and translation into machine code) on *form*, but arranges for the execution of *form* to occur at load time in a *null lexical environment*, with the result of this *evaluation* then being treated as a *literal object* at run time. It is guaranteed that 



the evaluation of *form* will take place only once when the *file* is *loaded*, but the order of evaluation with respect to the evaluation of *top level forms* in the file is *implementation-dependent*. 



If a **load-time-value** expression appears within a function compiled with **compile**, the *form* is evaluated at compile time in a *null lexical environment*. The result of this compile-time evaluation is treated as a *literal object* in the compiled code.  







**load-time-value** 



If a **load-time-value** expression is processed by **eval**, *form* is evaluated in a *null lexical environment*, and one value is returned. Implementations that implicitly compile (or partially compile) expressions processed by **eval** might evaluate *form* only once, at the time this compilation is performed. 



If the *same list* (load-time-value *form*) is evaluated or compiled more than once, it is *implementation-dependent* whether *form* is evaluated only once or is evaluated more than once. This can happen both when an expression being evaluated or compiled shares substructure, and when the *same form* is processed by **eval** or **compile** multiple times. Since a **load-time-value** expression can be referenced in more than one place and can be evaluated multiple times by **eval**, it is *implementation-dependent* whether each execution returns a fresh *object* or returns the same *object* as some other execution. Users must use caution when destructively modifying the resulting *object*. 



If two lists (load-time-value *form*) that are the *same* under **equal** but are not *identical* are evaluated or compiled, their values always come from distinct evaluations of *form*. Their *values* may not be coalesced unless *read-only-p* is **t**. 



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



**compile-file**, **compile**, **eval**, Section 3.2.2.2 (Minimal Compilation), Section 3.2 (Compilation) 



**Notes:** 



**load-time-value** must appear outside of quoted structure in a “for *evaluation*” position. In situations which would appear to call for use of **load-time-value** within a quoted structure, the *backquote reader macro* is probably called for; see Section 2.4.6 (Backquote). 



Specifying **nil** for *read-only-p* is not a way to force an object to become modifiable if it has already been made read-only. It is only a way to say that, for an object that is modifiable, this operation is not intended to make that object read-only. 



