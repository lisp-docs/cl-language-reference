**warn** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> *datum* &amp;rest *arguments →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*datum*, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type <DictionaryLink styled={true} term={"simple-warning"}><b>simple-warning</b></DictionaryLink>. 







 



 



<DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> 



**Description:** 



<GlossaryTerm styled={true} term={"signal"}><i>Signals</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not *handled*, reports the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> to *error output*. 



The precise mechanism for warning is as follows: 



**The warning condition is signaled** 



While the <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is being signaled, the **muffle-warning** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is established for use by a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> . If invoked, this <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> bypasses further action by <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink>, which in turn causes <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> to immediately return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**If no handler for the warning condition is found** 



If no handlers for the warning condition are found, or if all such handlers decline, then the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is reported to *error output* by <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> format. 



**nil is returned** 



The value returned by <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> if it returns is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



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
▷ Debug> :continue 1 



▷ Warning: You’re using very big numbers. 
*→* 4294967294 

```
**Side Effects:** 



A warning is issued. The debugger might be entered. 



**Affected By:** 



Existing handler bindings. 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, **\*error-output\***. 



**Exceptional Situations:** 



If *datum* is a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> and if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink>, or <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



If *datum* is a condition type, the result of (apply #’make-condition datum arguments) must be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, **muffle-warning**, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> 



