**probe-file** *Function* 



**Syntax:** 



**probe-file** *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 







 



 



*truename*—a *physical pathname* or **nil**. 



**Description:** 



**probe-file** tests whether a file exists. 



**probe-file** returns *false* if there is no file named *pathspec*, and otherwise returns the *truename* of *pathspec*. 



If the *pathspec designator* is an open *stream*, then **probe-file** produces the *truename* of its associated *file*. If *pathspec* is a *stream*, whether open or closed, it is coerced to a *pathname* as if by the *function* **pathname**. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of *type* **file-error** is signaled if *pathspec* is *wild*. 



An error of *type* **file-error** is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



**truename**, **open**, **ensure-directories-exist**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



