**make-string-input-stream** *Function* 



**Syntax:** 



**make-string-input-stream** *string* &amp;optional *start end → string-stream* 



**Arguments and Values:** 



*string*—a *string*. 



*start*, *end*—*bounding index designators* of *string*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*string-stream*—an *input string stream*. 



**Description:** 



Returns an *input string stream*. This *stream* will supply, in order, the *characters* in the substring of *string bounded* by *start* and *end*. After the last *character* has been supplied, the *string stream* will then be at *end of file*. 



**Examples:**
```lisp
 

(let ((string-stream (make-string-input-stream "1 one "))) 

(list (read string-stream nil nil) 

(read string-stream nil nil) 

(read string-stream nil nil))) 

*→* (1 ONE NIL) 

(read (make-string-input-stream "prefixtargetsuffix" 6 12)) *→* TARGET 


```
**See Also:** 



**with-input-from-string** 



