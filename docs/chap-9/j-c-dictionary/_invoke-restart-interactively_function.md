**invoke-restart-interactively** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> *restart → \{result\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>—a <GlossaryTerm styled={true} term={"restart designator"}><i>restart designator</i></GlossaryTerm> . 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> associated with <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, if that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returns. 



**Description:** 



<ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> calls the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> associated with <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, prompting for any necessary arguments. If <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is a name, it must be valid in the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



<ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> prompts for arguments by executing the code provided in the :interactive keyword to <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> or :interactive-function keyword to <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks>. 



If no such options have been supplied in the corresponding <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> or <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, then the consequences are undefined if the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> takes required arguments. If the arguments are optional, an argument list of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is used. 



Once the arguments have been determined, <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> executes the following: (apply #’invoke-restart *restart arguments*) 



**Examples:**
```lisp
(defun add3 (x) (check-type x number) (+ x 3)) 
(add3 ’seven) 
▷ Error: The value SEVEN was not of type NUMBER. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a different value to use. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> (invoke-restart-interactively ’store-value) 
▷ Type a form to evaluate and use: 7 
→ 10 
```
**Side Effects:** 



If prompting for arguments is necesary, some typeout may occur (on *query I/O*). 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



**\*query-io\***, active <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> 







 



 



**Exceptional Situations:** 



If <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is not valid, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks>, <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> is used internally by the debugger and may also be useful in implementing other portable, interactive debugging tools. 



