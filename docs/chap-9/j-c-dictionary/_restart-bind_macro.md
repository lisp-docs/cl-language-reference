**restart-bind** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> (*\{*(*name function \{↓key-val-pair\}*\*)*\}*) <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



*key-val-pair::*=:interactive-function *interactive-function |* 



:report-function *report-function |* 



:test-function *test-function* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*interactive-function*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



*report-function*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



*test-function*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> executes the body of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> where <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> with the given <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> are in effect. 



If a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, it indicates an anonymous restart; if a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *non-nil symbol*, it indicates a named restart. 







 



 



<ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, *interactive-function*, and *report-function* are unconditionally evaluated in the current lexical and dynamic environment prior to evaluation of the body. Each of these <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> must evaluate to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



If <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> is done on that restart, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which resulted from evaluating <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called, in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> of the <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, with the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> given to <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may either perform a non-local transfer of control or may return normally. 



If the restart is invoked interactively from the debugger (using <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks>), the arguments are defaulted by calling the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which resulted from evaluating *interactive-function*. That <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may optionally prompt interactively on *query I/O*, and should return a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of arguments to be used by <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> when invoking the restart. 



If a restart is invoked interactively but no *interactive-function* is used, then an argument list of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is used. In that case, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> must be compatible with an empty argument list. 



If the restart is presented interactively (*e.g.*, by the debugger), the presentation is done by calling the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which resulted from evaluating *report-function*. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> must be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. It is expected to print a description of the action that the restart takes to that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called any time the restart is printed while <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



In the case of interactive invocation, the result is dependent on the value of :interactive-function as follows. 



:interactive-function 



<ClLinks styled={true} term={"value"}><i>Value</i></ClLinks> is evaluated in the current lexical environment and should return a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of no arguments which constructs a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of arguments to be used by <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> when invoking this restart. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may prompt interactively using *query I/O* if necessary. 



:report-function 



<ClLinks styled={true} term={"value"}><i>Value</i></ClLinks> is evaluated in the current lexical environment and should return a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, which prints on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> a summary of the action that this restart takes. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called whenever the restart is reported (printed while <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). If no :report-function option is provided, the manner in which the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is reported is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



:test-function 



<ClLinks styled={true} term={"value"}><i>Value</i></ClLinks> is evaluated in the current lexical environment and should return a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, which returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the restart is to be considered visible. 



**Affected By:** 



**\*query-io\***. 







 



 



**See Also:** 



<ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> is primarily intended to be used to implement <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> and might be useful in implementing other macros. Programmers who are uncertain about whether to use <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> or <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> should prefer <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> for the cases where it is powerful enough, using <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> only in cases where its full generality is really needed. 



