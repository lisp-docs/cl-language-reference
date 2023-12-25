**break** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> &amp;optional *format-control* &amp;rest *format-arguments →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*format-control*—a *format control*. The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*format-arguments*—*format arguments* for the *format-control*. 



**Description:** 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> *formats format-control* and *format-arguments* and then goes directly into the debugger without allowing any possibility of interception by programmed error-handling facilities. 



If the **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is used while in the debugger, <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> immediately returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> without taking any unusual recovery action. 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> binds <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> before attempting to enter the debugger. 



**Examples:**
```lisp

(break "You got here with arguments: ~:S." ’(FOO 37 A)) 
▷ BREAK: You got here with these arguments: FOO, 37, A. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return from BREAK. 
▷ 2: Top level. 
▷ Debug> :CONTINUE 1 
▷ Return from BREAK. 
*→* NIL 

```
**Side Effects:** 



The debugger is entered. 



**Affected By:** 



**\*debug-io\***. 



**See Also:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink>. 



**Notes:** 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> is used as a way of inserting temporary debugging “breakpoints” in a program, not as a way of signaling errors. For this reason, <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> does not take the *continue-format-control argument* that <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> takes. This and the lack of any possibility of interception by *condition handling* are the only program-visible differences between <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> and <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>. 







 



 



The user interface aspects of <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> and <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> are permitted to vary more widely, in order to accomodate the interface needs of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. For example, it is permissible for a *Lisp read-eval-print loop* to be entered by <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> rather than the conventional debugger. 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> could be defined by: 



(defun break (&amp;optional (format-control "Break") &amp;rest format-arguments) 



(with-simple-restart (continue "Return from BREAK.") 



(let ((\*debugger-hook\* nil)) 



(invoke-debugger 



(make-condition ’simple-condition 



:format-control format-control 



:format-arguments format-arguments)))) 



nil) 



