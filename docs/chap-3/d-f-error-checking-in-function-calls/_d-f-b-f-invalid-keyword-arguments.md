**3.5.1.5 Invalid Keyword Arguments** 

It is not permitted to supply a keyword argument to a *function* using a name that is not a *symbol*. 

If this *situation* occurs in a *safe call*, an error of *type* **program-error** must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an *unsafe call* the *situation* has undefined consequences. 

