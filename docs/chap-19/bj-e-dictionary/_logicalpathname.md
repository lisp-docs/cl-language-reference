**logical-pathname** *Function* 



**Syntax:** 



**logical-pathname** *pathspec → logical-pathname* 



**Arguments and Values:** 



*pathspec*—a *logical pathname*, a *logical pathname namestring*, or a *stream*. 



*logical-pathname*—a *logical pathname*. 



**Description:** 



**logical-pathname** converts *pathspec* to a *logical pathname* and returns the new *logical pathname*. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following *colon*. If *pathspec* is a *stream*, it should be one for which **pathname** returns a *logical pathname*. 



If *pathspec* is a *stream*, the *stream* can be either open or closed. **logical-pathname** returns the same *logical pathname* after a file is closed as it did when the file was open. It is an error if *pathspec* is a *stream* that is created with **make-two-way-stream**, **make-echo-stream**, **make-broadcast-stream**, **make-concatenated-stream**, **make-string-input-stream**, or **make-string-output-stream**. 



**Exceptional Situations:** 



Signals an error of *type* **type-error** if *pathspec* isn’t supplied correctly. 



**See Also:** 



**logical-pathname**, **translate-logical-pathname**, Section 19.3 (Logical Pathnames) 



 



 



*∗***default-pathname-defaults***∗ Variable* 



**Value Type:** 



a *pathname object*. 



**Initial Value:** 



An *implementation-dependent pathname*, typically in the working directory that was current when Common Lisp was started up. 



**Description:** 



a *pathname*, used as the default whenever a *function* needs a default *pathname* and one is not supplied. 



**Examples:**
```lisp
 

;; This example illustrates a possible usage for a hypothetical Lisp running on a ;; DEC TOPS-20 file system. Since pathname conventions vary between Lisp 

;; implementations and host file system types, it is not possible to provide a ;; general-purpose, conforming example. 

\*default-pathname-defaults\* *→* #P"PS:&lt;FRED&gt;" 

(merge-pathnames (make-pathname :name "CALENDAR")) 

*→* #P"PS:&lt;FRED&gt;CALENDAR" 

(let ((\*default-pathname-defaults\* (pathname "&lt;MARY&gt;"))) 

(merge-pathnames (make-pathname :name "CALENDAR"))) 

*→* #P"&lt;MARY&gt;CALENDAR" 


```
**Affected By:** 



The *implementation*. 



