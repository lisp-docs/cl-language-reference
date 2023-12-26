**two-way-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"two-way-stream"}><b>two-way-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *bidirectional composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



**See Also:** 



<DictionaryLink  term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



**input-stream-p** *stream → generalized-boolean* 



**output-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



**input-stream-p** returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *input stream*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. **output-stream-p** returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *output stream*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 

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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 







 



 



