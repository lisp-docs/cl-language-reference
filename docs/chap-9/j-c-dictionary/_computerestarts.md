**compute-restarts** *Function* 



**Syntax:** 



**compute-restarts** &amp;optional *condition → restarts* 



**Arguments and Values:** 



*condition*—a *condition object*, or **nil**. 



*restarts*—a *list* of *restarts*. 



**Description:** 



**compute-restarts** uses the dynamic state of the program to compute a *list* of the *restarts* which are currently active. 



The resulting *list* is ordered so that the innermost (more-recently established) restarts are nearer the head of the *list*. 



When *condition* is *non-nil*, only those *restarts* are considered that are either explicitly associated with that *condition*, or not associated with any *condition*; that is, the excluded *restarts* are those that are associated with a non-empty set of *conditions* of which the given *condition* is not an *element*. If *condition* is **nil**, all *restarts* are considered. 



**compute-restarts** returns all *applicable restarts*, including anonymous ones, even if some of them have the same name as others and would therefore not be found by **find-restart** when given a *symbol* argument. 



Implementations are permitted, but not required, to return *distinct lists* from repeated calls to **compute-restarts** while in the same dynamic environment. The consequences are undefined if the *list* returned by **compute-restarts** is every modified. 



**Examples:**
```lisp
 



;; One possible way in which an interactive debugger might present 



;; restarts to the user. 



(defun invoke-a-restart () 



(let ((restarts (compute-restarts))) 



(do ((i 0 (+ i 1)) (r restarts (cdr r))) ((null r)) 



(format t "&#126;&amp;&#126;D: &#126;A&#126;%" i (car r))) 



(let ((n nil) (k (length restarts))) 



(loop (when (and (typep n ’integer) (&gt;= n 0) (&lt; n k)) 



(return t)) 



(format t "&#126;&amp;Option: ") 



(setq n (read)) 



(fresh-line)) 



(invoke-restart-interactively (nth n restarts))))) 







 



 



(restart-case (invoke-a-restart) 



(one () 1) 



(two () 2) 



(nil () :report "Who knows?" ’anonymous) 



(one () ’I) 



(two () ’II)) 



▷ 0: ONE 



▷ 1: TWO 



▷ 2: Who knows? 



▷ 3: ONE 



▷ 4: TWO 



▷ 5: Return to Lisp Toplevel. 



▷ Option: 4 



*→* II 



;; Note that in addition to user-defined restart points, COMPUTE-RESTARTS 



;; also returns information about any system-supplied restarts, such as 



;; the "Return to Lisp Toplevel" restart offered above. 




```
**Affected By:** 



Existing restarts. 



**See Also:** 



**find-restart**, **invoke-restart**, **restart-bind** 



