**directory** *Function* 



**Syntax:** 



**directory** *pathspec* &amp;key *→ pathnames* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* , which may contain *wild* components. 



*pathnames*—a *list* of *physical pathnames*. 



**Description:** 



Determines which, if any, *files* that are present in the file system have names matching *pathspec*, and returns a *fresh list* of *pathnames* corresponding to the *truenames* of those *files*. 



An *implementation* may be extended to accept *implementation-defined* keyword arguments to **directory**. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



If the attempt to obtain a directory listing is not successful, an error of *type* **file-error** is signaled. 



**See Also:** 



**pathname**, **logical-pathname**, **ensure-directories-exist**, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



If the *pathspec* is not *wild*, the resulting list will contain either zero or one elements. 



Common Lisp specifies “&amp;key” in the argument list to **directory** even though no *standardized* keyword arguments to **directory** are defined. “:allow-other-keys t” may be used in *conforming programs* in order to quietly ignore any additional keywords which are passed by the program but not supported by the *implementation*. 



