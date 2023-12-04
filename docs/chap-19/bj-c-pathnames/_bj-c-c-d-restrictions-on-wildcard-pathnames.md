 



Wildcard *pathnames* can be used with **directory** but not with **open**, and return true from **wild-pathname-p**. When examining wildcard components of a wildcard *pathname*, conforming programs must be prepared to encounter any of the following additional values in any component or any element of a *list* that is the directory component: 



*•* The *symbol* :wild, which matches anything. 



*•* A *string* containing *implementation-dependent* special wildcard *characters*. 



*•* Any *object*, representing an *implementation-dependent* wildcard pattern. 







 



 



