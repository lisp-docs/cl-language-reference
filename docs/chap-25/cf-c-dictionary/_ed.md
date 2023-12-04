**ed** *Function* 



**Syntax:** 



**ed** &optional *x → implementation-dependent* 



**Arguments and Values:** 



*x*—**nil**, a *pathname*, a *string*, or a *function name*. The default is **nil**. 



**Description:** 



**ed** invokes the editor if the *implementation* provides a resident editor. 



If *x* is **nil**, the editor is entered. If the editor had been previously entered, its prior state is resumed, if possible. 



If *x* is a *pathname* or *string*, it is taken as the *pathname designator* for a *file* to be edited. 



If *x* is a *function name*, the text of its definition is edited. The means by which the function text is obtained is *implementation-defined*. 



**Exceptional Situations:** 



The consequences are undefined if the *implementation* does not provide a resident editor. Might signal **type-error** if its argument is supplied but is not a *symbol*, a *pathname*, or **nil**. 



If a failure occurs when performing some operation on the *file system* while attempting to edit a *file*, an error of *type* **file-error** is signaled. 



An error of *type* **file-error** might be signaled if *x* is a *designator* for a *wild pathname*. *Implementation-dependent* additional conditions might be signaled as well. 



**See Also:** 



**pathname**, **logical-pathname**, **compile-file**, **load**, Section 19.1.2 (Pathnames as Filenames) 



 



 



