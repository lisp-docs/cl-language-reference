**cerror** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> *continue-format-control datum* &amp;rest *arguments →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*Continue-format-control*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



*datum*, <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>—<ClLinks styled={true} term={"designator"}><i>designators</i></ClLinks> for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of default type <ClLinks styled={true} term={"simple-error"}><b>simple-error</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> effectively invokes <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> on the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> named by *datum*. As with any function that implicitly calls <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not handled, (invoke-debugger <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>) is executed. While signaling is going on, and while in the debugger if it is reached, it is possible to continue code execution (*i.e.*, to return from <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>) using the **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 



If *datum* is a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> can be supplied, but are used only in conjunction with the *continue-format-control*. 



**Examples:**
```lisp
(defun real-sqrt (n) 
  (when (minusp n) 
    (setq n (- n)) 
    
    
    **cerror** 
    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) (sqrt n)) 
(real-sqrt 4) 
→ 2.0 
(real-sqrt -9) 
▷ Correctable error in REAL-SQRT: Tried to take sqrt(-9). 
▷ Restart options: 
▷ 1: Return sqrt(9) instead. 
▷ 2: Top level. 
▷ Debug> :continue 1 
→ 3.0 
(define-condition not-a-number (error) 
  ((argument :reader not-a-number-argument :initarg :argument)) (:report (lambda (condition stream) 
									   (format stream "~S is not a number." 
										   (not-a-number-argument condition))))) 
(defun assure-number (n) 
  (loop (when (numberp n) (return n)) 
   (cerror "Enter a number." 
	   ’not-a-number :argument n) 
   (format t "~&Type a number: ") 
   (setq n (read)) 
   (fresh-line))) 
(assure-number ’a) 
▷ Correctable error in ASSURE-NUMBER: A is not a number. 
▷ Restart options: 
▷ 1: Enter a number. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a number: 1/2 
→ 1/2 
(defun assure-large-number (n) 
  (loop (when (and (numberp n) (> n 73)) (return n)) 
   (cerror "Enter a number~:[~; a bit larger than ~D~]." 
	   "~\*~A is not a large number." 
	   (numberp n) n) 
   (format t "~&Type a large number: ") 
   (setq n (read)) 
   (fresh-line))) 

**cerror** 
(assure-large-number 10000) 
→ 10000 
(assure-large-number ’a) 
▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 
▷ Restart options: 
▷ 1: Enter a number. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 88 
→ 88 
(assure-large-number 37) 
▷ Correctable error in ASSURE-LARGE-NUMBER: 37 is not a large number. 
▷ Restart options: 
▷ 1: Enter a number a bit larger than 37. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 259 
→ 259 
(define-condition not-a-large-number (error) 
  ((argument :reader not-a-large-number-argument :initarg :argument)) 
  (:report (lambda (condition stream) 
	     (format stream "~S is not a large number." 
		     (not-a-large-number-argument condition))))) 
(defun assure-large-number (n) 
  (loop (when (and (numberp n) (> n 73)) (return n)) 
   (cerror "Enter a number~3\*~:[~; a bit larger than ~\*~D~]." 
	   ’not-a-large-number 
	   :argument n 
	   :ignore (numberp n) 
	   :ignore n 
	   :allow-other-keys t) 
   (format t "~&Type a large number: ") 
   (setq n (read)) 
   (fresh-line))) 
(assure-large-number ’a) 
▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 
▷ Restart options: 
▷ 1: Enter a number. 

▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 88 
→ 88 
(assure-large-number 37) 
▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 
▷ Restart options: 
▷ 1: Enter a number a bit larger than 37. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 259 
→ 259 
```
**Affected By:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>. 



Existing handler bindings. 



**See Also:** 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>, <ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks>, <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>, <ClLinks styled={true} term={"simple-type-error"}><b>simple-type-error</b></ClLinks> 



**Notes:** 



If *datum* is a *condition type* rather than a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, the <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> directive &#126;\* may be especially useful in the *continue-format-control* in order to ignore the <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks> in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. For example: 



(cerror "enter a new value to replace &#126;\*&#126;s" 



’not-a-number 



:argument a) 



