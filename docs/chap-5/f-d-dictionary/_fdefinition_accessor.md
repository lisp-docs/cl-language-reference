**fdefinition** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a *function name*. In the non-<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> case, the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> must be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *accesses* the current global function definition named by *function-name*. The definition may be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or may be an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> representing a *special form* or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. The value returned by <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> when <DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> returns true but the *function-name* denotes a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *special form* is not well-defined, but <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> does not signal an error. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *function-name* is not a *function name*. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink> is signaled in the non-<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> case if *function-name* is not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> cannot <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the value of a lexical function name produced by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>; it can <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> only the global function value. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> to replace a global function definition when the *function-name*’s function definition does not represent a *special form*. <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> requires a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> as the new value. It is an error to set the <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> of a *function-name* to a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, or the value returned by <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> on the name of a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *special form*. 



Data and Control 











<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> 



