**eval-when** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> (<GlossaryTerm styled={true} term={"situation"}><i>\{situation\}</i></GlossaryTerm>\*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>—One of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> :compile-toplevel, :load-toplevel, :execute, <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, or <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>. The use of <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, and <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> is deprecated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> if they are executed, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if they are not. 



**Description:** 



The body of an <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> form is processed as an *implicit progn*, but only in the <GlossaryTerm styled={true} term={"situation"}><i>situations</i></GlossaryTerm> listed. 



The use of the <GlossaryTerm styled={true} term={"situation"}><i>situations</i></GlossaryTerm> :compile-toplevel (or compile) and :load-toplevel (or load) controls whether and when <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> occurs when <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> appears as a *top level form* in code processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. See Section 3.2.3 (File Compilation). 



The use of the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> :execute (or eval) controls whether evaluation occurs for other <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; that is, those that are not *top level forms*, or those in code processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> or <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>. If the :execute situation is specified in such a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, then the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are processed as an *implicit progn*; otherwise, the <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described in Section 3.2 (Compilation) only take place when <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> appears as a *top level form*. 



**Examples:**
```lisp

One example of the use of **eval-when** is that for the compiler to be able to read a file properly when it uses user-defined *reader macros*, it is necessary to write 
(eval-when (:compile-toplevel :load-toplevel :execute)  

  **eval-when** 
  (set-macro-character #\$ #’(lambda (stream char) 
			       (declare (ignore char)) 
			       (list ’dollar (read stream))))) *→* T 
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



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, Section 3.2 (Compilation) 



**Notes:** 



The following effects are logical consequences of the definition of <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink>: 



*•* Execution of a single <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> expression executes the body code at most once. 



*• Macros* intended for use in *top level forms* should be written so that side-effects are done by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the macro expansion. The macro-expander itself should not do the side-effects. 



For example: 



Wrong: 



(defmacro foo () 



(really-foo) 



‘(really-foo)) 



Right: 



(defmacro foo () 



‘(eval-when (:compile-toplevel :execute :load-toplevel) (really-foo))) 



Adherence to this convention means that such <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> behave intuitively when appearing as *non-top-level forms*. 



*•* Placing a variable binding around an <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> reliably captures the binding because the compile-time-too mode cannot occur (*i.e.*, introducing a variable binding means that the <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> is not a *top level form*). For example, 



(let ((x 3)) 



(eval-when (:execute :load-toplevel :compile-toplevel) (print x))) 



prints 3 at execution (*i.e.*, load) time, and does not print anything at compile time. This is important so that expansions of <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> and <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> can be done in terms of <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> and can correctly capture the *lexical environment*. 



(defun bar (x) (defun foo () (+ x 3)))  







(defun bar (x) 



(progn (eval-when (:compile-toplevel) 



(compiler::notice-function-definition ’foo ’(x))) 



(eval-when (:execute :load-toplevel) 



(setf (symbol-function ’foo) #’(lambda () (+ x 3)))))) 



which would be treated by the above rules the same as 



(defun bar (x) 



(setf (symbol-function ’foo) #’(lambda () (+ x 3)))) 



when the definition of bar is not a *top level form*. 



