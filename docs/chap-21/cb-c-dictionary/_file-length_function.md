**file-length** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"file-length"}><b>file-length</b></DictionaryLink> *stream → length* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *stream associated with a file*. 



<GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"file-length"}><b>file-length</b></DictionaryLink> returns the length of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the length cannot be determined. 



For a binary file, the length is measured in units of the *element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. **Examples:**
```lisp

(with-open-file (s "decimal-digits.text" 

		   
		   
		   :direction :output :if-exists :error) 
  (princ "0123456789" s) 
  (truename s)) 
*→* #P"A:>Joe>decimal-digits.text.1" 
(with-open-file (s "decimal-digits.text") 
  (file-length s)) 
*→* 10 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a *stream associated with a file*. 



**See Also:** 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> 



