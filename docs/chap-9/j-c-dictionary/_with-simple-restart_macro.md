**with-simple-restart** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> (*name format-control \{format-argument\}*\*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*format-control*—a *format control*. 



*format-argument*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (*i.e.*, a *format argument*). 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—in the normal situation, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; in the exceptional situation where the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is invoked, two values—<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> establishes a restart. 



If the restart designated by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not invoked while executing <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, all values returned by the last of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are returned. If the restart designated by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is invoked, control is transferred to <DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink>, which returns two values, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, an anonymous restart is established. 



The *format-control* and *format-arguments* are used report the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> 



**Examples:**
```lisp
 
(defun read-eval-print-loop (level) 
(with-simple-restart (abort "Exit command level ~D." level) 
(loop 
(with-simple-restart (abort "Return to command level ~D." level) 
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
(with-simple-restart (nil "Give up on computing 2<i><sup>∧</sup></i>~D." x) 
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
▷ Debug> :continue 1 
*→* SOMETHING-BIG 

```
**See Also:** 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> is shorthand for one of the most common uses of <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>. 



 



 



<DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> could be defined by: 



(defmacro with-simple-restart ((restart-name format-control 



&amp;rest format-arguments) 



&amp;body forms) 



‘(restart-case (progn ,@forms) 



(,restart-name () 



:report (lambda (stream) 



(format stream ,format-control ,@format-arguments)) 



(values nil t)))) 



Because the second return value is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> so that the two situations can be distinguished. 



**abort** <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> 



**Data Arguments Required:** 



None. 



**Description:** 



The intent of the **abort** restart is to allow return to the innermost “command level.” Implementors are encouraged to make sure that there is always a restart named **abort** around any user code so that user code can call **abort** at any time and expect something reasonable to happen; exactly what the reasonable thing is may vary somewhat. Typically, in an interactive listener, the invocation of 



**abort** returns to the *Lisp reader* phase of the *Lisp read-eval-print loop*, though in some batch or multi-processing situations there may be situations in which having it kill the running process is more appropriate. 



**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, **abort** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) 







 



 



**continue** <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> 



**Data Arguments Required:** 



None. 



**Description:** 



The **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is generally part of protocols where there is a single “obvious” way to continue, such as in <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> and <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>. Some user-defined protocols may also wish to incorporate it for similar reasons. In general, however, it is more reliable to design a special purpose restart with a name that more directly suits the particular application. 



**Examples:**
```lisp
 
(let ((x 3)) 
(handler-bind ((error #’(lambda (c) 
(let ((r (find-restart ’continue c))) 
(when r (invoke-restart r)))))) 
(cond ((not (floatp x)) 
(cerror "Try floating it." "~D is not a float." x) 
(float x)) 
(t x)))) *→* 3.0 

```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, **continue** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>), <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink>, <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> 



**muffle-warning** <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> 



**Data Arguments Required:** 



None. 



**Description:** 



This <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is established by <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> so that <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> of <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> have a way to tell <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> that a warning has already been dealt with and that no further action is warranted. 



**Examples:**
```lisp
 
(defvar \*all-quiet\* nil) *→* \*ALL-QUIET\* 
(defvar \*saved-warnings\* ’()) *→* \*SAVED-WARNINGS\* 
(defun quiet-warning-handler (c) 
(when \*all-quiet\* 
(let ((r (find-restart ’muffle-warning c))) 

 
 
(when r 
(push c \*saved-warnings\*) 
(invoke-restart r))))) 
*→* CUSTOM-WARNING-HANDLER 
(defmacro with-quiet-warnings (&body forms) 
‘(let ((\*all-quiet\* t) 
(\*saved-warnings\* ’())) 
(handler-bind ((warning #’quiet-warning-handler)) 
,@forms 
\*saved-warnings\*))) 
*→* WITH-QUIET-WARNINGS 
(setq saved 
(with-quiet-warnings 
(warn "Situation #1.") 
(let ((\*all-quiet\* nil)) 
(warn "Situation #2.")) 
(warn "Situation #3."))) 
▷ Warning: Situation #2. 
*→* (#<SIMPLE-WARNING 42744421> #<SIMPLE-WARNING 42744365>) 
(dolist (s saved) (format t "~&~A~%" s)) 
▷ Situation #3. 
▷ Situation #1. 
*→* NIL 

```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, **muffle-warning** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>), <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> 



