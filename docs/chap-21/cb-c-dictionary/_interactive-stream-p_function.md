**interactive-stream-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"interactive-stream-p"}><b>interactive-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



