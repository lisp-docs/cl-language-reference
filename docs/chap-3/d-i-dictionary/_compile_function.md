**compile** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"compile"}><b>compile</b></ClLinks> <ClLinks  term={"name"}><i>name</i></ClLinks> &amp;optional *definition → function, warnings-p, failure-p* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a *function name*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*definition*—a *lambda expression* or a <ClLinks  term={"function"}><i>function</i></ClLinks>. The default is the function definition of <ClLinks  term={"name"}><i>name</i></ClLinks> if it names a <ClLinks  term={"function"}><i>function</i></ClLinks>, or the *macro function* of <ClLinks  term={"name"}><i>name</i></ClLinks> if it names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. The consequences are undefined if no *definition* is supplied when the <ClLinks  term={"name"}><i>name</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—the *function-name*, or a *compiled function*. 



*warnings-p*—a *generalized boolean*.  







<ClLinks  term={"compile"}><b>compile</b></ClLinks> 



*failure-p*—a *generalized boolean*. 



**Description:** 



Compiles an *interpreted function*. 



<ClLinks  term={"compile"}><b>compile</b></ClLinks> produces a *compiled function* from *definition*. If the *definition* is a *lambda expression*, it is coerced to a <ClLinks  term={"function"}><i>function</i></ClLinks>. If the *definition* is already a *compiled function*, <ClLinks  term={"compile"}><b>compile</b></ClLinks> either produces that function itself (*i.e.*, is an identity operation) or an equivalent function. 



If the <ClLinks  term={"name"}><i>name</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, the resulting *compiled function* is returned directly as the *primary value*. If a *non-nil name* is given, then the resulting *compiled function* replaces the existing <ClLinks  term={"function"}><i>function</i></ClLinks> definition of <ClLinks  term={"name"}><i>name</i></ClLinks> and the <ClLinks  term={"name"}><i>name</i></ClLinks> is returned as the *primary value*; if <ClLinks  term={"name"}><i>name</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, its *macro function* is updated and the <ClLinks  term={"name"}><i>name</i></ClLinks> is returned as the *primary value*. 



*Literal objects* appearing in code processed by the <ClLinks  term={"compile"}><b>compile</b></ClLinks> function are neither copied nor *coalesced*. The code resulting from the execution of <ClLinks  term={"compile"}><b>compile</b></ClLinks> references <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <ClLinks  term={"eql"}><b>eql</b></ClLinks> to the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the source code. 



<ClLinks  term={"compile"}><b>compile</b></ClLinks> is permitted, but not required, to <ClLinks  term={"establish"}><i>establish</i></ClLinks> a <ClLinks  term={"handler"}><i>handler</i></ClLinks> for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. For example, the <ClLinks  term={"handler"}><i>handler</i></ClLinks> might issue a warning and restart compilation from some *implementation dependent* point in order to let the compilation proceed without manual intervention. 



The *secondary value*, *warnings-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> or <ClLinks  term={"warning"}><b>warning</b></ClLinks> were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



The *tertiary value*, *failure-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> or <ClLinks  term={"warning"}><b>warning</b></ClLinks> (other than <ClLinks  term={"style-warning"}><b>style-warning</b></ClLinks>) were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



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



The consequences are undefined if the *lexical environment* surrounding the <ClLinks  term={"function"}><i>function</i></ClLinks> to be compiled contains any <ClLinks  term={"binding"}><i>bindings</i></ClLinks> other than those for <ClLinks  term={"macro"}><i>macros</i></ClLinks>, *symbol macros*, or <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>. 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and 











Situations in the Compiler). 



**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> 



