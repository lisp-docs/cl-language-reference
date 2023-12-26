**stream-error-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink> *condition → stream* 



**Arguments and Values:** 



<ClLinks  term={"condition"}><i>condition</i></ClLinks>—a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> **stream-error**. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Description:** 



Returns the offending <ClLinks  term={"stream"}><i>stream</i></ClLinks> of a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> **stream-error**. 



**Examples:**
```lisp
(with-input-from-string (s "(FOO") 
  (handler-case (read s) 
    
    
    (end-of-file (c) 
      (format nil "~&End of file on ~S." (stream-error-stream c))))) 
"End of file on #<String Stream>." 
```
**See Also:** 



**stream-error**, Chapter 9 (Conditions) 



