**warn** *Function* 



**Syntax:** 



**warn** *datum* &amp;rest *arguments →* **nil** 



**Arguments and Values:** 



*datum*, *arguments*—*designators* for a *condition* of default type **simple-warning**. 







 



 



**warn** 



**Description:** 



*Signals* a *condition* of *type* **warning**. If the *condition* is not *handled*, reports the *condition* to *error output*. 



The precise mechanism for warning is as follows: 



**The warning condition is signaled** 



While the **warning** *condition* is being signaled, the **muffle-warning** *restart* is established for use by a *handler* . If invoked, this *restart* bypasses further action by **warn**, which in turn causes **warn** to immediately return **nil**. 



**If no handler for the warning condition is found** 



If no handlers for the warning condition are found, or if all such handlers decline, then the *condition* is reported to *error output* by **warn** in an *implementation-dependent* format. 



**nil is returned** 



The value returned by **warn** if it returns is **nil**. 



**Examples:**
```lisp
 



(defun foo (x) 



(let ((result (\* x 2))) 



(if (not (typep result ’fixnum)) 



(warn "You’re using very big numbers.")) 



result)) 



*→* FOO 



(foo 3) 



*→* 6 



(foo most-positive-fixnum) 



▷ Warning: You’re using very big numbers. 



*→* 4294967294 



(setq \*break-on-signals\* t) 



*→* T 



(foo most-positive-fixnum) 



▷ Break: Caveat emptor. 



▷ To continue, type :CONTINUE followed by an option number. 



▷ 1: Return from Break. 



▷ 2: Abort to Lisp Toplevel. 



▷ Debug&gt; :continue 1 







 



 



▷ Warning: You’re using very big numbers. 



*→* 4294967294 




```
**Side Effects:** 



A warning is issued. The debugger might be entered. 



**Affected By:** 



Existing handler bindings. 



**\*break-on-signals\***, **\*error-output\***. 



**Exceptional Situations:** 



If *datum* is a *condition* and if the *condition* is not of *type* **warning**, or *arguments* is *non-nil*, an error of *type* **type-error** is signaled. 



If *datum* is a condition type, the result of (apply #’make-condition datum arguments) must be of *type* **warning** or an error of *type* **type-error** is signaled. 



**See Also:** 



**\*break-on-signals\***, **muffle-warning**, **signal** 



