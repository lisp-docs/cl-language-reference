**fdefinition** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. In the non-<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> case, the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> must be <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> *accesses* the current global function definition named by *function-name*. The definition may be a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or may be an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> representing a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. The value returned by <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> when <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> returns true but the *function-name* denotes a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is not well-defined, but <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> does not signal an error. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *function-name* is not a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> is signaled in the non-<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> case if *function-name* is not <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>, <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> cannot <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the value of a lexical function name produced by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>; it can <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> only the global function value. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> to replace a global function definition when the *function-name*’s function definition does not represent a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> requires a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> as the new value. It is an error to set the <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> of a *function-name* to a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, or the value returned by <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> on the name of a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. 



Data and Control 











<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> 