**store-value** <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> 



**Data Arguments Required:** 



a value to use instead (on an ongoing basis). 



**Description:** 



The **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is generally used by <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> trying to recover from errors of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"cell-error"}><b>cell-error</b></DictionaryLink> or <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink>, which may wish to supply a replacement datum to be stored permanently. 



**Examples:**
```lisp
 
(defun type-error-auto-coerce (c) 
(when (typep c ’type-error) 
(let ((r (find-restart ’store-value c))) 
(handler-case (let ((v (coerce (type-error-datum c) 

 
 
(type-error-expected-type c)))) 
(invoke-restart r v)) 
(error ()))))) *→* TYPE-ERROR-AUTO-COERCE 
(let ((x 3)) 
(handler-bind ((type-error #’type-error-auto-coerce)) 
(check-type x float) 
x)) *→* 3.0 

```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, **store-value** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>), <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>, <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, **use-value** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>) 



**use-value** <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> 



**Data Arguments Required:** 



a value to use instead (once). 



**Description:** 



The **use-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is generally used by <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> trying to recover from errors of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"cell-error"}><b>cell-error</b></DictionaryLink>, where the handler may wish to supply a replacement datum for one-time use. 



**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, **use-value** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>), **store-value** (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>) 



<b><sup>abort, continue, muffle-warning, store-value, use</sup> value</b> <i>Function</i> 



**Syntax:** 



**abort** &amp;optional *condition →* 



**continue** &amp;optional *condition →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**muffle-warning** &amp;optional *condition →* 



**store-value** <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> &amp;optional *condition →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**use-value** <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> &amp;optional *condition →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 







 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a *condition object*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Transfers control to the most recently established *applicable restart* having the same name as the function. That is, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **abort** searches for an <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm> **abort** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **continue** searches for an <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm> **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, and so on. 



If no such <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> exists, the functions **continue**, **store-value**, and **use-value** return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, and the functions **abort** and **muffle-warning** signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink>. 



When <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, only those <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered that are either explicitly associated with that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, or not associated with any <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>; that is, the excluded <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are those that are associated with a non-empty set of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of which the given <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, all <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered. 



