**3.5.1.6 Odd Number of Keyword Arguments** 

An odd number of *arguments* must not be supplied for the *keyword parameters*. 

If this *situation* occurs in a *safe call*, an error of *type* **program-error** must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an *unsafe call* the *situation* has undefined consequences. 

