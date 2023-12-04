**delete-file** *Function* 



**Syntax:** 



**delete-file** *filespec →* **t** 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



**Description:** 



Deletes the *file* specified by *filespec*. 



If the *filespec designator* is an open *stream*, then *filespec* and the file associated with it are affected (if the file system permits), in which case *filespec* might be closed immediately, and the deletion 







 



 



might be immediate or delayed until *filespec* is explicitly closed, depending on the requirements of the file system. 



It is *implementation-dependent* whether an attempt to delete a nonexistent file is considered to be successful. 



**delete-file** returns *true* if it succeeds, or signals an error of *type* **file-error** if it does not. 



The consequences are undefined if *filespec* has a *wild* component, or if *filespec* has a **nil** component and the file system does not permit a **nil** component. 



**Examples:**
```lisp
 



(with-open-file (s "delete-me.text" :direction :output :if-exists :error)) 



*→* NIL 



(setq p (probe-file "delete-me.text")) *→* #P"R:>fred>delete-me.text.1" 



(delete-file p) *→* T 



(probe-file "delete-me.text") *→ false* 



(with-open-file (s "delete-me.text" :direction :output :if-exists :error) 



(delete-file s)) 



*→* T 



(probe-file "delete-me.text") *→ false* 




```
**Exceptional Situations:** 



If the deletion operation is not successful, an error of *type* **file-error** is signaled. 



An error of *type* **file-error** might be signaled if *filespec* is *wild*. 



**See Also:** 



**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



