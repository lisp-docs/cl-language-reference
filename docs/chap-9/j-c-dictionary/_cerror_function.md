**cerror** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> *continue-format-control datum* &amp;rest *arguments →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*Continue-format-control*—a *format control*. 



*datum*, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type <DictionaryLink styled={true} term={"simple-error"}><b>simple-error</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> effectively invokes <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> on the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> named by *datum*. As with any function that implicitly calls <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not handled, (invoke-debugger <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) is executed. While signaling is going on, and while in the debugger if it is reached, it is possible to continue code execution (*i.e.*, to return from <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>) using the **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 



If *datum* is a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> can be supplied, but are used only in conjunction with the *continue-format-control*. 



**Examples:**
```lisp

(defun real-sqrt (n) 
  (when (minusp n) 
    (setq n (- n)) 

    
    
    **cerror** 
    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) (sqrt n)) 
(real-sqrt 4) 
*→* 2.0 
(real-sqrt -9) 
▷ Correctable error in REAL-SQRT: Tried to take sqrt(-9). 
▷ Restart options: 
▷ 1: Return sqrt(9) instead. 
▷ 2: Top level. 
▷ Debug> :continue 1 
*→* 3.0 
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
*→* 1/2 
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
*→* 10000 
(assure-large-number ’a) 
▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 
▷ Restart options: 
▷ 1: Enter a number. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 88 
*→* 88 
(assure-large-number 37) 
▷ Correctable error in ASSURE-LARGE-NUMBER: 37 is not a large number. 
▷ Restart options: 
▷ 1: Enter a number a bit larger than 37. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 259 
*→* 259 
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
*→* 88 
(assure-large-number 37) 
▷ Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. 
▷ Restart options: 
▷ 1: Enter a number a bit larger than 37. 
▷ 2: Top level. 
▷ Debug> :continue 1 
▷ Type a large number: 259 
*→* 259 

```
**Affected By:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>. 



Existing handler bindings. 



**See Also:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>, <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-type-error"}><b>simple-type-error</b></DictionaryLink> 



**Notes:** 



If *datum* is a *condition type* rather than a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, the <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> directive &#126;\* may be especially useful in the *continue-format-control* in order to ignore the <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm> in the *initialization argument list*. For example: 



(cerror "enter a new value to replace &#126;\*&#126;s" 



’not-a-number 



:argument a) 



