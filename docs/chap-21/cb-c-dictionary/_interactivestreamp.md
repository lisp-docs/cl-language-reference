**interactive-stream-p** *Function* 



**Syntax:** 



**interactive-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



*stream*—a *stream*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *stream* is an *interactive stream*; otherwise, returns *false*. 



**Examples:**
```lisp

(when (> measured limit) 
  (let ((error (round (\* (- measured limit) 100) 
		      limit))) 
    (unless (if (interactive-stream-p \*query-io\*) 
		(yes-or-no-p "The frammis is out of tolerance by &#126;D%.&#126;@ 
Is it safe to proceed? " error) 
		(< error 15)) ;15% is acceptable 
      (error "The frammis is out of tolerance by &#126;D%." error)))) 

```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. 



**See Also:** 



Section 21.1 (Stream Concepts) 



