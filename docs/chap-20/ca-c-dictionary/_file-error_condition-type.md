**file-error** *Condition Type* 



**Class Precedence List:** 



**file-error**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **file-error** consists of error conditions that occur during an attempt to open or close a file, or during some low-level transactions with a file system. The “offending pathname” is initialized by the :pathname initialization argument to **make-condition**, and is *accessed* by the *function* **file-error-pathname**. 







 



 



**See Also:** 



**file-error-pathname, open, probe-file, directory, ensure-directories-exist** 