**Examples:**
```lisp

;;; Example of the ABORT retart 
(defmacro abort-on-error (&body forms) 
  ‘(handler-bind ((error #’abort)) 
     ,@forms)) *→* ABORT-ON-ERROR 
(abort-on-error (+ 3 5)) *→* 8 
(abort-on-error (error "You lose.")) 
▷ Returned to Lisp Top Level. 
;;; Example of the CONTINUE restart 
(defun real-sqrt (n) 
  (when (minusp n) 
    (setq n (- n)) 
    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) 
  (sqrt n)) 
(real-sqrt 4) *→* 2 
(real-sqrt -9) 
▷ Error: Tried to take sqrt(-9). 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return sqrt(9) instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> (continue) 
▷ Return sqrt(9) instead. 
*→* 3 



**abort, continue, muffle-warning, store-value, use-value** 
(handler-bind ((error #’(lambda (c) (continue)))) 
  (real-sqrt -9)) *→* 3 
;;; Example of the MUFFLE-WARNING restart 
(defun count-down (x) 
  (do ((counter x (1- counter))) 
      ((= counter 0) ’done) 
    (when (= counter 1) 
      (warn "Almost done")) 
    (format t "~&~D~%" counter))) 
*→* COUNT-DOWN 
(count-down 3) 
▷ 3 
▷ 2 
▷ Warning: Almost done 
▷ 1 
*→* DONE 
(defun ignore-warnings-while-counting (x) 
  (handler-bind ((warning #’ignore-warning)) 
    (count-down x))) 
*→* IGNORE-WARNINGS-WHILE-COUNTING 
(defun ignore-warning (condition) 
  (declare (ignore condition)) 
  (muffle-warning)) 
*→* IGNORE-WARNING 
(ignore-warnings-while-counting 3) 
▷ 3 
▷ 2 
▷ 1 
*→* DONE 
;;; Example of the STORE-VALUE and USE-VALUE restarts 
(defun careful-symbol-value (symbol) 
  (check-type symbol symbol) 
  (restart-case (if (boundp symbol) 
		    (return-from careful-symbol-value 
		      (symbol-value symbol)) 
		    (error ’unbound-variable 
			    :name symbol)) 
    (use-value (value) 
      :report "Specify a value to use this time." 
      value) 

    
    
    **abort, continue, muffle-warning, store-value, use-value** 
    (store-value (value) 
      :report "Specify a value to store and use in the future." 
      (setf (symbol-value symbol) value)))) 
(setq a 1234) *→* 1234 
(careful-symbol-value ’a) *→* 1234 
(makunbound ’a) *→* A 
(careful-symbol-value ’a) 
▷ Error: A is not bound. 
▷ To continue, type :CONTINUE followed by an option number. 
▷ 1: Specify a value to use this time. 
▷ 2: Specify a value to store and use in the future. 
▷ 3: Return to Lisp Toplevel. 
▷ Debug> (use-value 12) 
*→* 12 
(careful-symbol-value ’a) 
▷ Error: A is not bound. 
▷ To continue, type :CONTINUE followed by an option number. 
▷ 1: Specify a value to use this time. 
▷ 2: Specify a value to store and use in the future. 
▷ 3: Return to Lisp Toplevel. 
▷ Debug> (store-value 24) 
*→* 24 
(careful-symbol-value ’a) 
*→* 24 
;;; Example of the USE-VALUE restart 
(defun add-symbols-with-default (default &rest symbols) 
  (handler-bind ((sys:unbound-symbol 
		  #’(lambda (c) 
		      (declare (ignore c)) 
		      (use-value default)))) 
    (apply #’+ (mapcar #’careful-symbol-value symbols)))) 
*→* ADD-SYMBOLS-WITH-DEFAULT 
(setq x 1 y 2) *→* 2 
(add-symbols-with-default 3 ’x ’y ’z) *→* 6 

```
**Side Effects:** 



A transfer of control may occur if an appropriate <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is available, or (in the case of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **abort** or the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **muffle-warning**) execution may be stopped. 



**Affected By:** 



Each of these functions can be affected by the presence of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> having the same name. 



 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Exceptional Situations:** 



If an appropriate **abort** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is not available for the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **abort**, or an appropriate **muffle-warning** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is not available for the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **muffle-warning**, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <DictionaryLink styled={true} term={"assert"}><b>assert</b></DictionaryLink>, <DictionaryLink styled={true} term={"ccase"}><b>ccase</b></DictionaryLink>, <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>, <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"ctypecase"}><b>ctypecase</b></DictionaryLink>, **use-value**, <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> 



**Notes:** 



(abort condition) *≡* (invoke-restart ’abort) 



(muffle-warning) *≡* (invoke-restart ’muffle-warning) 



(continue) *≡* (let ((r (find-restart ’continue))) (if r (invoke-restart r))) (use-value *x*) *≡* (let ((r (find-restart ’use-value))) (if r (invoke-restart r *x*))) (store-value x) *≡* (let ((r (find-restart ’store-value))) (if r (invoke-restart r *x*))) 



No functions defined in this specification are required to provide a **use-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 

