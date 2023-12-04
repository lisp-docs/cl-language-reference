 



The function **make-condition** can be used to construct a *condition object* explicitly. Functions such as **error**, **cerror**, **signal**, and **warn** operate on *conditions* and might create *condition objects* implicitly. Macros such as **ccase**, **ctypecase**, **ecase**, **etypecase**, **check-type**, and **assert** might also implicitly create (and *signal*) *conditions*. 



