**use-value** *Restart* 



**Data Arguments Required:** 



a value to use instead (once). 



**Description:** 



The **use-value** *restart* is generally used by *handlers* trying to recover from errors of *types* such as **cell-error**, where the handler may wish to supply a replacement datum for one-time use. 



**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), **invoke-restart**, **use-value** (*function*), **store-value** (*function* and *restart*) 



<b><sup>abort, continue, muffle-warning, store-value, use</sup> value</b> <i>Function</i> 



**Syntax:** 



**abort** &amp;optional *condition →* 



**continue** &amp;optional *condition →* **nil** 



**muffle-warning** &amp;optional *condition →* 



**store-value** *value* &amp;optional *condition →* **nil** 



**use-value** *value* &amp;optional *condition →* **nil** 







 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Arguments and Values:** 



*value*—an *object*. 



*condition*—a *condition object*, or **nil**. 



**Description:** 



Transfers control to the most recently established *applicable restart* having the same name as the function. That is, the *function* **abort** searches for an *applicable* **abort** *restart*, the *function* **continue** searches for an *applicable* **continue** *restart*, and so on. 



If no such *restart* exists, the functions **continue**, **store-value**, and **use-value** return **nil**, and the functions **abort** and **muffle-warning** signal an error of *type* **control-error**. 



When *condition* is *non-nil*, only those *restarts* are considered that are either explicitly associated with that *condition*, or not associated with any *condition*; that is, the excluded *restarts* are those that are associated with a non-empty set of *conditions* of which the given *condition* is not an *element*. If *condition* is **nil**, all *restarts* are considered. 



**Examples:**
```lisp
 

;;; Example of the ABORT retart 

(defmacro abort-on-error (&amp;body forms) 

‘(handler-bind ((error #’abort)) 

,@forms)) *→* ABORT-ON-ERROR 

(abort-on-error (+ 3 5)) *→* 8 

(abort-on-error (error "You lose.")) 

▷ Returned to Lisp Top Level. 

;;; Example of the CONTINUE restart 

(defun real-sqrt (n) 

(when (minusp n) 

(setq n (- n)) 

(cerror "Return sqrt(&#126;D) instead." "Tried to take sqrt(-&#126;D)." n)) 

(sqrt n)) 

(real-sqrt 4) *→* 2 

(real-sqrt -9) 

▷ Error: Tried to take sqrt(-9). 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Return sqrt(9) instead. 

▷ 2: Return to Lisp Toplevel. 

▷ Debug&gt; (continue) 

▷ Return sqrt(9) instead. 

*→* 3 



 

 

**abort, continue, muffle-warning, store-value, use-value** 

(handler-bind ((error #’(lambda (c) (continue)))) 

(real-sqrt -9)) *→* 3 

;;; Example of the MUFFLE-WARNING restart 

(defun count-down (x) 

(do ((counter x (1- counter))) 

((= counter 0) ’done) 

(when (= counter 1) 

(warn "Almost done")) 

(format t "&#126;&amp;&#126;D&#126;%" counter))) 

*→* COUNT-DOWN 

(count-down 3) 

▷ 3 

▷ 2 

▷ Warning: Almost done 

▷ 1 

*→* DONE 

(defun ignore-warnings-while-counting (x) 

(handler-bind ((warning #’ignore-warning)) 

(count-down x))) 

*→* IGNORE-WARNINGS-WHILE-COUNTING 

(defun ignore-warning (condition) 

(declare (ignore condition)) 

(muffle-warning)) 

*→* IGNORE-WARNING 

(ignore-warnings-while-counting 3) 

▷ 3 

▷ 2 

▷ 1 

*→* DONE 

;;; Example of the STORE-VALUE and USE-VALUE restarts 

(defun careful-symbol-value (symbol) 

(check-type symbol symbol) 

(restart-case (if (boundp symbol) 

(return-from careful-symbol-value 

(symbol-value symbol)) 

(error ’unbound-variable 

:name symbol)) 

(use-value (value) 

:report "Specify a value to use this time." 

value) 



 

 

**abort, continue, muffle-warning, store-value, use-value** 

(store-value (value) 

:report "Specify a value to store and use in the future." 

(setf (symbol-value symbol) value)))) 

(setq a 1234) *→* 1234 

(careful-symbol-value ’a) *→* 1234 

(makunbound ’a) *→* A 

(careful-symbol-value ’a) 

▷ Error: A is not bound. 

▷ To continue, type :CONTINUE followed by an option number. 

▷ 1: Specify a value to use this time. 

▷ 2: Specify a value to store and use in the future. 

▷ 3: Return to Lisp Toplevel. 

▷ Debug&gt; (use-value 12) 

*→* 12 

(careful-symbol-value ’a) 

▷ Error: A is not bound. 

▷ To continue, type :CONTINUE followed by an option number. 

▷ 1: Specify a value to use this time. 

▷ 2: Specify a value to store and use in the future. 

▷ 3: Return to Lisp Toplevel. 

▷ Debug&gt; (store-value 24) 

*→* 24 

(careful-symbol-value ’a) 

*→* 24 

;;; Example of the USE-VALUE restart 

(defun add-symbols-with-default (default &amp;rest symbols) 

(handler-bind ((sys:unbound-symbol 

#’(lambda (c) 

(declare (ignore c)) 

(use-value default)))) 

(apply #’+ (mapcar #’careful-symbol-value symbols)))) 

*→* ADD-SYMBOLS-WITH-DEFAULT 

(setq x 1 y 2) *→* 2 

(add-symbols-with-default 3 ’x ’y ’z) *→* 6 


```
**Side Effects:** 



A transfer of control may occur if an appropriate *restart* is available, or (in the case of the *function* **abort** or the *function* **muffle-warning**) execution may be stopped. 



**Affected By:** 



Each of these functions can be affected by the presence of a *restart* having the same name. 



 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Exceptional Situations:** 



If an appropriate **abort** *restart* is not available for the *function* **abort**, or an appropriate **muffle-warning** *restart* is not available for the *function* **muffle-warning**, an error of *type* **control-error** is signaled. 



**See Also:** 



**invoke-restart**, Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), **assert**, **ccase**, **cerror**, **check-type**, **ctypecase**, **use-value**, **warn** 



**Notes:** 



(abort condition) *≡* (invoke-restart ’abort) 



(muffle-warning) *≡* (invoke-restart ’muffle-warning) 



(continue) *≡* (let ((r (find-restart ’continue))) (if r (invoke-restart r))) (use-value *x*) *≡* (let ((r (find-restart ’use-value))) (if r (invoke-restart r *x*))) (store-value x) *≡* (let ((r (find-restart ’store-value))) (if r (invoke-restart r *x*))) 



No functions defined in this specification are required to provide a **use-value** *restart*. 

