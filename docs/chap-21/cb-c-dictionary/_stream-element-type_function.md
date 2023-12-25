**stream-element-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> *stream → typespec* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*typespec*—a *type specifier* . 



**Description:** 



<DictionaryLink styled={true} term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> returns a *type specifier* that indicates the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that may be read from or written to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"stream"}><i>Streams</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> have an *element type* restricted to <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> or a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. **Examples:**
```lisp

;; Note that the stream must accomodate at least the specified type, 
;; but might accomodate other types. Further note that even if it does 
;; accomodate exactly the specified type, the type might be specified in 
;; any of several ways. 
(with-open-file (s "test" :element-type ’(integer 0 1) 
		   :if-exists :error 
		   :direction :output) 

  
  
  (stream-element-type s)) 
*→* INTEGER 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 16) 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 8) 
<i><sup>or</sup>→</i> BIT 
<i><sup>or</sup>→</i> (UNSIGNED-BYTE 1) 
<i><sup>or</sup>→</i> (INTEGER 0 1) 
<i><sup>or</sup>→</i> (INTEGER 0 (2)) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



