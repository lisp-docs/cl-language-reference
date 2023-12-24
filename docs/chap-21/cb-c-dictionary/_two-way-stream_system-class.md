**two-way-stream** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"two-way-stream"}><b>two-way-stream</b></ClLinks>, <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *bidirectional composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



**See Also:** 



<ClLinks styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



**input-stream-p** *stream → generalized-boolean* 



**output-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**input-stream-p** returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *input stream*; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. **output-stream-p** returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *output stream*; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 

**Examples:**
```lisp

(input-stream-p \*standard-input\*) → true 
(input-stream-p \*terminal-io\*) → true 
(input-stream-p (make-string-output-stream)) → false 
(output-stream-p \*standard-output\*) → true 
(output-stream-p \*terminal-io\*) → true 
(output-stream-p (make-string-input-stream "jr")) → false 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 







 



 



