 



If the :report argument to **define-condition** is used, a print function is defined that is called whenever the defined *condition* is printed while the *value* of **\*print-escape\*** is *false*. This function is called the *condition reporter*; the text which it outputs is called a *report message*. 



When a *condition* is printed and **\*print-escape\*** is *false*, the *condition reporter* for the *condition* is invoked. *Conditions* are printed automatically by functions such as **invoke-debugger**, **break**, and **warn**. 



When **\*print-escape\*** is *true*, the *object* should print in an abbreviated fashion according to the style of the implementation (*e.g.*, by **print-unreadable-object**). It is not required that a *condition* can be recreated by reading its printed representation. 



No *function* is provided for directly *accessing* or invoking *condition reporters*. 







 



 



