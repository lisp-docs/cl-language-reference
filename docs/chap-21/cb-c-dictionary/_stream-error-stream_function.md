**stream-error-stream** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink> *condition → stream* 



**Arguments and Values:** 



<GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> **stream-error**. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Description:** 



Returns the offending <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> of a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> **stream-error**. 



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



