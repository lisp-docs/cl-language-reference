 



When matching a *destructuring lambda list* against a *form*, the pattern and the *form* must have compatible *tree structure*, as described in Section 3.4.4 (Macro Lambda Lists). 



Otherwise, in a *safe call*, an error of *type* **program-error** must be signaled; and in an *unsafe call* the *situation* has undefined consequences. 



