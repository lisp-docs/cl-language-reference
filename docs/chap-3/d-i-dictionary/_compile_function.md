**compile** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> &amp;optional *definition → function, warnings-p, failure-p* 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*definition*—a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> or a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. The default is the function definition of <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> if it names a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> of <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> if it names a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. The consequences are undefined if no *definition* is supplied when the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—the *function-name*, or a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. 



*warnings-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.  







<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> 



*failure-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Compiles an <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted function</i></GlossaryTerm>. 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> produces a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> from *definition*. If the *definition* is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, it is coerced to a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. If the *definition* is already a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>, <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> either produces that function itself (*i.e.*, is an identity operation) or an equivalent function. 



If the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> is returned directly as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. If a *non-nil name* is given, then the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> replaces the existing <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition of <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is returned as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>; if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> is updated and the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is returned as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. 



*Literal objects* appearing in code processed by the <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> function are neither copied nor *coalesced*. The code resulting from the execution of <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> references <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the source code. 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> is permitted, but not required, to <GlossaryTerm  term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. For example, the <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> might issue a warning and restart compilation from some *implementation dependent* point in order to let the compilation proceed without manual intervention. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *warnings-p*, is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> were detected by the compiler, and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> otherwise. 



The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, *failure-p*, is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> (other than <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>) were detected by the compiler, and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> otherwise. 



**Examples:**
```lisp
(defun foo () "bar") → FOO 
(compiled-function-p #’foo) → implementation-dependent 
(compile ’foo) → FOO 
(compiled-function-p #’foo) → true 
(setf (symbol-function ’foo) 
      (compile nil ’(lambda () "replaced"))) → #<Compiled-Function> 
(foo) → "replaced" 
```
**Affected By:** 



**\*error-output\***, **\*macroexpand-hook\***. 



The presence of macro definitions and proclamations. 



**Exceptional Situations:** 



The consequences are undefined if the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> surrounding the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to be compiled contains any <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> other than those for <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>, or <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>. 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and 











Situations in the Compiler). 



**See Also:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> 



