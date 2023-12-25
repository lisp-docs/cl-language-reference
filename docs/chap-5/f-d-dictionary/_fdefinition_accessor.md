**fdefinition** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a *function name*. In the non-<ClLinks  term={"setf"}><b>setf</b></ClLinks> case, the <ClLinks  term={"name"}><i>name</i></ClLinks> must be <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



<ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> *accesses* the current global function definition named by *function-name*. The definition may be a <ClLinks  term={"function"}><i>function</i></ClLinks> or may be an <ClLinks  term={"object"}><i>object</i></ClLinks> representing a *special form* or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. The value returned by <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> when <ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks> returns true but the *function-name* denotes a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or *special form* is not well-defined, but <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> does not signal an error. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *function-name* is not a *function name*. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"undefined-function"}><b>undefined-function</b></ClLinks> is signaled in the non-<ClLinks  term={"setf"}><b>setf</b></ClLinks> case if *function-name* is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks>, <ClLinks  term={"fmakunbound"}><b>fmakunbound</b></ClLinks>, <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks  term={"special-operator-p"}><b>special-operator-p</b></ClLinks>, <ClLinks  term={"symbol-function"}><b>symbol-function</b></ClLinks> 



**Notes:** 



<ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> cannot <ClLinks  term={"access"}><i>access</i></ClLinks> the value of a lexical function name produced by <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks>; it can <ClLinks  term={"access"}><i>access</i></ClLinks> only the global function value. 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> to replace a global function definition when the *function-name*’s function definition does not represent a *special form*. <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> requires a <ClLinks  term={"function"}><i>function</i></ClLinks> as the new value. It is an error to set the <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> of a *function-name* to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, a <ClLinks  term={"list"}><i>list</i></ClLinks>, or the value returned by <ClLinks  term={"fdefinition"}><b>fdefinition</b></ClLinks> on the name of a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or *special form*. 



Data and Control 











<ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks> 



