**symbol-macrolet** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> (*\{*(*symbol expansion*)*\}*\*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*expansion*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> provides a mechanism for affecting the *macro expansion* environment for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> lexically establishes expansion functions for each of the *symbol macros* named by <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. The only guaranteed property of an expansion <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> for a *symbol macro* is that when it is applied to the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> it returns the correct expansion. (In particular, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the expansion is conceptually stored in the expansion function, the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, or both.) 



Each reference to <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as a variable within the lexical <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. 



Exactly the same <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> are allowed as for <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> with one exception: <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> signals an error if a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declaration names one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> being defined by <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>. 



When the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> form are expanded, any use of <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> to set the value of one of the specified variables is treated as if it were a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> defined as a symbol macro is treated as if it were a <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, and <DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> is treated as if it were a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>. 



The use of <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> can be shadowed by <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>. In other words, <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> only substitutes for occurrences of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that would be in the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of a lexical binding of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> surrounding the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



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



If an attempt is made to bind a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is defined as a *global variable*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> contains a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declaration that names one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> being bound by <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink>, <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> 



**Notes:** 



The special form <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> is the basic mechanism that is used to implement <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink>. 



If a <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *top level form*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 



*⇤***macroexpand-hook***⇤ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of three <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>: a *macro function*, a *macro form*, and an *environment object*. 



**Initial Value:** 



a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a function that is equivalent to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>, but that might have additional <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> side-e↵ects. 



**Description:** 



Used as the expansion interface hook by <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> to control the *macro expansion* process. When a *macro form* is to be expanded, this <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called with three arguments: the *macro function*, the *macro form*, and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which the *macro form* is to be expanded. The *environment object* has *dynamic extent*; the consequences are undefined if the *environment object* is referred to outside the *dynamic extent* of the macro expansion function. 



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



<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink>, <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



The net e↵ect of the chosen initial value is to just invoke the *macro function*, giving it the *macro form* and <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> as its two arguments. 



Users or user programs can <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> this <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> to customize or trace the *macro expansion* mechanism. Note, however, that this <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is a global resource, potentially shared by multiple <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm>; as such, if any two <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm> depend for their correctness on the setting of this <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, those <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm> may not be able to run in the same *Lisp image*. For this reason, it is frequently best to confine its uses to debugging situations. 



Users who put their own function into **\*macroexpand-hook\*** should consider saving the previous value of the hook, and calling that value from their own. 



