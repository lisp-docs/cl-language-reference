**pathname-match-p** *Function* 



**Syntax:** 



**pathname-match-p** *pathname wildcard → generalized-boolean* 



**Arguments and Values:** 



*pathname*—a *pathname designator* . 



*wildcard*—a *designator* for a *wild pathname*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**pathname-match-p** returns true if *pathname* matches *wildcard*, otherwise **nil**. The matching rules are *implementation-defined* but should be consistent with **directory**. Missing components of *wildcard* default to :wild. 



It is valid for *pathname* to be a wild *pathname*; a wildcard field in *pathname* only matches a wildcard field in *wildcard* (*i.e.*, **pathname-match-p** is not commutative). It is valid for *wildcard* to be a non-wild *pathname*. 



**Exceptional Situations:** 



If *pathname* or *wildcard* is not a *pathname*, *string*, or *stream associated with a file* an error of *type* **type-error** is signaled. 



**See Also:** 



**directory**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 







 



 



**translate-logical-pathname** 



