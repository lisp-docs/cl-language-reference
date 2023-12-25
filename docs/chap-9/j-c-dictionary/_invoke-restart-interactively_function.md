**invoke-restart-interactively** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> *restart → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>—a *restart designator* . 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> associated with <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, if that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returns. 



**Description:** 



<DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> calls the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> associated with <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, prompting for any necessary arguments. If <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is a name, it must be valid in the current *dynamic environment*. 



<DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> prompts for arguments by executing the code provided in the :interactive keyword to <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> or :interactive-function keyword to <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink>. 



If no such options have been supplied in the corresponding <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> or <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, then the consequences are undefined if the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> takes required arguments. If the arguments are optional, an argument list of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is used. 



Once the arguments have been determined, <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> executes the following: (apply #’invoke-restart *restart arguments*) 



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
*→* 10 

```
**Side Effects:** 



If prompting for arguments is necesary, some typeout may occur (on *query I/O*). 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



**\*query-io\***, active <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> 







 



 



**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is not valid, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink>, <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> is used internally by the debugger and may also be useful in implementing other portable, interactive debugging tools. 



