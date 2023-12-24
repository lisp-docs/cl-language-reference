**make-string-output-stream** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks> &amp;key *element-type → string-stream* 



**Arguments and Values:** 



*element-type*—a *type specifier* . The default is <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. 



*string-stream*—an *output string stream*. 







 



 



**Description:** 



Returns an *output string stream* that accepts <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> and makes available (via <ClLinks styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks>) a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that contains the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that were actually output. 



The *element-type* names the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is constructed of the most specialized <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that can accommodate <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of that *element-type*. 



**Examples:**
```lisp

(let ((s (make-string-output-stream))) 
  (write-string "testing... " s) 
  (prin1 1234 s) 
  (get-output-stream-string s)) 
→ "testing... 1234" 
None.. 

```
**See Also:** 



<ClLinks styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks>, <ClLinks styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> 



