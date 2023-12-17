*∗***load-truename***∗ Variable* 



**Value Type:** 



The *value* of **\*load-pathname\*** must always be a *pathname* or **nil**. The *value* of **\*load-truename\*** must always be a *physical pathname* or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



During a call to **load**, **\*load-pathname\*** is *bound* to the *pathname* denoted by the the first argument to **load**, merged against the defaults; that is, it is *bound* to (pathname (merge-pathnames *filespec*)). During the same time interval, **\*load-truename\*** is *bound* to the *truename* of the *file* being loaded. 



At other times, the *value* of these *variables* is **nil**. 



If a *break loop* is entered while **load** is ongoing, it is *implementation-dependent* whether these *variables* retain the *values* they had just prior to entering the *break loop* or whether they are *bound* to **nil**. 



The consequences are unspecified if an attempt is made to *assign* or *bind* either of these *variables*. 



**Affected By:** 



The *file system*. 



**See Also:** 



**load** 



*∗***compile-print***∗***,** 