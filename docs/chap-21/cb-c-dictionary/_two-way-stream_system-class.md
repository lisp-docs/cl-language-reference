**two-way-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"two-way-stream"}><b>two-way-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *bidirectional composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



**See Also:** 



<DictionaryLink  term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**input-stream-p** *stream → generalized-boolean* 



**output-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



**input-stream-p** returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an *input stream*; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. **output-stream-p** returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an *output stream*; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 

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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 







 



 



