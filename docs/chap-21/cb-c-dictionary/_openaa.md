**open**, **close**, **pathname**, **logical-pathname**, Section 19.1.2 (Pathnames as Filenames) **close** *Function* 



**Syntax:** 



**close** *stream* &amp;key *abort → result* 



**Arguments and Values:** 



*stream*—a *stream* (either *open* or *closed*). 



*abort*—a *generalized boolean*. The default is *false*. 



*result*—**t** if the *stream* was *open* at the time it was received as an *argument*, or *implementation dependent* otherwise. 



**Description:** 



**close** closes *stream*. Closing a *stream* means that it may no longer be used in input or output operations. The act of *closing* a *file stream* ends the association between the *stream* and its associated *file*; the transaction with the *file system* is terminated, and input/output may no longer be performed on the *stream*. 



If *abort* is *true*, an attempt is made to clean up any side effects of having created *stream*. If *stream* performs output to a file that was created when the *stream* was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed *stream*, but in that case the *result* is *implementation dependent*. 



After *stream* is closed, it is still possible to perform the following query operations upon it: **streamp**, **pathname**, **truename**, **merge-pathnames**, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, **namestring**, **file-namestring**, **directory-namestring**, **host-namestring**, **enough-namestring**, **open**, **probe-file**, and **directory**. 



The effect of **close** on a *constructed stream* is to close the argument *stream* only. There is no effect on the *constituents* of *composite streams*. 



For a *stream* created with **make-string-output-stream**, the result of **get-output-stream-string** is unspecified after **close**. 







 



 



**Examples:**
```lisp
 



(setq s (make-broadcast-stream)) *→* #&lt;BROADCAST-STREAM&gt; 



(close s) *→* T 



(output-stream-p s) *→ true* 




```
**Side Effects:** 



The *stream* is *closed* (if necessary). If *abort* is *true* and the *stream* is an *output file stream*, its associated *file* might be deleted. 



**See Also:** 



**open** 



