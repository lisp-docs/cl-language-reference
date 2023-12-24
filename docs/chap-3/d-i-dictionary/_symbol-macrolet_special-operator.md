**symbol-macrolet** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> (*\{*(*symbol expansion*)*\}*\*) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*expansion*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> provides a mechanism for affecting the *macro expansion* environment for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> lexically establishes expansion functions for each of the *symbol macros* named by <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. The only guaranteed property of an expansion <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> for a *symbol macro* is that when it is applied to the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> it returns the correct expansion. (In particular, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the expansion is conceptually stored in the expansion function, the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, or both.) 



Each reference to <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as a variable within the lexical <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>. 



Exactly the same <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> are allowed as for <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> with one exception: <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> signals an error if a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration names one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> being defined by <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



When the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> of the <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> form are expanded, any use of <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> to set the value of one of the specified variables is treated as if it were a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. <ClLinks styled={true} term={"psetq"}><b>psetq</b></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> defined as a symbol macro is treated as if it were a <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, and <ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> is treated as if it were a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"values"}><b>values</b></ClLinks>. 



The use of <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> can be shadowed by <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>. In other words, <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> only substitutes for occurrences of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that would be in the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of a lexical binding of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> surrounding the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



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



If an attempt is made to bind a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is defined as a *global variable*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



If <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> contains a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration that names one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> being bound by <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"with-slots"}><b>with-slots</b></ClLinks>, <ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> 



**Notes:** 



The special form <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> is the basic mechanism that is used to implement <ClLinks styled={true} term={"with-slots"}><b>with-slots</b></ClLinks>. 



If a <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *top level form*, the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 



*⇤***macroexpand-hook***⇤ Variable* 



**Value Type:** 



a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of three <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>: a *macro function*, a *macro form*, and an *environment object*. 



**Initial Value:** 



a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a function that is equivalent to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks>, but that might have additional <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> side-e↵ects. 



**Description:** 



Used as the expansion interface hook by <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> to control the *macro expansion* process. When a *macro form* is to be expanded, this <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called with three arguments: the *macro function*, the *macro form*, and the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which the *macro form* is to be expanded. The *environment object* has *dynamic extent*; the consequences are undefined if the *environment object* is referred to outside the *dynamic extent* of the macro expansion function. 



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



<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks>, <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks>, <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



The net e↵ect of the chosen initial value is to just invoke the *macro function*, giving it the *macro form* and <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> as its two arguments. 



Users or user programs can <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> this <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> to customize or trace the *macro expansion* mechanism. Note, however, that this <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is a global resource, potentially shared by multiple <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks>; as such, if any two <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks> depend for their correctness on the setting of this <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, those <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks> may not be able to run in the same *Lisp image*. For this reason, it is frequently best to confine its uses to debugging situations. 



Users who put their own function into **\*macroexpand-hook\*** should consider saving the previous value of the hook, and calling that value from their own. 



