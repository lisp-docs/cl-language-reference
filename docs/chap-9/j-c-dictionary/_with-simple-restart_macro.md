**with-simple-restart** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> (*name format-control \{format-argument\}*\*) <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*format-control*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



*format-argument*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (*i.e.*, a <GlossaryTerm styled={true} term={"format argument"}><i>format argument</i></GlossaryTerm>). 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—in the normal situation, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>; in the exceptional situation where the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is invoked, two values—<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> establishes a restart. 



If the restart designated by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not invoked while executing <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, all values returned by the last of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are returned. If the restart designated by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is invoked, control is transferred to <ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks>, which returns two values, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, an anonymous restart is established. 



The *format-control* and *format-arguments* are used report the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> 



**Examples:**
```lisp
 
(defun read-eval-print-loop (level) 
(with-simple-restart (abort "Exit command level ~D." level) 
(loop 
(with-simple-restart (abort "Return to command level ~D." level) 
(let ((form (prog2 (fresh-line) (read) (fresh-line)))) 
(prin1 (eval form))))))) 
→ READ-EVAL-PRINT-LOOP 
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
→ SOMETHING-BIG 
```
**See Also:** 



<ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> is shorthand for one of the most common uses of <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>. 



 



 



<ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> could be defined by: 



(defmacro with-simple-restart ((restart-name format-control 



&amp;rest format-arguments) 



&amp;body forms) 



‘(restart-case (progn ,@forms) 



(,restart-name () 



:report (lambda (stream) 



(format stream ,format-control ,@format-arguments)) 



(values nil t)))) 



Because the second return value is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> so that the two situations can be distinguished. 



**abort** <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> 



**Data Arguments Required:** 



None. 



**Description:** 



The intent of the **abort** restart is to allow return to the innermost “command level.” Implementors are encouraged to make sure that there is always a restart named **abort** around any user code so that user code can call **abort** at any time and expect something reasonable to happen; exactly what the reasonable thing is may vary somewhat. Typically, in an interactive listener, the invocation of 



**abort** returns to the *Lisp reader* phase of the *Lisp read-eval-print loop*, though in some batch or multi-processing situations there may be situations in which having it kill the running process is more appropriate. 



**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, **abort** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) 







 



 



**continue** <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> 



**Data Arguments Required:** 



None. 



**Description:** 



The **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is generally part of protocols where there is a single “obvious” way to continue, such as in <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> and <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>. Some user-defined protocols may also wish to incorporate it for similar reasons. In general, however, it is more reliable to design a special purpose restart with a name that more directly suits the particular application. 



**Examples:**
```lisp
 
(let ((x 3)) 
(handler-bind ((error #’(lambda (c) 
(let ((r (find-restart ’continue c))) 
(when r (invoke-restart r)))))) 
(cond ((not (floatp x)) 
(cerror "Try floating it." "~D is not a float." x) 
(float x)) 
(t x)))) → 3.0 
```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, **continue** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>), <ClLinks styled={true} term={"assert"}><b>assert</b></ClLinks>, <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> 



**muffle-warning** <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> 



**Data Arguments Required:** 



None. 



**Description:** 



This <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is established by <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> so that <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> of <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks> <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> have a way to tell <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> that a warning has already been dealt with and that no further action is warranted. 



