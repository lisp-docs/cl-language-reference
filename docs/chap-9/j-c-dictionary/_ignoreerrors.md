**ignore-errors** *Macro* 



**Syntax:** 



**ignore-errors** *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*forms*—an *implicit progn*. 



*results*—In the normal situation, the *values* of the *forms* are returned; in the exceptional situation, two values are returned: **nil** and the *condition*. 



**Description:** 



**ignore-errors** is used to prevent *conditions* of *type* **error** from causing entry into the debugger. 



Specifically, **ignore-errors** *executes forms* in a *dynamic environment* where a *handler* for *conditions* of *type* **error** has been established; if invoked, it *handles* such *conditions* by returning two *values*, **nil** and the *condition* that was *signaled*, from the **ignore-errors** *form*. 



If a *normal return* from the *forms* occurs, any *values* returned are returned by **ignore-errors**. **Examples:**
```lisp
 



(defun load-init-file (program) 



(let ((win nil)) 



(ignore-errors ;if this fails, don’t enter debugger 



(load (merge-pathnames (make-pathname :name program :type :lisp) 



(user-homedir-pathname))) 



(setq win t)) 



(unless win (format t "~&Init file failed to load.~%")) 



win)) 







 



 



(load-init-file "no-such-program") 



▷ Init file failed to load. 



NIL 




```
**See Also:** 



**handler-case**, Section 9.1 (Condition System Concepts) 



**Notes:** 



(ignore-errors . *forms*) 



is equivalent to: 



(handler-case (progn . *forms*) 



(error (condition) (values nil condition))) 



Because the second return value is a *condition* in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or **nil** so that the two situations can be distinguished. 



