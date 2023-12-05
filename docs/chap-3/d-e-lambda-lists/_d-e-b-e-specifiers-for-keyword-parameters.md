 



If **&amp;key** is present, all specifiers up to the next *lambda list keyword* or the end of the *list* are keyword parameter specifiers. When keyword parameters are processed, the same arguments are processed that would be made into a *list* for a *rest parameter* . It is permitted to specify both **&amp;rest** and **&amp;key**. In this case the remaining arguments are used for both purposes; that is, all remaining arguments are made into a *list* for the *rest parameter* , and are also processed for the **&amp;key** parameters. If **&amp;key** is specified, there must remain an even number of arguments; see Section 3.5.1.6 (Odd Number of Keyword Arguments). These arguments are considered as pairs, the first argument in each pair being interpreted as a name and the second as the corresponding value. The first *object* of each pair must be a *symbol*; see Section 3.5.1.5 (Invalid Keyword  







Arguments). The keyword parameter specifiers may optionally be followed by the *lambda list keyword* **&amp;allow-other-keys**. 



In each keyword parameter specifier must be a name *var* for the parameter variable. If the *var* appears alone or in a (*var init-form*) combination, the keyword name used when matching *arguments* to *parameters* is a *symbol* in the KEYWORD *package* whose *name* is the *same* (under **string=**) as *var*’s. If the notation ((*keyword-name var*) *init-form*) is used, then the keyword name used to match *arguments* to *parameters* is *keyword-name*, which may be a *symbol* in any *package*. (Of course, if it is not a *symbol* in the KEYWORD *package*, it does not necessarily self-evaluate, so care must be taken when calling the function to make sure that normal evaluation still yields the keyword name.) Thus 



(defun foo (&amp;key radix (type ’integer)) ...) 



means exactly the same as 



(defun foo (&amp;key ((:radix radix)) ((:type type) ’integer)) ...) 



The keyword parameter specifiers are, like all parameter specifiers, effectively processed from left to right. For each keyword parameter specifier, if there is an argument pair whose name matches that specifier’s name (that is, the names are **eq**), then the parameter variable for that specifier is bound to the second item (the value) of that argument pair. If more than one such argument pair 



matches, the leftmost argument pair is used. If no such argument pair exists, then the *init-form* for that specifier is evaluated and the parameter variable is bound to that value (or to **nil** if no *init-form* was specified). *supplied-p-parameter* is treated as for **&amp;optional** parameters: it is bound to *true* if there was a matching argument pair, and to *false* otherwise. 



Unless keyword argument checking is suppressed, an argument pair must a name matched by a parameter specifier; see Section 3.5.1.4 (Unrecognized Keyword Arguments). 



If keyword argument checking is suppressed, then it is permitted for an argument pair to match no parameter specifier, and the argument pair is ignored, but such an argument pair is accessible through the *rest parameter* if one was supplied. The purpose of these mechanisms is to allow sharing of argument lists among several *lambda expressions* and to allow either the caller or the called *lambda expression* to specify that such sharing may be taking place. 



Note that if **&amp;key** is present, a keyword argument of :allow-other-keys is always permitted— regardless of whether the associated value is *true* or *false*. However, if the value is *false*, other non-matching keywords are not tolerated (unless **&amp;allow-other-keys** was used). 



Furthermore, if the receiving argument list specifies a regular argument which would be flagged by :allow-other-keys, then :allow-other-keys has both its special-cased meaning (identifying whether additional keywords are permitted) and its normal meaning (data flow into the function in question). 



