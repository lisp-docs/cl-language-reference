**make-string-input-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *start end → string-stream* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*string-stream*—an *input string stream*. 



**Description:** 



Returns an *input string stream*. This <ClLinks  term={"stream"}><i>stream</i></ClLinks> will supply, in order, the <ClLinks  term={"character"}><i>characters</i></ClLinks> in the substring of *string bounded* by *start* and *end*. After the last <ClLinks  term={"character"}><i>character</i></ClLinks> has been supplied, the <GlossaryTerm styled={true} term={"string stream"}><i>string stream</i></GlossaryTerm> will then be at <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm>. 



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



<ClLinks  term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks> 



