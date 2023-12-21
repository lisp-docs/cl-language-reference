**break** *Function* 



**Syntax:** 



**break** &amp;optional *format-control* &amp;rest *format-arguments →* **nil** 



**Arguments and Values:** 



*format-control*—a *format control*. The default is *implementation-dependent*. 



*format-arguments*—*format arguments* for the *format-control*. 



**Description:** 



**break** *formats format-control* and *format-arguments* and then goes directly into the debugger without allowing any possibility of interception by programmed error-handling facilities. 



If the **continue** *restart* is used while in the debugger, **break** immediately returns **nil** without taking any unusual recovery action. 



**break** binds **\*debugger-hook\*** to **nil** before attempting to enter the debugger. 



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



**error**, **invoke-debugger**. 



**Notes:** 



**break** is used as a way of inserting temporary debugging “breakpoints” in a program, not as a way of signaling errors. For this reason, **break** does not take the *continue-format-control argument* that **cerror** takes. This and the lack of any possibility of interception by *condition handling* are the only program-visible differences between **break** and **cerror**. 







 



 



The user interface aspects of **break** and **cerror** are permitted to vary more widely, in order to accomodate the interface needs of the *implementation*. For example, it is permissible for a *Lisp read-eval-print loop* to be entered by **break** rather than the conventional debugger. 



**break** could be defined by: 



(defun break (&amp;optional (format-control "Break") &amp;rest format-arguments) 



(with-simple-restart (continue "Return from BREAK.") 



(let ((\*debugger-hook\* nil)) 



(invoke-debugger 



(make-condition ’simple-condition 



:format-control format-control 



:format-arguments format-arguments)))) 



nil) 



