**user-homedir-pathname** *Function* 



**Syntax:** 



**user-homedir-pathname** &optional *host → pathname* 



**Arguments and Values:** 



*host*—a *string*, a *list* of *strings*, or :unspecific. 



*pathname*—a *pathname*, or **nil**. 



**Description:** 



**user-homedir-pathname** determines the *pathname* that corresponds to the user’s home directory on *host*. If *host* is not supplied, its value is *implementation-dependent*. For a description of :unspecific, see Section 19.2.1 (Pathname Components). 



The definition of home directory is *implementation-dependent*, but defined in Common Lisp to mean the directory where the user keeps personal files such as initialization files and mail. 



**user-homedir-pathname** returns a *pathname* without any name, type, or version component (those components are all **nil**) for the user’s home directory on *host*. 



If it is impossible to determine the user’s home directory on *host*, then **nil** is returned. **user-homedir-pathname** never returns **nil** if *host* is not supplied. 



**Examples:**
```lisp
 



(pathnamep (user-homedir-pathname)) *→ true* 




```
**Affected By:** 



The host computer’s file system, and the *implementation*. 





