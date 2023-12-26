**file-length** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink> *stream → length* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. 



<ClLinks  term={"length"}><i>length</i></ClLinks>—a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink> returns the length of <ClLinks  term={"stream"}><i>stream</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the length cannot be determined. 



For a binary file, the length is measured in units of the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 

**Examples:**
```lisp
(with-open-file (s "decimal-digits.text" 
		   
		   
		   :direction :output :if-exists :error) 
  (princ "0123456789" s) 
  (truename s)) 
→ #P"A:>Joe>decimal-digits.text.1" 
(with-open-file (s "decimal-digits.text") 
  (file-length s)) 
→ 10 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



