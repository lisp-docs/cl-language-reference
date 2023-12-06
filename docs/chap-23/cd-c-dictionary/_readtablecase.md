**readtable-case** *Accessor* 



**Syntax:** 



**readtable-case** *readtable → mode* 



**(setf (readtable-case** *readtable***)** *mode***)** 



**Arguments and Values:** 



*readtable*—a *readtable*. 



*mode*—a *case sensitivity mode*. 







 



 



**Description:** 



*Accesses* the *readtable case* of *readtable*, which affects the way in which the *Lisp Reader* reads *symbols* and the way in which the *Lisp Printer* writes *symbols*. 



**Examples:**
```lisp
 

See Section 23.1.2.1 (Examples of Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2.1 (Examples of Effect of Readtable Case on the Lisp Printer). 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *readtable* is not a *readtable*. Should signal an error of *type* **type-error** if *mode* is not a *case sensitivity mode*. 



**See Also:** 



**\*readtable\***, **\*print-escape\***, Section 2.2 (Reader Algorithm), Section 23.1.2 (Effect of Readtable Case on the Lisp Reader), Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer) 



**Notes:** 



**copy-readtable** copies the *readtable case* of the *readtable*. 



