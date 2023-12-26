**fdefinition** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. In the non-<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> case, the <ClLinks  term={"name"}><i>name</i></ClLinks> must be <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *accesses* the current global function definition named by *function-name*. The definition may be a <ClLinks  term={"function"}><i>function</i></ClLinks> or may be an <ClLinks  term={"object"}><i>object</i></ClLinks> representing a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. The value returned by <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> when <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> returns true but the *function-name* denotes a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is not well-defined, but <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> does not signal an error. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *function-name* is not a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> is signaled in the non-<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> case if *function-name* is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>, <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> cannot <ClLinks  term={"access"}><i>access</i></ClLinks> the value of a lexical function name produced by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>; it can <ClLinks  term={"access"}><i>access</i></ClLinks> only the global function value. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> to replace a global function definition when the *function-name*’s function definition does not represent a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> requires a <ClLinks  term={"function"}><i>function</i></ClLinks> as the new value. It is an error to set the <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> of a *function-name* to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, a <ClLinks  term={"list"}><i>list</i></ClLinks>, or the value returned by <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> on the name of a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. 



Data and Control 











<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> 



