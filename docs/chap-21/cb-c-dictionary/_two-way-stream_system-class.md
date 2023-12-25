**two-way-stream** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"two-way-stream"}><b>two-way-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *bidirectional composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



**See Also:** 



<DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**input-stream-p** *stream → generalized-boolean* 



**output-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**input-stream-p** returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *input stream*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. **output-stream-p** returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *output stream*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. **Examples:**
```lisp

(input-stream-p \*standard-input\*) *→ true* 
(input-stream-p \*terminal-io\*) *→ true* 
(input-stream-p (make-string-output-stream)) *→ false* 
(output-stream-p \*standard-output\*) *→ true* 
(output-stream-p \*terminal-io\*) *→ true* 
(output-stream-p (make-string-input-stream "jr")) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 







 



 



