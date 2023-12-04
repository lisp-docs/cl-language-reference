 



The following rules apply to the package system as long as the *value* of **\*package\*** is not changed: 



**Read-read consistency** 



Reading the same *symbol name* always results in the *same symbol*. 



**Print-read consistency** 



An *interned symbol* always prints as a sequence of characters that, when read back in, yields the *same symbol*. 



For information about how the *Lisp printer* treats *symbols*, see Section 22.1.3.3 (Printing Symbols). 



**Print-print consistency** 



If two interned *symbols* are not the *same*, then their printed representations will be different sequences of characters. 



These rules are true regardless of any implicit interning. As long as the *current package* is not changed, results are reproducible regardless of the order of *loading* files or the exact history of what *symbols* were typed in when. If the *value* of **\*package\*** is changed and then changed back 



to the previous value, consistency is maintained. The rules can be violated by changing the *value* of **\*package\***, forcing a change to *symbols* or to *packages* or to both by continuing from an error, or calling one of the following *functions*: **unintern**, **unexport**, **shadow**, **shadowing-import**, or **unuse-package**. 



An inconsistency only applies if one of the restrictions is violated between two of the named *symbols*. **shadow**, **unexport**, **unintern**, and **shadowing-import** can only affect the consistency of *symbols* with the same *names* (under **string=**) as the ones supplied as arguments.  







