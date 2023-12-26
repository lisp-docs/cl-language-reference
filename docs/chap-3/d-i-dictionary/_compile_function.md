**compile** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> <ClLinks  term={"name"}><i>name</i></ClLinks> &amp;optional *definition → function, warnings-p, failure-p* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*definition*—a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> or a <ClLinks  term={"function"}><i>function</i></ClLinks>. The default is the function definition of <ClLinks  term={"name"}><i>name</i></ClLinks> if it names a <ClLinks  term={"function"}><i>function</i></ClLinks>, or the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> of <ClLinks  term={"name"}><i>name</i></ClLinks> if it names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. The consequences are undefined if no *definition* is supplied when the <ClLinks  term={"name"}><i>name</i></ClLinks> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—the *function-name*, or a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. 



*warnings-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.  







<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> 



*failure-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Compiles an <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted function</i></GlossaryTerm>. 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> produces a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> from *definition*. If the *definition* is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, it is coerced to a <ClLinks  term={"function"}><i>function</i></ClLinks>. If the *definition* is already a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>, <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> either produces that function itself (*i.e.*, is an identity operation) or an equivalent function. 



If the <ClLinks  term={"name"}><i>name</i></ClLinks> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> is returned directly as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. If a *non-nil name* is given, then the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> replaces the existing <ClLinks  term={"function"}><i>function</i></ClLinks> definition of <ClLinks  term={"name"}><i>name</i></ClLinks> and the <ClLinks  term={"name"}><i>name</i></ClLinks> is returned as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>; if <ClLinks  term={"name"}><i>name</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, its <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> is updated and the <ClLinks  term={"name"}><i>name</i></ClLinks> is returned as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. 



*Literal objects* appearing in code processed by the <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> function are neither copied nor *coalesced*. The code resulting from the execution of <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> references <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the source code. 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> is permitted, but not required, to <ClLinks  term={"establish"}><i>establish</i></ClLinks> a <ClLinks  term={"handler"}><i>handler</i></ClLinks> for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. For example, the <ClLinks  term={"handler"}><i>handler</i></ClLinks> might issue a warning and restart compilation from some *implementation dependent* point in order to let the compilation proceed without manual intervention. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *warnings-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, *failure-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> (other than <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>) were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



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



The consequences are undefined if the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> surrounding the <ClLinks  term={"function"}><i>function</i></ClLinks> to be compiled contains any <ClLinks  term={"binding"}><i>bindings</i></ClLinks> other than those for <ClLinks  term={"macro"}><i>macros</i></ClLinks>, <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>, or <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>. 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and 











Situations in the Compiler). 



**See Also:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> 



