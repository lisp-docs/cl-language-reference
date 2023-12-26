**eval-when** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> (<ClLinks  term={"situation"}><i>\{situation\}</i></ClLinks>\*) <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"situation"}><i>situation</i></ClLinks>—One of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> :compile-toplevel, :load-toplevel, :execute, <ClLinks  term={"compile"}><b>compile</b></ClLinks>, <ClLinks  term={"load"}><b>load</b></ClLinks>, or <ClLinks  term={"eval"}><b>eval</b></ClLinks>. The use of <ClLinks  term={"eval"}><b>eval</b></ClLinks>, <ClLinks  term={"compile"}><b>compile</b></ClLinks>, and <ClLinks  term={"load"}><b>load</b></ClLinks> is deprecated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks> if they are executed, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if they are not. 



**Description:** 



The body of an <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> form is processed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>, but only in the <ClLinks  term={"situation"}><i>situations</i></ClLinks> listed. 



The use of the <ClLinks  term={"situation"}><i>situations</i></ClLinks> :compile-toplevel (or compile) and :load-toplevel (or load) controls whether and when <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> occurs when <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in code processed by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>. See Section 3.2.3 (File Compilation). 



The use of the <ClLinks  term={"situation"}><i>situation</i></ClLinks> :execute (or eval) controls whether evaluation occurs for other <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> <ClLinks  term={"form"}><i>forms</i></ClLinks>; that is, those that are not <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>, or those in code processed by <ClLinks  term={"eval"}><b>eval</b></ClLinks> or <ClLinks  term={"compile"}><b>compile</b></ClLinks>. If the :execute situation is specified in such a <ClLinks  term={"form"}><i>form</i></ClLinks>, then the body <ClLinks  term={"form"}><i>forms</i></ClLinks> are processed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>; otherwise, the <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> normally appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, but it is meaningful for it to appear as a <GlossaryTerm styled={true} term={"non-top-level form"}><i>non-top-level form</i></GlossaryTerm>. However, the compile-time side effects described in Section 3.2 (Compilation) only take place when <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. 



**Examples:**
```lisp
One example of the use of **eval-when** is that for the compiler to be able to read a file properly when it uses user-defined *reader macros*, it is necessary to write 
(eval-when (:compile-toplevel :load-toplevel :execute)  
  **eval-when** 
  (set-macro-character #\$ #’(lambda (stream char) 
			       (declare (ignore char)) 
			       (list ’dollar (read stream))))) → T 
This causes the call to **set-macro-character** to be executed in the compiler’s execution environment, thereby modifying its reader syntax table. 
;;; The EVAL-WHEN in this case is not at toplevel, so only the :EXECUTE 
;;; keyword is considered. At compile time, this has no effect. 
;;; At load time (if the LET is at toplevel), or at execution time 
;;; (if the LET is embedded in some other form which does not execute 
;;; until later) this sets (SYMBOL-FUNCTION ’FOO1) to a function which 
;;; returns 1. 
(let ((x 1)) 
  (eval-when (:execute :load-toplevel :compile-toplevel) 
    (setf (symbol-function ’foo1) #’(lambda () x)))) 
;;; If this expression occurs at the toplevel of a file to be compiled, 
;;; it has BOTH a compile time AND a load-time effect of setting 
;;; (SYMBOL-FUNCTION ’FOO2) to a function which returns 2. 
(eval-when (:execute :load-toplevel :compile-toplevel) 
  (let ((x 2)) 
    (eval-when (:execute :load-toplevel :compile-toplevel) 
      (setf (symbol-function ’foo2) #’(lambda () x))))) 
;;; If this expression occurs at the toplevel of a file to be compiled, 
;;; it has BOTH a compile time AND a load-time effect of setting the 
;;; function cell of FOO3 to a function which returns 3. 
(eval-when (:execute :load-toplevel :compile-toplevel) 
  (setf (symbol-function ’foo3) #’(lambda () 3))) 
;;; #4: This always does nothing. It simply returns NIL. 
(eval-when (:compile-toplevel) 
  (eval-when (:compile-toplevel) 
    (print ’foo4))) 
;;; If this form occurs at toplevel of a file to be compiled, FOO5 is 
;;; printed at compile time. If this form occurs in a non-top-level 
;;; position, nothing is printed at compile time. Regardless of context, 
;;; nothing is ever printed at load time or execution time. 
(eval-when (:compile-toplevel) 
  (eval-when (:execute) 
    (print ’foo5))) 
;;; If this form occurs at toplevel of a file to be compiled, FOO6 is 
;;; printed at compile time. If this form occurs in a non-top-level  
**eval-when** 
;;; position, nothing is printed at compile time. Regardless of context, 
;;; nothing is ever printed at load time or execution time. 
(eval-when (:execute :load-toplevel) 
  (eval-when (:compile-toplevel) 
    (print ’foo6))) 
```
**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, Section 3.2 (Compilation) 



**Notes:** 



The following effects are logical consequences of the definition of <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks>: 



*•* Execution of a single <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> expression executes the body code at most once. 



*• Macros* intended for use in *top level forms* should be written so that side-effects are done by the <ClLinks  term={"form"}><i>forms</i></ClLinks> in the macro expansion. The macro-expander itself should not do the side-effects. 



For example: 



Wrong: 



(defmacro foo () 



(really-foo) 



‘(really-foo)) 



Right: 



(defmacro foo () 



‘(eval-when (:compile-toplevel :execute :load-toplevel) (really-foo))) 



Adherence to this convention means that such <ClLinks  term={"macro"}><i>macros</i></ClLinks> behave intuitively when appearing as *non-top-level forms*. 



*•* Placing a variable binding around an <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> reliably captures the binding because the compile-time-too mode cannot occur (*i.e.*, introducing a variable binding means that the <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> is not a *top level form*). For example, 



(let ((x 3)) 



(eval-when (:execute :load-toplevel :compile-toplevel) (print x))) 



prints 3 at execution (*i.e.*, load) time, and does not print anything at compile time. This is important so that expansions of <ClLinks  term={"defun"}><b>defun</b></ClLinks> and <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> can be done in terms of <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> and can correctly capture the *lexical environment*. 



(defun bar (x) (defun foo () (+ x 3)))  







(defun bar (x) 



(progn (eval-when (:compile-toplevel) 



(compiler::notice-function-definition ’foo ’(x))) 



(eval-when (:execute :load-toplevel) 



(setf (symbol-function ’foo) #’(lambda () (+ x 3)))))) 



which would be treated by the above rules the same as 



(defun bar (x) 



(setf (symbol-function ’foo) #’(lambda () (+ x 3)))) 



when the definition of bar is not a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. 



