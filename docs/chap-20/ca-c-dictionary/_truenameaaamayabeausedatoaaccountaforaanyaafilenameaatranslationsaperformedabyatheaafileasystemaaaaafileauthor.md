**truename** may be used to account for any *filename* translations performed by the *file system*. **file-author** *Function* 



**Syntax:** 



**file-author** *pathspec → author* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*author*—a *string* or **nil**. 







 



 



**Description:** 



Returns a *string* naming the author of the *file* specified by *pathspec*, or **nil** if the author’s name cannot be determined. 



**Examples:**
```lisp
 

(with-open-file (stream "&gt;relativity&gt;general.text") 

(file-author s)) 

*→* "albert" 


```
**Affected By:** 



The host computer’s file system. 



Other users of the *file* named by *pathspec*. 



**Exceptional Situations:** 



An error of *type* **file-error** is signaled if *pathspec* is *wild*. 



An error of *type* **file-error** is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



