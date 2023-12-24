**file-error** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> consists of error conditions that occur during an attempt to open or close a file, or during some low-level transactions with a file system. The “offending pathname” is initialized by the :pathname initialization argument to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, and is *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"file-error-pathname"}><b>file-error-pathname</b></ClLinks>. 







 



 



**See Also:** 



**file-error-pathname, open, probe-file, directory, ensure-directories-exist** 



