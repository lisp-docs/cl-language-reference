**break** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> &amp;optional *format-control* &amp;rest *format-arguments →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*format-control*—a *format control*. The default is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*format-arguments*—*format arguments* for the *format-control*. 



**Description:** 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> *formats format-control* and *format-arguments* and then goes directly into the debugger without allowing any possibility of interception by programmed error-handling facilities. 



If the **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is used while in the debugger, <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> immediately returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> without taking any unusual recovery action. 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> binds <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> before attempting to enter the debugger. 



**Examples:**
```lisp
(break "You got here with arguments: ~:S." ’(FOO 37 A)) 
▷ BREAK: You got here with these arguments: FOO, 37, A. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return from BREAK. 
▷ 2: Top level. 
▷ Debug> :CONTINUE 1 
▷ Return from BREAK. 
→ NIL 
```
**Side Effects:** 



The debugger is entered. 



**Affected By:** 



**\*debug-io\***. 



**See Also:** 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks>. 



**Notes:** 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> is used as a way of inserting temporary debugging “breakpoints” in a program, not as a way of signaling errors. For this reason, <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> does not take the *continue-format-control argument* that <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> takes. This and the lack of any possibility of interception by *condition handling* are the only program-visible differences between <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> and <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>. 







 



 



The user interface aspects of <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> and <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> are permitted to vary more widely, in order to accomodate the interface needs of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. For example, it is permissible for a *Lisp read-eval-print loop* to be entered by <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> rather than the conventional debugger. 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> could be defined by: 



(defun break (&amp;optional (format-control "Break") &amp;rest format-arguments) 



(with-simple-restart (continue "Return from BREAK.") 



(let ((\*debugger-hook\* nil)) 



(invoke-debugger 



(make-condition ’simple-condition 



:format-control format-control 



:format-arguments format-arguments)))) 



nil) 



