**warn** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> *datum* &amp;rest *arguments →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*datum*, <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>—<ClLinks styled={true} term={"designator"}><i>designators</i></ClLinks> for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of default type <ClLinks styled={true} term={"simple-warning"}><b>simple-warning</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> 



**Description:** 



<ClLinks styled={true} term={"signal"}><i>Signals</i></ClLinks> a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks>. If the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not *handled*, reports the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> to <GlossaryTerm styled={true} term={"error output"}><i>error output</i></GlossaryTerm>. 



The precise mechanism for warning is as follows: 



**The warning condition is signaled** 



While the <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks> <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is being signaled, the **muffle-warning** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is established for use by a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> . If invoked, this <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> bypasses further action by <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks>, which in turn causes <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> to immediately return <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**If no handler for the warning condition is found** 



If no handlers for the warning condition are found, or if all such handlers decline, then the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is reported to <GlossaryTerm styled={true} term={"error output"}><i>error output</i></GlossaryTerm> by <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> format. 



**nil is returned** 



The value returned by <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> if it returns is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(defun foo (x) 
  (let ((result (\* x 2))) 
    (if (not (typep result ’fixnum)) 
	(warn "You’re using very big numbers.")) 
    result)) 
→ FOO 
(foo 3) 
→ 6 
(foo most-positive-fixnum) 
▷ Warning: You’re using very big numbers. 
→ 4294967294 
(setq \*break-on-signals\* t) 
→ T 
(foo most-positive-fixnum) 
▷ Break: Caveat emptor. 
▷ To continue, type :CONTINUE followed by an option number. 
▷ 1: Return from Break. 
▷ 2: Abort to Lisp Toplevel. 
▷ Debug> :continue 1 

▷ Warning: You’re using very big numbers. 
→ 4294967294 
```
**Side Effects:** 



A warning is issued. The debugger might be entered. 



**Affected By:** 



Existing handler bindings. 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>, **\*error-output\***. 



**Exceptional Situations:** 



If *datum* is a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> and if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks>, or <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



If *datum* is a condition type, the result of (apply #’make-condition datum arguments) must be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks> or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>, **muffle-warning**, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> 



