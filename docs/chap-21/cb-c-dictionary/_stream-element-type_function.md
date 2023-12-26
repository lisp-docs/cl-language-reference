**stream-element-type** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> *stream → typespec* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that indicates the <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that may be read from or written to <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm  term={"stream"}><i>Streams</i></GlossaryTerm> created by <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> have an <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> restricted to <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink> or a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 

**Examples:**
```lisp
;; Note that the stream must accomodate at least the specified type, 
;; but might accomodate other types. Further note that even if it does 
;; accomodate exactly the specified type, the type might be specified in 
;; any of several ways. 
(with-open-file (s "test" :element-type ’(integer 0 1) 
		   :if-exists :error 
		   :direction :output) 
  
  
  (stream-element-type s)) 
→ INTEGER 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 16) 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 8) 
<i><sup>or</sup>→</i> BIT 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 1) 
<i><sup>or</sup>→</i> (INTEGER 0 1) 
<i><sup>or</sup>→</i> (INTEGER 0 (2)) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



