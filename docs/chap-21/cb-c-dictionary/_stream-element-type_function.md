**stream-element-type** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"stream-element-type"}><b>stream-element-type</b></ClLinks> *stream → typespec* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*typespec*—a *type specifier* . 



**Description:** 



<ClLinks  term={"stream-element-type"}><b>stream-element-type</b></ClLinks> returns a *type specifier* that indicates the <ClLinks  term={"type"}><i>types</i></ClLinks> of <ClLinks  term={"object"}><i>objects</i></ClLinks> that may be read from or written to <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks  term={"stream"}><i>Streams</i></ClLinks> created by <ClLinks  term={"open"}><b>open</b></ClLinks> have an *element type* restricted to <ClLinks  term={"integer"}><b>integer</b></ClLinks> or a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>. 

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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



