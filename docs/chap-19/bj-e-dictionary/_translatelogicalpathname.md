**translate-logical-pathname** *Function* 



**Syntax:** 



**translate-logical-pathname** *pathname* &amp;key *→ physical-pathname* 



**Arguments and Values:** 



*pathname*—a *pathname designator* , or a *logical pathname namestring*. 



*physical-pathname*—a *physical pathname*. 



**Description:** 



Translates *pathname* to a *physical pathname*, which it returns. 



If *pathname* is a *stream*, the *stream* can be either open or closed. **translate-logical-pathname** returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if *pathname* is a *stream* that is created with **make-two-way-stream**, **make-echo-stream**, **make-broadcast-stream**, **make-concatenated-stream**, **make-string-input-stream**, **make-string-output-stream**. 



If *pathname* is a *logical pathname* namestring, the host portion of the *logical pathname* namestring and its following *colon* are required. 



*Pathname* is first coerced to a *pathname*. If the coerced *pathname* is a physical pathname, it is returned. If the coerced *pathname* is a *logical pathname*, the first matching translation (according to **pathname-match-p**) of the *logical pathname* host is applied, as if by calling **translate-pathname**. If the result is a *logical pathname*, this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled. 



**translate-logical-pathname** might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are *implementation-defined*. Some implementations do no additional translations. 



There are no specified keyword arguments for **translate-logical-pathname**, but implementations are permitted to extend it by adding keyword arguments. 



**Examples:**
```lisp
 

See **logical-pathname-translations**. 


```
**Exceptional Situations:** 



If *pathname* is incorrectly supplied, an error of *type* **type-error** is signaled. 



If no translation matches, an error of *type* **file-error** is signaled. 







 



 



**See Also:** 



**logical-pathname**, **logical-pathname-translations**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



