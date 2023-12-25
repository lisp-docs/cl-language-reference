**restart-bind** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> (*\{*(*name function \{↓key-val-pair\}*\*)*\}*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



*key-val-pair::*=:interactive-function *interactive-function |* 



:report-function *report-function |* 



:test-function *test-function* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*interactive-function*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*report-function*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*test-function*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> executes the body of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a *dynamic environment* where <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> with the given <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> are in effect. 



If a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, it indicates an anonymous restart; if a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *non-nil symbol*, it indicates a named restart. 







 



 



<DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, *interactive-function*, and *report-function* are unconditionally evaluated in the current lexical and dynamic environment prior to evaluation of the body. Each of these <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> must evaluate to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



If <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> is done on that restart, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which resulted from evaluating <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called, in the *dynamic environment* of the <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, with the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> given to <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may either perform a non-local transfer of control or may return normally. 



If the restart is invoked interactively from the debugger (using <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink>), the arguments are defaulted by calling the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which resulted from evaluating *interactive-function*. That <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may optionally prompt interactively on *query I/O*, and should return a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of arguments to be used by <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> when invoking the restart. 



If a restart is invoked interactively but no *interactive-function* is used, then an argument list of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is used. In that case, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must be compatible with an empty argument list. 



If the restart is presented interactively (*e.g.*, by the debugger), the presentation is done by calling the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which resulted from evaluating *report-function*. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. It is expected to print a description of the action that the restart takes to that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called any time the restart is printed while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



In the case of interactive invocation, the result is dependent on the value of :interactive-function as follows. 



:interactive-function 



<GlossaryTerm styled={true} term={"value"}><i>Value</i></GlossaryTerm> is evaluated in the current lexical environment and should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of no arguments which constructs a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of arguments to be used by <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> when invoking this restart. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may prompt interactively using *query I/O* if necessary. 



:report-function 



<GlossaryTerm styled={true} term={"value"}><i>Value</i></GlossaryTerm> is evaluated in the current lexical environment and should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, which prints on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> a summary of the action that this restart takes. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called whenever the restart is reported (printed while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). If no :report-function option is provided, the manner in which the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is reported is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



:test-function 



<GlossaryTerm styled={true} term={"value"}><i>Value</i></GlossaryTerm> is evaluated in the current lexical environment and should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, which returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the restart is to be considered visible. 



**Affected By:** 



**\*query-io\***. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> is primarily intended to be used to implement <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> and might be useful in implementing other macros. Programmers who are uncertain about whether to use <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> or <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> should prefer <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> for the cases where it is powerful enough, using <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> only in cases where its full generality is really needed. 



