**ignore-errors** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks> <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—In the normal situation, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are returned; in the exceptional situation, two values are returned: <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks> is used to prevent <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> from causing entry into the debugger. 



Specifically, <ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks> *executes forms* in a *dynamic environment* where a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> for <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> has been established; if invoked, it <ClLinks styled={true} term={"handle"}><i>handles</i></ClLinks> such <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> by returning two <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> that was *signaled*, from the <ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



If a *normal return* from the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> occurs, any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned are returned by <ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks>. 

**Examples:**
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



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>, Section 9.1 (Condition System Concepts) 



**Notes:** 



(ignore-errors . <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>) 



is equivalent to: 



(handler-case (progn . <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>) 



(error (condition) (values nil condition))) 



Because the second return value is a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> so that the two situations can be distinguished. 



