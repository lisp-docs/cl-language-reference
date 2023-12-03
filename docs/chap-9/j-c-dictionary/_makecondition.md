**make-condition** *Function* 

**Syntax:** 

**make-condition** *type* &rest *slot-initializations → condition* 

**Arguments and Values:** 

*type*—a *type specifier* (for a *subtype* of **condition**). 

*slot-initializations*—an *initialization argument list*. 

*condition*—a *condition*. 



 

 

**Description:** 

Constructs and returns a *condition* of type *type* using *slot-initializations* for the initial values of the slots. The newly created *condition* is returned. 

**Examples:** 

(defvar \*oops-count\* 0) 

(setq a (make-condition ’simple-error 

:format-control "This is your ~:R error." 

:format-arguments (list (incf \*oops-count\*)))) 

*→* #&#60;SIMPLE-ERROR 32245104&#62; 

(format t "~&~A~%" a) 

&#9655; This is your first error. 

*→* NIL 

(error a) 

&#9655; Error: This is your first error. 

&#9655; To continue, type :CONTINUE followed by an option number: 

&#9655; 1: Return to Lisp Toplevel. 

&#9655; Debug&#62; 

**Affected By:** 

The set of defined *condition types*. 

**See Also:** 

**define-condition**, Section 9.1 (Condition System Concepts) 

