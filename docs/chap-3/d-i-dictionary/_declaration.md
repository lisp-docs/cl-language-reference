**declaration** *Declaration* 



**Syntax:** 



(declaration *\{name\}*\*) 



**Arguments:** 



*name*—a *symbol*. 



**Valid Context:** 



*proclamation* only 



**Description:** 



Advises the compiler that each *name* is a valid but potentially non-standard declaration name. The purpose of this is to tell one compiler not to issue warnings for declarations meant for another compiler or other program processor. 



**Examples:**
```lisp
 

(declaim (declaration author target-language target-machine)) 

(declaim (target-language ada)) 

(declaim (target-machine IBM-650)) 

(defun strangep (x) 

(declare (author "Harry Tweeker")) 

(member x ’(strange weird odd peculiar))) 


```
**See Also:** 



**declaim**, **proclaim** 



