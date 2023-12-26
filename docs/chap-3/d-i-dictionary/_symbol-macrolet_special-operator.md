**symbol-macrolet** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> (*\{*(*symbol expansion*)*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*expansion*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> provides a mechanism for affecting the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> environment for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> lexically establishes expansion functions for each of the <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm> named by <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. The only guaranteed property of an expansion <ClLinks  term={"function"}><i>function</i></ClLinks> for a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> is that when it is applied to the <ClLinks  term={"form"}><i>form</i></ClLinks> and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> it returns the correct expansion. (In particular, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the expansion is conceptually stored in the expansion function, the <ClLinks  term={"environment"}><i>environment</i></ClLinks>, or both.) 



Each reference to <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as a variable within the lexical <ClLinks  term={"scope"}><i>scope</i></ClLinks> of <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



Exactly the same <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> are allowed as for <ClLinks  term={"let"}><b>let</b></ClLinks> with one exception: <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> signals an error if a <ClLinks  term={"special"}><b>special</b></ClLinks> declaration names one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> being defined by <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



When the <ClLinks  term={"form"}><i>forms</i></ClLinks> of the <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> form are expanded, any use of <ClLinks  term={"setq"}><b>setq</b></ClLinks> to set the value of one of the specified variables is treated as if it were a <ClLinks  term={"setf"}><b>setf</b></ClLinks>. <ClLinks  term={"psetq"}><b>psetq</b></ClLinks> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> defined as a symbol macro is treated as if it were a <ClLinks  term={"psetf"}><b>psetf</b></ClLinks>, and <ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> is treated as if it were a <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"values"}><b>values</b></ClLinks>. 



The use of <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> can be shadowed by <ClLinks  term={"let"}><b>let</b></ClLinks>. In other words, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> only substitutes for occurrences of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that would be in the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of a lexical binding of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> surrounding the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Examples:**
```lisp
 
;;; The following is equivalent to 
;;; (list ’foo (let ((x ’bar)) x)), 
 
 
;;; not 
;;; (list ’foo (let ((’foo ’bar)) ’foo)) 
(symbol-macrolet ((x ’foo)) 
(list x (let ((x ’bar)) x))) 
*!* (foo bar) 
*not* 
*!* (foo foo) 
(symbol-macrolet ((x ’(foo x))) 
(list x)) 
*!* ((FOO X)) 
```
**Exceptional Situations:** 



If an attempt is made to bind a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is defined as a <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



If <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> contains a <ClLinks  term={"special"}><b>special</b></ClLinks> declaration that names one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> being bound by <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks>, <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> 



**Notes:** 



The special form <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> is the basic mechanism that is used to implement <ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks>. 



If a <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <ClLinks  term={"form"}><i>forms</i></ClLinks> are also processed as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. See Section 3.2.3 (File Compilation). 



*⇤***macroexpand-hook***⇤ Variable* 



**Value Type:** 



a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of three <ClLinks  term={"argument"}><i>arguments</i></ClLinks>: a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



**Initial Value:** 



a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a function that is equivalent to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"funcall"}><b>funcall</b></ClLinks>, but that might have additional <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> side-e↵ects. 



**Description:** 



Used as the expansion interface hook by <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> to control the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> process. When a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> is to be expanded, this <ClLinks  term={"function"}><i>function</i></ClLinks> is called with three arguments: the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> in which the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> is to be expanded. The <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; the consequences are undefined if the <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> is referred to outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the macro expansion function. 



Evaluation and 



 



 



**Examples:**
```lisp
(defun hook (expander form env) 
  (format t "Now expanding: ~S~%" form) 
  (funcall expander form env)) *!* HOOK 
(defmacro machook (x y) ‘(/ (+ ,x ,y) 2)) *!* MACHOOK 
(macroexpand ’(machook 1 2)) *!* (/ (+ 1 2) 2), *true* 
(let ((\*macroexpand-hook\* #’hook)) (macroexpand ’(machook 1 2))) 
▷ Now expanding (MACHOOK 1 2) 
*!* (/ (+ 1 2) 2), *true* 
```
**See Also:** 



<ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks>, <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks>, <ClLinks  term={"funcall"}><b>funcall</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



The net e↵ect of the chosen initial value is to just invoke the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, giving it the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> and <ClLinks  term={"environment"}><i>environment</i></ClLinks> as its two arguments. 



Users or user programs can <ClLinks  term={"assign"}><i>assign</i></ClLinks> this <ClLinks  term={"variable"}><i>variable</i></ClLinks> to customize or trace the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> mechanism. Note, however, that this <ClLinks  term={"variable"}><i>variable</i></ClLinks> is a global resource, potentially shared by multiple <ClLinks  term={"program"}><i>programs</i></ClLinks>; as such, if any two <ClLinks  term={"program"}><i>programs</i></ClLinks> depend for their correctness on the setting of this <ClLinks  term={"variable"}><i>variable</i></ClLinks>, those <ClLinks  term={"program"}><i>programs</i></ClLinks> may not be able to run in the same *Lisp image*. For this reason, it is frequently best to confine its uses to debugging situations. 



Users who put their own function into **\*macroexpand-hook\*** should consider saving the previous value of the hook, and calling that value from their own. 



