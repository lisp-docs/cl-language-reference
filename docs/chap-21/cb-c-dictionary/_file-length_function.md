**file-length** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"file-length"}><b>file-length</b></ClLinks> *stream → length* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a *stream associated with a file*. 



<ClLinks  term={"length"}><i>length</i></ClLinks>—a non-negative *integer* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"file-length"}><b>file-length</b></ClLinks> returns the length of <ClLinks  term={"stream"}><i>stream</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the length cannot be determined. 



For a binary file, the length is measured in units of the *element type* of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 

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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a *stream associated with a file*. 



**See Also:** 



<ClLinks  term={"open"}><b>open</b></ClLinks> 



