**compiler-macro-function** *Accessor* 



**Syntax:** 



**compiler-macro-function** *name* &optional *environment → function* 



**(setf (compiler-macro-function** *name* &optional *environment***)** *new-function***)** 



**Arguments and Values:** 



*name*—a *function name*. 



*environment*—an *environment object*. 



*function*, *new-function*—a *compiler macro function*, or **nil**. 



**Description:** 



*Accesses* the *compiler macro function* named *name*, if any, in the *environment*.  







A value of **nil** denotes the absence of a *compiler macro function* named *name*. 



**Exceptional Situations:** 



The consequences are undefined if *environment* is *non-nil* in a use of **setf** of **compiler-macro-function**. 



**See Also:** 



**define-compiler-macro**, Section 3.2.2.1 (Compiler Macros) 



