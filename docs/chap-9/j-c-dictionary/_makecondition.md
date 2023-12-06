**make-condition** *Function* 



**Syntax:** 



**make-condition** *type* &amp;rest *slot-initializations → condition* 



**Arguments and Values:** 



*type*—a *type specifier* (for a *subtype* of **condition**). 



*slot-initializations*—an *initialization argument list*. 



*condition*—a *condition*. 







 



 



**Description:** 



Constructs and returns a *condition* of type *type* using *slot-initializations* for the initial values of the slots. The newly created *condition* is returned. 



**Examples:**
```lisp
 

(defvar \*oops-count\* 0) 

(setq a (make-condition ’simple-error 

:format-control "This is your &#126;:R error." 

:format-arguments (list (incf \*oops-count\*)))) 

*→* #<SIMPLE-ERROR 32245104> 

(format t "~&~A~%" a) 

▷ This is your first error. 

*→* NIL 

(error a) 

▷ Error: This is your first error. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Return to Lisp Toplevel. 

▷ Debug> 


```
**Affected By:** 



The set of defined *condition types*. 



**See Also:** 



**define-condition**, Section 9.1 (Condition System Concepts) 



