**interactive-stream-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"interactive-stream-p"}><b>interactive-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(when (> measured limit) 
  (let ((error (round (\* (- measured limit) 100) 
		      limit))) 
    (unless (if (interactive-stream-p \*query-io\*) 
		(yes-or-no-p "The frammis is out of tolerance by ~D%.~@ 
Is it safe to proceed? " error) 
		(< error 15)) ;15% is acceptable 
      (error "The frammis is out of tolerance by ~D%." error)))) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



