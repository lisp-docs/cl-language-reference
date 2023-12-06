**software-type, software-version** *Function* 



**Syntax:** 



**software-type** *hno argumentsi → description* 



**software-version** *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



**software-type** returns a *string* that identifies the generic name of any relevant supporting software, or **nil** if no appropriate or relevant result can be produced. 



**software-version** returns a *string* that identifies the version of any relevant supporting software, or **nil** if no appropriate or relevant result can be produced. 



**Examples:**
```lisp
 

(software-type) *→* "Multics" 

(software-version) *→* "1.3x" 


```
**Affected By:** 



Operating system environment. 



**Notes:** 



This information should be of use to maintainers of the *implementation*. 







 



 



**user-homedir-pathname** 



