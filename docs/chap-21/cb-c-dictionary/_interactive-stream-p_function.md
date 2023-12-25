**interactive-stream-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"interactive-stream-p"}><b>interactive-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *interactive stream*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



