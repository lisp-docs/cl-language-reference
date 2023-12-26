**symbol-macrolet** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> (*\{*(*symbol expansion*)*\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ \{result\}\* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*expansion*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> provides a mechanism for affecting the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> environment for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> lexically establishes expansion functions for each of the <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm> named by <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. The only guaranteed property of an expansion <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> is that when it is applied to the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> it returns the correct expansion. (In particular, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the expansion is conceptually stored in the expansion function, the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, or both.) 



Each reference to <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> as a variable within the lexical <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>. 



Exactly the same <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm> are allowed as for <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> with one exception: <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> signals an error if a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration names one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> being defined by <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>. 



When the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> of the <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> form are expanded, any use of <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> to set the value of one of the specified variables is treated as if it were a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. <DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> defined as a symbol macro is treated as if it were a <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, and <DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> is treated as if it were a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>. 



The use of <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> can be shadowed by <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>. In other words, <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> only substitutes for occurrences of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that would be in the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of a lexical binding of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> surrounding the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



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



If an attempt is made to bind a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is defined as a <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> contains a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration that names one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> being bound by <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink>, <DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink> 



**Notes:** 



The special form <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> is the basic mechanism that is used to implement <DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink>. 



If a <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are also processed as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. See Section 3.2.3 (File Compilation). 



*⇤***macroexpand-hook***⇤ Variable* 



**Value Type:** 



a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of three <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>: a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



**Initial Value:** 



a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a function that is equivalent to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>, but that might have additional <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> side-e↵ects. 



**Description:** 



Used as the expansion interface hook by <DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> to control the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> process. When a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> is to be expanded, this <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is called with three arguments: the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, and the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> is to be expanded. The <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; the consequences are undefined if the <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> is referred to outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the macro expansion function. 



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



<DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink>, <DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



The net e↵ect of the chosen initial value is to just invoke the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, giving it the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> and <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> as its two arguments. 



Users or user programs can <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> this <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> to customize or trace the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> mechanism. Note, however, that this <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is a global resource, potentially shared by multiple <GlossaryTerm  term={"program"}><i>programs</i></GlossaryTerm>; as such, if any two <GlossaryTerm  term={"program"}><i>programs</i></GlossaryTerm> depend for their correctness on the setting of this <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, those <GlossaryTerm  term={"program"}><i>programs</i></GlossaryTerm> may not be able to run in the same *Lisp image*. For this reason, it is frequently best to confine its uses to debugging situations. 



Users who put their own function into **\*macroexpand-hook\*** should consider saving the previous value of the hook, and calling that value from their own. 



