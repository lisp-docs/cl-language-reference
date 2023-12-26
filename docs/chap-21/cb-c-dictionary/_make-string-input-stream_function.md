**make-string-input-stream** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink> <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;optional *start end → string-stream* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*string-stream*—an *input string stream*. 



**Description:** 



Returns an *input string stream*. This <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> will supply, in order, the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> in the substring of *string bounded* by *start* and *end*. After the last <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> has been supplied, the <GlossaryTerm styled={true} term={"string stream"}><i>string stream</i></GlossaryTerm> will then be at <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm>. 



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



<DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> 



