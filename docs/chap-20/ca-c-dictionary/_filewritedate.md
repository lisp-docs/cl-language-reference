**file-write-date** *Function* 



**Syntax:** 



**file-write-date** *pathspec → date* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*date*—a *universal time* or **nil**. 



**Description:** 



Returns a *universal time* representing the time at which the *file* specified by *pathspec* was last written (or created), or returns **nil** if such a time cannot be determined. 



**Examples:**
```lisp
 



(with-open-file (s "noel.text" 



:direction :output :if-exists :error) 



(format s "~&Dear Santa,~2%I was good this year. ~ 



Please leave lots of toys.~2%Love, Sue~ 







 



 



~2%attachments: milk, cookies~%") 



(truename s)) 



*→* #P"CUPID:/susan/noel.text" 



(with-open-file (s "noel.text") 



(file-write-date s)) 



*→* 2902600800 




```
**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of *type* **file-error** is signaled if *pathspec* is *wild*. 



An error of *type* **file-error** is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames) 



