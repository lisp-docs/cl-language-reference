**invoke-restart** *Function* 



**Syntax:** 



**invoke-restart** *restart* &amp;rest *arguments → \{result\}*\* 







 



 



**Arguments and Values:** 



*restart*—a *restart designator* . 



*argument*—an *object*. 



*results*—the *values* returned by the *function* associated with *restart*, if that *function* returns. 



**Description:** 



Calls the *function* associated with *restart*, passing *arguments* to it. *Restart* must be valid in the current *dynamic environment*. 



**Examples:**
```lisp
 



(defun add3 (x) (check-type x number) (+ x 3)) 



(foo ’seven) 



▷ Error: The value SEVEN was not of type NUMBER. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a different value to use. 



▷ 2: Return to Lisp Toplevel. 



▷ Debug&gt; (invoke-restart ’store-value 7) 



*→* 10 




```
**Side Effects:** 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



Existing restarts. 



**Exceptional Situations:** 



If *restart* is not valid, an error of *type* **control-error** is signaled. 



**See Also:** 



**find-restart**, **restart-bind**, **restart-case**, **invoke-restart-interactively** 



**Notes:** 



The most common use for **invoke-restart** is in a *handler* . It might be used explicitly, or implicitly through **invoke-restart-interactively** or a *restart function*. 



*Restart functions* call **invoke-restart**, not vice versa. That is, *invoke-restart* provides primitive functionality, and *restart functions* are non-essential “syntactic sugar.” 







 



 



**invoke-restart-interactively** 



