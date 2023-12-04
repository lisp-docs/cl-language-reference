 



When a *generic function* is called with particular arguments, it must determine the code to execute. This code is called the *effective method* for those *arguments*. The *effective method* is a combination of the *applicable methods* in the *generic function* that *calls* some or all of the *methods*. 



If a *generic function* is called and no *methods* are *applicable*, the *generic function* **no-applicable-method** is invoked, with the *results* from that call being used as the *results* of the call to the original *generic function*. Calling **no-applicable-method** takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the *effective method* has been determined, it is invoked with the same *arguments* as were passed to the *generic function*. Whatever *values* it returns are returned as the *values* of the *generic function*. 



