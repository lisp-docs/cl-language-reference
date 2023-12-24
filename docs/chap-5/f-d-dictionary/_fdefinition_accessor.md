**fdefinition** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a *function name*. In the non-<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> case, the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> must be <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> *accesses* the current global function definition named by *function-name*. The definition may be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or may be an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> representing a *special form* or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. The value returned by <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> when <ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks> returns true but the *function-name* denotes a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *special form* is not well-defined, but <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> does not signal an error. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *function-name* is not a *function name*. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"undefined-function"}><b>undefined-function</b></ClLinks> is signaled in the non-<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> case if *function-name* is not <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks>, <ClLinks styled={true} term={"fmakunbound"}><b>fmakunbound</b></ClLinks>, <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks styled={true} term={"special-operator-p"}><b>special-operator-p</b></ClLinks>, <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> cannot <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the value of a lexical function name produced by <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks> or <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks>; it can <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> only the global function value. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> to replace a global function definition when the *function-name*’s function definition does not represent a *special form*. <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> requires a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> as the new value. It is an error to set the <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> of a *function-name* to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, or the value returned by <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> on the name of a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *special form*. 



Data and Control 











<ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks> 



