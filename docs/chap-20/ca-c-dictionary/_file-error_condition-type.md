**file-error** *Condition Type* 



**Class Precedence List:** 



<ClLinks  term={"file-error"}><b>file-error</b></ClLinks>, <ClLinks  term={"error"}><b>error</b></ClLinks>, <ClLinks  term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks  term={"condition"}><b>condition</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> consists of error conditions that occur during an attempt to open or close a file, or during some low-level transactions with a file system. The “offending pathname” is initialized by the :pathname initialization argument to <ClLinks  term={"make-condition"}><b>make-condition</b></ClLinks>, and is *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"file-error-pathname"}><b>file-error-pathname</b></ClLinks>. 







 



 



**See Also:** 



**file-error-pathname, open, probe-file, directory, ensure-directories-exist** 



