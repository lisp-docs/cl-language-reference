**file-length** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink> *stream → length* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. 



<GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink> returns the length of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the length cannot be determined. 



For a binary file, the length is measured in units of the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 

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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



