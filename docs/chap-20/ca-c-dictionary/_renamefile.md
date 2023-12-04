**rename-file** *Function* 



**Syntax:** 



**rename-file** *filespec new-name → defaulted-new-name, old-truename, new-truename* 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



*new-name*—a *pathname designator* other than a *stream*. 



*defaulted-new-name*—a *pathname* 



*old-truename*—a *physical pathname*. 



*new-truename*—a *physical pathname*. 



**Description:** 



**rename-file** modifies the file system in such a way that the file indicated by *filespec* is renamed to *defaulted-new-name*. 



It is an error to specify a filename containing a *wild* component, for *filespec* to contain a **nil** component where the file system does not permit a **nil** component, or for the result of defaulting missing components of *new-name* from *filespec* to contain a **nil** component where the file system does not permit a **nil** component. 



If *new-name* is a *logical pathname*, **rename-file** returns a *logical pathname* as its *primary value*. 



 



 



**rename-file** returns three values if successful. The *primary value*, *defaulted-new-name*, is the resulting name which is composed of *new-name* with any missing components filled in by performing a **merge-pathnames** operation using *filespec* as the defaults. The *secondary value*, *old-truename*, is the *truename* of the *file* before it was renamed. The *tertiary value*, *new-truename*, is the *truename* of the *file* after it was renamed. 



If the *filespec designator* is an open *stream*, then the *stream* itself and the file associated with it are affected (if the *file system* permits). 



**Examples:**
```lisp
 



;; An example involving logical pathnames. 



(with-open-file (stream "sys:chemistry;lead.text" 



:direction :output :if-exists :error) 



(princ "eureka" stream) 



(values (pathname stream) (truename stream))) 



*→* #P"SYS:CHEMISTRY;LEAD.TEXT.NEWEST", #P"Q:>sys>chem>lead.text.1" 



(rename-file "sys:chemistry;lead.text" "gold.text") 



*→* #P"SYS:CHEMISTRY;GOLD.TEXT.NEWEST", 



#P"Q:>sys>chem>lead.text.1", 



#P"Q:>sys>chem>gold.text.1" 




```
**Exceptional Situations:** 



If the renaming operation is not successful, an error of *type* **file-error** is signaled. 



An error of *type* **file-error** might be signaled if *filespec* is *wild*. 



**See Also:** 



**truename**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



