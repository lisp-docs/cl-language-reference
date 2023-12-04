 



It is not permitted to supply too many *arguments* to a *function*. Too many arguments means more *arguments* than the number of *required parameters* plus the number of *optional parameters*; however, if the *function* uses **&rest** or **&key**, it is not possible for it to receive too many arguments. 



If this *situation* occurs in a *safe call*, an error of *type* **program-error** must be signaled; and in an *unsafe call* the *situation* has undefined consequences. 