**Examples:**
```lisp
 
(defvar \*all-quiet\* nil) → \*ALL-QUIET\* 
(defvar \*saved-warnings\* ’()) → \*SAVED-WARNINGS\* 
(defun quiet-warning-handler (c) 
(when \*all-quiet\* 
(let ((r (find-restart ’muffle-warning c))) 
 
 
(when r 
(push c \*saved-warnings\*) 
(invoke-restart r))))) 
→ CUSTOM-WARNING-HANDLER 
(defmacro with-quiet-warnings (&body forms) 
‘(let ((\*all-quiet\* t) 
(\*saved-warnings\* ’())) 
(handler-bind ((warning #’quiet-warning-handler)) 
,@forms 
\*saved-warnings\*))) 
→ WITH-QUIET-WARNINGS 
(setq saved 
(with-quiet-warnings 
(warn "Situation #1.") 
(let ((\*all-quiet\* nil)) 
(warn "Situation #2.")) 
(warn "Situation #3."))) 
▷ Warning: Situation #2. 
→ (#<SIMPLE-WARNING 42744421> #<SIMPLE-WARNING 42744365>) 
(dolist (s saved) (format t "~&~A~%" s)) 
▷ Situation #3. 
▷ Situation #1. 
→ NIL 
```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, **muffle-warning** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>), <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> 



**store-value** <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> 



**Data Arguments Required:** 



a value to use instead (on an ongoing basis). 



**Description:** 



The **store-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is generally used by <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> trying to recover from errors of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> such as <ClLinks styled={true} term={"cell-error"}><b>cell-error</b></ClLinks> or <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks>, which may wish to supply a replacement datum to be stored permanently. 



**Examples:**
```lisp
 
(defun type-error-auto-coerce (c) 
(when (typep c ’type-error) 
(let ((r (find-restart ’store-value c))) 
(handler-case (let ((v (coerce (type-error-datum c) 
 
 
(type-error-expected-type c)))) 
(invoke-restart r v)) 
(error ()))))) → TYPE-ERROR-AUTO-COERCE 
(let ((x 3)) 
(handler-bind ((type-error #’type-error-auto-coerce)) 
(check-type x float) 
x)) → 3.0 
```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, **store-value** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>), <ClLinks styled={true} term={"ccase"}><b>ccase</b></ClLinks>, <ClLinks styled={true} term={"check-type"}><b>check-type</b></ClLinks>, <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, **use-value** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>) 



**use-value** <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> 



**Data Arguments Required:** 



a value to use instead (once). 



**Description:** 



The **use-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is generally used by <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> trying to recover from errors of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> such as <ClLinks styled={true} term={"cell-error"}><b>cell-error</b></ClLinks>, where the handler may wish to supply a replacement datum for one-time use. 



**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, **use-value** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>), **store-value** (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>) 



<b><sup>abort, continue, muffle-warning, store-value, use</sup> value</b> <i>Function</i> 



**Syntax:** 



**abort** &amp;optional *condition →* 



**continue** &amp;optional *condition →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**muffle-warning** &amp;optional *condition →* 



**store-value** <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> &amp;optional *condition →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**use-value** <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> &amp;optional *condition →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 







 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Arguments and Values:** 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a *condition object*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Transfers control to the most recently established <GlossaryTerm styled={true} term={"applicable restart"}><i>applicable restart</i></GlossaryTerm> having the same name as the function. That is, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **abort** searches for an <ClLinks styled={true} term={"applicable"}><i>applicable</i></ClLinks> **abort** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **continue** searches for an <ClLinks styled={true} term={"applicable"}><i>applicable</i></ClLinks> **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, and so on. 



If no such <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> exists, the functions **continue**, **store-value**, and **use-value** return <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, and the functions **abort** and **muffle-warning** signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks>. 



When <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, only those <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered that are either explicitly associated with that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, or not associated with any <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>; that is, the excluded <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are those that are associated with a non-empty set of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of which the given <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. If <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, all <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered. 



