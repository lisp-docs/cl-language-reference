**file-error** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink>, <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink  term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> consists of error conditions that occur during an attempt to open or close a file, or during some low-level transactions with a file system. The “offending pathname” is initialized by the :pathname initialization argument to <DictionaryLink  term={"make-condition"}><b>make-condition</b></DictionaryLink>, and is *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"file-error-pathname"}><b>file-error-pathname</b></DictionaryLink>. 







 



 



**See Also:** 



**file-error-pathname, open, probe-file, directory, ensure-directories-exist** 



