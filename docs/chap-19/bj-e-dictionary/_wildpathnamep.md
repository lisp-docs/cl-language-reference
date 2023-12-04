**wild-pathname-p** *Function* 



**Syntax:** 



**wild-pathname-p** *pathname* &optional *field-key → generalized-boolean* 



**Arguments and Values:** 



*pathname*—a *pathname designator* . 



*Field-key*—one of :host, :device :directory, :name, :type, :version, or **nil**. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**wild-pathname-p** tests *pathname* for the presence of wildcard components. 



If *pathname* is a *pathname* (as returned by **pathname**) it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If *field-key* is not supplied or **nil**, **wild-pathname-p** returns true if *pathname* has any wildcard components, **nil** if *pathname* has none. If *field-key* is *non-nil*, **wild-pathname-p** returns true if the indicated component of *pathname* is a wildcard, **nil** if the component is not a wildcard. 



**Examples:**
```lisp
 



;;;The following examples are not portable. They are written to run 



;;;with particular file systems and particular wildcard conventions. 



;;;Other implementations will behave differently. These examples are 



;;;intended to be illustrative, not to be prescriptive. 



(wild-pathname-p (make-pathname :name :wild)) *→ true* 



(wild-pathname-p (make-pathname :name :wild) :name) *→ true* 



(wild-pathname-p (make-pathname :name :wild) :type) *→ false* 



(wild-pathname-p (pathname "s:>foo>\*\*>")) *→ true* ;Lispm 



(wild-pathname-p (pathname :name "F\*O")) *→ true* ;Most places 




```
**Exceptional Situations:** 



If *pathname* is not a *pathname*, a *string*, or a *stream associated with a file* an error of *type* **type-error** is signaled. 



**See Also:** 



**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Not all implementations support wildcards in all fields. See Section 19.2.2.2.2 (:WILD as a 



 



 



Component Value) and Section 19.2.2.3 (Restrictions on Wildcard Pathnames). 



