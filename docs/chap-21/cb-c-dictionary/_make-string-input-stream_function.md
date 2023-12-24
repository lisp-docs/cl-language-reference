**make-string-input-stream** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *start end → string-stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



*start*, *end*—*bounding index designators* of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*string-stream*—an *input string stream*. 



**Description:** 



Returns an *input string stream*. This <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> will supply, in order, the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> in the substring of *string bounded* by *start* and *end*. After the last <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> has been supplied, the *string stream* will then be at *end of file*. 



**Examples:**
```lisp

(let ((string-stream (make-string-input-stream "1 one "))) 
  (list (read string-stream nil nil) 
	(read string-stream nil nil) 
	(read string-stream nil nil))) 
→ (1 ONE NIL) 
(read (make-string-input-stream "prefixtargetsuffix" 6 12)) → TARGET 

```
**See Also:** 



<ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks> 