**Examples:**
```lisp
;;; Example of the ABORT retart 
(defmacro abort-on-error (&body forms) 
  ‘(handler-bind ((error #’abort)) 
     ,@forms)) → ABORT-ON-ERROR 
(abort-on-error (+ 3 5)) → 8 
(abort-on-error (error "You lose.")) 
▷ Returned to Lisp Top Level. 
;;; Example of the CONTINUE restart 
(defun real-sqrt (n) 
  (when (minusp n) 
    (setq n (- n)) 
    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) 
  (sqrt n)) 
(real-sqrt 4) → 2 
(real-sqrt -9) 
▷ Error: Tried to take sqrt(-9). 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return sqrt(9) instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> (continue) 
▷ Return sqrt(9) instead. 
→ 3 

**abort, continue, muffle-warning, store-value, use-value** 
(handler-bind ((error #’(lambda (c) (continue)))) 
  (real-sqrt -9)) → 3 
;;; Example of the MUFFLE-WARNING restart 
(defun count-down (x) 
  (do ((counter x (1- counter))) 
      ((= counter 0) ’done) 
    (when (= counter 1) 
      (warn "Almost done")) 
    (format t "~&~D~%" counter))) 
→ COUNT-DOWN 
(count-down 3) 
▷ 3 
▷ 2 
▷ Warning: Almost done 
▷ 1 
→ DONE 
(defun ignore-warnings-while-counting (x) 
  (handler-bind ((warning #’ignore-warning)) 
    (count-down x))) 
→ IGNORE-WARNINGS-WHILE-COUNTING 
(defun ignore-warning (condition) 
  (declare (ignore condition)) 
  (muffle-warning)) 
→ IGNORE-WARNING 
(ignore-warnings-while-counting 3) 
▷ 3 
▷ 2 
▷ 1 
→ DONE 
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
(setq a 1234) → 1234 
(careful-symbol-value ’a) → 1234 
(makunbound ’a) → A 
(careful-symbol-value ’a) 
▷ Error: A is not bound. 
▷ To continue, type :CONTINUE followed by an option number. 
▷ 1: Specify a value to use this time. 
▷ 2: Specify a value to store and use in the future. 
▷ 3: Return to Lisp Toplevel. 
▷ Debug> (use-value 12) 
→ 12 
(careful-symbol-value ’a) 
▷ Error: A is not bound. 
▷ To continue, type :CONTINUE followed by an option number. 
▷ 1: Specify a value to use this time. 
▷ 2: Specify a value to store and use in the future. 
▷ 3: Return to Lisp Toplevel. 
▷ Debug> (store-value 24) 
→ 24 
(careful-symbol-value ’a) 
→ 24 
;;; Example of the USE-VALUE restart 
(defun add-symbols-with-default (default &rest symbols) 
  (handler-bind ((sys:unbound-symbol 
		  #’(lambda (c) 
		      (declare (ignore c)) 
		      (use-value default)))) 
    (apply #’+ (mapcar #’careful-symbol-value symbols)))) 
→ ADD-SYMBOLS-WITH-DEFAULT 
(setq x 1 y 2) → 2 
(add-symbols-with-default 3 ’x ’y ’z) → 6 
```
**Side Effects:** 



A transfer of control may occur if an appropriate <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is available, or (in the case of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **abort** or the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **muffle-warning**) execution may be stopped. 



**Affected By:** 



Each of these functions can be affected by the presence of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> having the same name. 



 



 



**abort, continue, muffle-warning, store-value, use-value** 



**Exceptional Situations:** 



If an appropriate **abort** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is not available for the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **abort**, or an appropriate **muffle-warning** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is not available for the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **muffle-warning**, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), <ClLinks styled={true} term={"assert"}><b>assert</b></ClLinks>, <ClLinks styled={true} term={"ccase"}><b>ccase</b></ClLinks>, <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>, <ClLinks styled={true} term={"check-type"}><b>check-type</b></ClLinks>, <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, **use-value**, <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> 



**Notes:** 



(abort condition) *≡* (invoke-restart ’abort) 



(muffle-warning) *≡* (invoke-restart ’muffle-warning) 



(continue) *≡* (let ((r (find-restart ’continue))) (if r (invoke-restart r))) (use-value *x*) *≡* (let ((r (find-restart ’use-value))) (if r (invoke-restart r *x*))) (store-value x) *≡* (let ((r (find-restart ’store-value))) (if r (invoke-restart r *x*))) 



No functions defined in this specification are required to provide a **use-value** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 

