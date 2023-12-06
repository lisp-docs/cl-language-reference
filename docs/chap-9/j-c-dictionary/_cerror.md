**cerror** *Function* 



**Syntax:** 



**cerror** *continue-format-control datum* &amp;rest *arguments →* **nil** 



**Arguments and Values:** 



*Continue-format-control*—a *format control*. 



*datum*, *arguments*—*designators* for a *condition* of default type **simple-error**. 



**Description:** 



**cerror** effectively invokes **error** on the *condition* named by *datum*. As with any function that implicitly calls **error**, if the *condition* is not handled, (invoke-debugger *condition*) is executed. While signaling is going on, and while in the debugger if it is reached, it is possible to continue code execution (*i.e.*, to return from **cerror**) using the **continue** *restart*. 



If *datum* is a *condition*, *arguments* can be supplied, but are used only in conjunction with the *continue-format-control*. 



**Examples:**
```lisp
 



(defun real-sqrt (n) 



(when (minusp n) 



(setq n (- n)) 







 



 



**cerror** 



(cerror "Return sqrt(&#126;D) instead." "Tried to take sqrt(-&#126;D)." n)) (sqrt n)) 



(real-sqrt 4) 



*→* 2.0 



(real-sqrt -9) 



▷ Correctable error in REAL-SQRT: Tried to take sqrt(-9). 



▷ Restart options: 



▷ 1: Return sqrt(9) instead. 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



*→* 3.0 



(define-condition not-a-number (error) 



((argument :reader not-a-number-argument :initarg :argument)) (:report (lambda (condition stream) 



(format stream "&#126;S is not a number." 



(not-a-number-argument condition))))) 



(defun assure-number (n) 



(loop (when (numberp n) (return n)) 



(cerror "Enter a number." 



’not-a-number :argument n) 



(format t "&#126;&amp;Type a number: ") 



(setq n (read)) 



(fresh-line))) 



(assure-number ’a) 



▷ Correctable error in ASSURE-NUMBER: A is not a number. 



▷ Restart options: 



▷ 1: Enter a number. 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



▷ Type a number: 1/2 



*→* 1/2 



(defun assure-large-number (n) 



(loop (when (and (numberp n) (&gt; n 73)) (return n)) 



(cerror "Enter a number&#126;:[&#126;; a bit larger than &#126;D&#126;]." 



"&#126;\*&#126;A is not a large number." 



(numberp n) n) 



(format t "&#126;&amp;Type a large number: ") 



(setq n (read)) 



(fresh-line))) 







 



 



**cerror** 



(assure-large-number 10000) 



*→* 10000 



(assure-large-number ’a) 



▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 



▷ Restart options: 



▷ 1: Enter a number. 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



▷ Type a large number: 88 



*→* 88 



(assure-large-number 37) 



▷ Correctable error in ASSURE-LARGE-NUMBER: 37 is not a large number. 



▷ Restart options: 



▷ 1: Enter a number a bit larger than 37. 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



▷ Type a large number: 259 



*→* 259 



(define-condition not-a-large-number (error) 



((argument :reader not-a-large-number-argument :initarg :argument)) 



(:report (lambda (condition stream) 



(format stream "&#126;S is not a large number." 



(not-a-large-number-argument condition))))) 



(defun assure-large-number (n) 



(loop (when (and (numberp n) (&gt; n 73)) (return n)) 



(cerror "Enter a number&#126;3\*&#126;:[&#126;; a bit larger than &#126;\*&#126;D&#126;]." 



’not-a-large-number 



:argument n 



:ignore (numberp n) 



:ignore n 



:allow-other-keys t) 



(format t "&#126;&amp;Type a large number: ") 



(setq n (read)) 



(fresh-line))) 



(assure-large-number ’a) 



▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 



▷ Restart options: 



▷ 1: Enter a number. 







 



 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



▷ Type a large number: 88 



*→* 88 



(assure-large-number 37) 



▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 



▷ Restart options: 



▷ 1: Enter a number a bit larger than 37. 



▷ 2: Top level. 



▷ Debug&gt; :continue 1 



▷ Type a large number: 259 



*→* 259 




```
**Affected By:** 



**\*break-on-signals\***. 



Existing handler bindings. 



**See Also:** 



**error**, **format**, **handler-bind**, **\*break-on-signals\***, **simple-type-error** 



**Notes:** 



If *datum* is a *condition type* rather than a *string*, the **format** directive &#126;\* may be especially useful in the *continue-format-control* in order to ignore the *keywords* in the *initialization argument list*. For example: 



(cerror "enter a new value to replace &#126;\*&#126;s" 



’not-a-number 



:argument a) 



