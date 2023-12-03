**list-all-packages** *Function* 

**Syntax:** 

**list-all-packages** *hno argumentsi → packages* 

**Arguments and Values:** 

*packages*—a *list* of *package objects*. 

**Description:** 

**list-all-packages** returns a *fresh list* of all *registered packages*. 

**Examples:** 

(let ((before (list-all-packages))) 

(make-package ’temp) 

(set-difference (list-all-packages) before)) *→* (#&#60;PACKAGE "TEMP"&#62;) 

**Affected By:** 

**defpackage**, **delete-package**, **make-package** 

