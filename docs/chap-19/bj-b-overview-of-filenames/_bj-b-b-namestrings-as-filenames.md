 



A *namestring* is a *string* that represents a *filename*. 



In general, the syntax of *namestrings* involves the use of *implementation-defined* conventions, usually those customary for the *file system* in which the named *file* resides. The only exception is the syntax of a *logical pathname namestring*, which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings). 



A *conforming program* must never unconditionally use a *literal namestring* other than a *logical pathname namestring* because Common Lisp does not define any *namestring* syntax other than that for *logical pathnames* that would be guaranteed to be portable. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable *namestrings*. 



A *namestring* can be *coerced* to a *pathname* by the *functions* **pathname** or **parse-namestring**.
 