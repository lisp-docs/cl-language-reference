**stream-error-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink> *condition → stream* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> **stream-error**. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Description:** 



Returns the offending <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> **stream-error**. 



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



