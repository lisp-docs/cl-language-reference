**compile** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> &amp;optional *definition → function, warnings-p, failure-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *function name*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*definition*—a *lambda expression* or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. The default is the function definition of <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> if it names a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or the *macro function* of <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> if it names a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. The consequences are undefined if no *definition* is supplied when the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—the *function-name*, or a *compiled function*. 



*warnings-p*—a *generalized boolean*.  







<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> 



*failure-p*—a *generalized boolean*. 



**Description:** 



Compiles an *interpreted function*. 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> produces a *compiled function* from *definition*. If the *definition* is a *lambda expression*, it is coerced to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. If the *definition* is already a *compiled function*, <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> either produces that function itself (*i.e.*, is an identity operation) or an equivalent function. 



If the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the resulting *compiled function* is returned directly as the *primary value*. If a *non-nil name* is given, then the resulting *compiled function* replaces the existing <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition of <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is returned as the *primary value*; if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, its *macro function* is updated and the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is returned as the *primary value*. 



*Literal objects* appearing in code processed by the <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> function are neither copied nor *coalesced*. The code resulting from the execution of <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> references <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the source code. 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> is permitted, but not required, to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. For example, the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> might issue a warning and restart compilation from some *implementation dependent* point in order to let the compilation proceed without manual intervention. 



The *secondary value*, *warnings-p*, is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> were detected by the compiler, and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> otherwise. 



The *tertiary value*, *failure-p*, is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> (other than <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>) were detected by the compiler, and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> otherwise. 



**Examples:**
```lisp

(defun foo () "bar") *→* FOO 
(compiled-function-p #’foo) *→ implementation-dependent* 
(compile ’foo) *→* FOO 
(compiled-function-p #’foo) *→ true* 
(setf (symbol-function ’foo) 
      (compile nil ’(lambda () "replaced"))) *→* #<Compiled-Function> 
(foo) *→* "replaced" 

```
**Affected By:** 



**\*error-output\***, **\*macroexpand-hook\***. 



The presence of macro definitions and proclamations. 



**Exceptional Situations:** 



The consequences are undefined if the *lexical environment* surrounding the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be compiled contains any <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> other than those for <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>, *symbol macros*, or <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>. 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and 











Situations in the Compiler). 



**See Also:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> 



