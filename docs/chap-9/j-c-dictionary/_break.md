**break** *Function* 



**Syntax:** 



**break** &amp;optional *format-control* &amp;rest *format-arguments →* **nil** 



**Arguments and Values:** 



*format-control*—a *format control*. The default is *implementation-dependent*. 



*format-arguments*—*format arguments* for the *format-control*. 



**Description:** 



**break** *formats format-control* and *format-arguments* and then goes directly into the debugger without allowing any possibility of interception by programmed error-handling facilities. 



If the **continue** *restart* is used while in the debugger, **break** immediately returns **nil** without taking any unusual recovery action. 



**break** binds **\*debugger-hook\*** to **nil** before attempting to enter the debugger. 



**Examples:**
```lisp
 

(break "You got here with arguments: &#126;:S." ’(FOO 37 A)) 

▷ BREAK: You got here with these arguments: FOO, 37, A. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Return from BREAK. 

▷ 2: Top level. 

▷ Debug&gt; :CONTINUE 1 

▷ Return from BREAK. 

*→* NIL 


```
**Side Effects:** 



The debugger is entered. 



**Affected By:** 



**\*debug-io\***. 



**See Also:** 



**error**, **invoke-debugger**. 



**Notes:** 



**break** is used as a way of inserting temporary debugging “breakpoints” in a program, not as a way of signaling errors. For this reason, **break** does not take the *continue-format-control argument* that **cerror** takes. This and the lack of any possibility of interception by *condition handling* are the only program-visible differences between **break** and **cerror**. 







 



 



The user interface aspects of **break** and **cerror** are permitted to vary more widely, in order to accomodate the interface needs of the *implementation*. For example, it is permissible for a *Lisp read-eval-print loop* to be entered by **break** rather than the conventional debugger. 



**break** could be defined by: 



(defun break (&amp;optional (format-control "Break") &amp;rest format-arguments) 



(with-simple-restart (continue "Return from BREAK.") 



(let ((\*debugger-hook\* nil)) 



(invoke-debugger 



(make-condition ’simple-condition 



:format-control format-control 



:format-arguments format-arguments)))) 



nil) 



*∗***debugger-hook***∗ Variable* 



**Value Type:** 



a *designator* for a *function* of two *arguments* (a *condition* and the *value* of **\*debugger-hook\*** at the time the debugger was entered), or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



When the *value* of **\*debugger-hook\*** is *non-nil*, it is called prior to normal entry into the debugger, either due to a call to **invoke-debugger** or due to automatic entry into the debugger from a call to **error** or **cerror** with a condition that is not handled. The *function* may either handle the *condition* (transfer control) or return normally (allowing the standard debugger to run). To minimize recursive errors while debugging, **\*debugger-hook\*** is bound to **nil** by **invoke-debugger** prior to calling the *function*. 



**Examples:**
```lisp
 

(defun one-of (choices &amp;optional (prompt "Choice")) 

(let ((n (length choices)) (i)) 

(do ((c choices (cdr c)) (i 1 (+ i 1))) 

((null c)) 

(format t "&#126;&amp;[&#126;D] &#126;A&#126;%" i (car c))) 

(do () ((typep i ‘(integer 1 ,n))) 

(format t "&#126;&amp;&#126;A: " prompt) 

(setq i (read)) 



 

 

(fresh-line)) 

(nth (- i 1) choices))) 

(defun my-debugger (condition me-or-my-encapsulation) 

(format t "&#126;&amp;Fooey: &#126;A" condition) 

(let ((restart (one-of (compute-restarts)))) 

(if (not restart) (error "My debugger got an error.")) 

(let ((\*debugger-hook\* me-or-my-encapsulation)) 

(invoke-restart-interactively restart)))) 

(let ((\*debugger-hook\* #’my-debugger)) 

(+ 3 ’a)) 

▷ Fooey: The argument to +, A, is not a number. 

▷ [1] Supply a replacement for A. 

▷ [2] Return to Cloe Toplevel. 

▷ Choice: 1 

▷ Form to evaluate and use: (+ 5 ’b) 

▷ Fooey: The argument to +, B, is not a number. 

▷ [1] Supply a replacement for B. 

▷ [2] Supply a replacement for A. 

▷ [3] Return to Cloe Toplevel. 

▷ Choice: 1 

▷ Form to evaluate and use: 1 

*→* 9 


```
**Affected By:** 



**invoke-debugger** 



**Notes:** 



When evaluating code typed in by the user interactively, it is sometimes useful to have the hook function bind **\*debugger-hook\*** to the *function* that was its second argument so that recursive errors can be handled using the same interactive facility. 



*∗***break-on-signals***∗ Variable* 



**Value Type:** 



a *type specifier* . 



**Initial Value:** 



**nil**. 







 



 



*∗***break-on-signals***∗* 



**Description:** 



When (typep *condition* \*break-on-signals\*) returns *true*, calls to **signal**, and to other *operators* such as **error** that implicitly call **signal**, enter the debugger prior to *signaling* the *condition*. 



The **continue** *restart* can be used to continue with the normal *signaling* process when a break occurs process due to **\*break-on-signals\***. 



**Examples:**
```lisp
 

\*break-on-signals\* *→* NIL 

(ignore-errors (error ’simple-error :format-control "Fooey!")) 

*→* NIL, #<SIMPLE-ERROR 32207172> 

(let ((\*break-on-signals\* ’error)) 

(ignore-errors (error ’simple-error :format-control "Fooey!"))) 

▷ Break: Fooey! 

▷ BREAK entered because of \*BREAK-ON-SIGNALS\*. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Continue to signal. 

▷ 2: Top level. 

▷ Debug> :CONTINUE 1 

▷ Continue to signal. 

*→* NIL, #<SIMPLE-ERROR 32212257> 

(let ((\*break-on-signals\* ’error)) 

(error ’simple-error :format-control "Fooey!")) 

▷ Break: Fooey! 

▷ BREAK entered because of \*BREAK-ON-SIGNALS\*. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Continue to signal. 

▷ 2: Top level. 

▷ Debug> :CONTINUE 1 

▷ Continue to signal. 

▷ Error: Fooey! 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Top level. 

▷ Debug> :CONTINUE 1 

▷ Top level. 


```
**See Also:** 



**break**, **signal**, **warn**, **error**, **typep**, Section 9.1 (Condition System Concepts) 



**Notes:** 



**\*break-on-signals\*** is intended primarily for use in debugging code that does signaling. When setting **\*break-on-signals\***, the user is encouraged to choose the most restrictive specification 







 



 



that suffices. Setting **\*break-on-signals\*** effectively violates the modular handling of *condition* signaling. In practice, the complete effect of setting **\*break-on-signals\*** might be unpredictable in some cases since the user might not be aware of the variety or number of calls to **signal** that are used in code called only incidentally. 



**\*break-on-signals\*** enables an early entry to the debugger but such an entry does not preclude an additional entry to the debugger in the case of operations such as **error** and **cerror**. 



