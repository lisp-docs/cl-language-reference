**interactive-stream-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"interactive-stream-p"}><b>interactive-stream-p</b></ClLinks> *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *interactive stream*; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



