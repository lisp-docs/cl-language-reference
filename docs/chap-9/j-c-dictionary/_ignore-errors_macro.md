**ignore-errors** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—In the normal situation, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are returned; in the exceptional situation, two values are returned: <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink> is used to prevent <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> from causing entry into the debugger. 



Specifically, <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink> *executes forms* in a *dynamic environment* where a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> has been established; if invoked, it <GlossaryTerm styled={true} term={"handle"}><i>handles</i></GlossaryTerm> such <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> by returning two <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> that was *signaled*, from the <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



If a *normal return* from the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> occurs, any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned are returned by <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink>. **Examples:**
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



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 



**Notes:** 



(ignore-errors . <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>) 



is equivalent to: 



(handler-case (progn . <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>) 



(error (condition) (values nil condition))) 



Because the second return value is a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> so that the two situations can be distinguished. 



