**short-site-name, long-site-name** *Function* 



**Syntax:** 



**short-site-name** *hno argumentsi → description* 



**long-site-name** *hno argumentsi → description* 







 



 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



**short-site-name** and **long-site-name** return a *string* that identifies the physical location of the computer hardware, or **nil** if no appropriate *description* can be produced. 



**Examples:**
```lisp
 



(short-site-name) 



*→* "MIT AI Lab" 



<i><sup>or</sup>→</i> "CMU-CSD" 



(long-site-name) 



*→* "MIT Artificial Intelligence Laboratory" 



<i><sup>or</sup>→</i> "CMU Computer Science Department" 




```
**Affected By:** 



The implementation, the location of the computer hardware, and the installation/configuration process. 



