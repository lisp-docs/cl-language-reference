**invoke-restart-interactively** *Function* 



**Syntax:** 



**invoke-restart-interactively** *restart → \{result\}*\* 



**Arguments and Values:** 



*restart*—a *restart designator* . 



*results*—the *values* returned by the *function* associated with *restart*, if that *function* returns. 



**Description:** 



**invoke-restart-interactively** calls the *function* associated with *restart*, prompting for any necessary arguments. If *restart* is a name, it must be valid in the current *dynamic environment*. 



**invoke-restart-interactively** prompts for arguments by executing the code provided in the :interactive keyword to **restart-case** or :interactive-function keyword to **restart-bind**. 



If no such options have been supplied in the corresponding **restart-bind** or **restart-case**, then the consequences are undefined if the *restart* takes required arguments. If the arguments are optional, an argument list of **nil** is used. 



Once the arguments have been determined, **invoke-restart-interactively** executes the following: (apply #’invoke-restart *restart arguments*) 



**Examples:**
```lisp
 

(defun add3 (x) (check-type x number) (+ x 3)) 

(add3 ’seven) 

▷ Error: The value SEVEN was not of type NUMBER. 

▷ To continue, type :CONTINUE followed by an option number: 

▷ 1: Specify a different value to use. 

▷ 2: Return to Lisp Toplevel. 

▷ Debug&gt; (invoke-restart-interactively ’store-value) 

▷ Type a form to evaluate and use: 7 

*→* 10 


```
**Side Effects:** 



If prompting for arguments is necesary, some typeout may occur (on *query I/O*). 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



**\*query-io\***, active *restarts* 







 



 



**Exceptional Situations:** 



If *restart* is not valid, an error of *type* **control-error** is signaled. 



**See Also:** 



**find-restart**, **invoke-restart**, **restart-case**, **restart-bind** 



**Notes:** 



**invoke-restart-interactively** is used internally by the debugger and may also be useful in implementing other portable, interactive debugging tools. 



