**invoke-debugger** *Function* 



**Syntax:** 



**invoke-debugger** *condition →* 



**Arguments and Values:** 



*condition*—a *condition object*. 



**Description:** 



**invoke-debugger** attempts to enter the debugger with *condition*. 



If **\*debugger-hook\*** is not **nil**, it should be a *function* (or the name of a *function*) to be called prior to entry to the standard debugger. The *function* is called with **\*debugger-hook\*** bound to **nil**, and the *function* must accept two arguments: the *condition* and the *value* of **\*debugger-hook\*** prior to binding it to **nil**. If the *function* returns normally, the standard debugger is entered. 



The standard debugger never directly returns. Return can occur only by a non-local transfer of control, such as the use of a restart function. 



**Examples:**
```lisp
 



(ignore-errors ;Normally, this would suppress debugger entry 



(handler-bind ((error #’invoke-debugger)) ;But this forces debugger entry 



(error "Foo."))) 



Debug: Foo. 



To continue, type :CONTINUE followed by an option number: 



1: Return to Lisp Toplevel. 



Debug&gt; 




```
**Side Effects:** 



**\*debugger-hook\*** is bound to **nil**, program execution is discontinued, and the debugger is entered. 



**Affected By:** 



**\*debug-io\*** and **\*debugger-hook\***. 



**See Also:** 



**error**, **break** 







 



 



**break** 



