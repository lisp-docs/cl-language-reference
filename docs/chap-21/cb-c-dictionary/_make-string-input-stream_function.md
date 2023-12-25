**make-string-input-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *start end → string-stream* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—*bounding index designators* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*string-stream*—an *input string stream*. 



**Description:** 



Returns an *input string stream*. This <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> will supply, in order, the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in the substring of *string bounded* by *start* and *end*. After the last <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> has been supplied, the *string stream* will then be at *end of file*. 



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



<DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> 



