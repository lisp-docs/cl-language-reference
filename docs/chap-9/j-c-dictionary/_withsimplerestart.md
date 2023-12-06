**with-simple-restart** *Macro* 



**Syntax:** 



**with-simple-restart** (*name format-control \{format-argument\}*\*) *\{form\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*name*—a *symbol*. 



*format-control*—a *format control*. 



*format-argument*—an *object* (*i.e.*, a *format argument*). 



*forms*—an *implicit progn*. 



*results*—in the normal situation, the *values* returned by the *forms*; in the exceptional situation where the *restart* named *name* is invoked, two values—**nil** and **t**. 



**Description:** 



**with-simple-restart** establishes a restart. 



If the restart designated by *name* is not invoked while executing *forms*, all values returned by the last of *forms* are returned. If the restart designated by *name* is invoked, control is transferred to **with-simple-restart**, which returns two values, **nil** and **t**. 



If *name* is **nil**, an anonymous restart is established. 



The *format-control* and *format-arguments* are used report the *restart*. 







 



 



**with-simple-restart** 



**Examples:**
```lisp
 

(defun read-eval-print-loop (level) 

(with-simple-restart (abort "Exit command level &#126;D." level) 

(loop 

(with-simple-restart (abort "Return to command level &#126;D." level) 

(let ((form (prog2 (fresh-line) (read) (fresh-line)))) 

(prin1 (eval form))))))) 

*→* READ-EVAL-PRINT-LOOP 

(read-eval-print-loop 1) 

(+ ’a 3) 

▷ Error: The argument, A, to the function + was of the wrong type. ▷ The function expected a number. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Specify a value to use this time. 

▷ 2: Return to command level 1. 

▷ 3: Exit command level 1. 

▷ 4: Return to Lisp Toplevel. 

(defun compute-fixnum-power-of-2 (x) 

(with-simple-restart (nil "Give up on computing 2<i><sup>∧</sup></i>&#126;D." x) 

(let ((result 1)) 

(dotimes (i x result) 

(setq result (\* 2 result)) 

(unless (fixnump result) 

(error "Power of 2 is too large.")))))) 

COMPUTE-FIXNUM-POWER-OF-2 

(defun compute-power-of-2 (x) 

(or (compute-fixnum-power-of-2 x) ’something big)) 

COMPUTE-POWER-OF-2 

(compute-power-of-2 10) 

1024 

(compute-power-of-2 10000) 

▷ Error: Power of 2 is too large. 

▷ To continue, type :CONTINUE followed by an option number. 

<i>.</i> 1: Give up on computing 2<i><sup>∧</sup></i>10000. 

▷ 2: Return to Lisp Toplevel 

▷ Debug&gt; :continue 1 

*→* SOMETHING-BIG 


```
**See Also:** 



**restart-case** 



**Notes:** 



**with-simple-restart** is shorthand for one of the most common uses of **restart-case**. 



 



 



**with-simple-restart** could be defined by: 



(defmacro with-simple-restart ((restart-name format-control 



&amp;rest format-arguments) 



&amp;body forms) 



‘(restart-case (progn ,@forms) 



(,restart-name () 



:report (lambda (stream) 



(format stream ,format-control ,@format-arguments)) 



(values nil t)))) 



Because the second return value is **t** in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or **nil** so that the two situations can be distinguished. 



