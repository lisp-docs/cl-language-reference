**file-string-length** *Function* 



**Syntax:** 



**file-string-length** *stream object → length* 



**Arguments and Values:** 



*stream*—an *output character file stream*. 



*object*—a *string* or a *character* . 



*length*—a non-negative *integer* , or **nil**. 



**Description:** 



**file-string-length** returns the difference between what (file-position *stream*) would be after writing *object* and its current value, or **nil** if this cannot be determined. 



The returned value corresponds to the current state of *stream* at the time of the call and might not be the same if it is called again when the state of the *stream* has changed. 







 



 



**open** 



