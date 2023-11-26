**22.1.3.11 Printing Pathnames** 

When *printer escaping* is enabled, the syntax #P"..." is how a *pathname* is printed by **write** and the other functions herein described. The "..." is the namestring representation of the pathname. 

When *printer escaping* is disabled, **write** writes a *pathname P* by writing (namestring *P*) instead. For information on how the *Lisp reader* parses *pathnames*, see Section 2.4.8.14 (Sharpsign P). 

