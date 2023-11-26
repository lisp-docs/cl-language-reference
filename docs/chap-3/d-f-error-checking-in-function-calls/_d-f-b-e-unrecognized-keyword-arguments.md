 

It is not permitted to supply a keyword argument to a *function* using a name that is not recognized by that *function* unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking). 

If this *situation* occurs in a *safe call*, an error of *type* **program-error** must be signaled; and in an *unsafe call* the *situation* has undefined consequences.  



