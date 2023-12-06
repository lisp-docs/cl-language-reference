**list-all-packages** *Function* 



**Syntax:** 



**list-all-packages** *hno argumentsi → packages* 



**Arguments and Values:** 



*packages*—a *list* of *package objects*. 



**Description:** 



**list-all-packages** returns a *fresh list* of all *registered packages*. 



**Examples:**
```lisp
 

(let ((before (list-all-packages))) 

(make-package ’temp) 

(set-difference (list-all-packages) before)) *→* (#<PACKAGE "TEMP">) 


```
**Affected By:** 



**defpackage**, **delete-package**, **make-package** 



