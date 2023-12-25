**stream-error-stream** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></ClLinks> *condition → stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> **stream-error**. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Description:** 



Returns the offending <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> **stream-error**. 



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



