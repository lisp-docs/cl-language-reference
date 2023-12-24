**clear-input** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"clear-input"}><b>clear-input</b></ClLinks> &amp;optional *input-stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



**Description:** 



Clears any available input from *input-stream*. 



If <ClLinks styled={true} term={"clear-input"}><b>clear-input</b></ClLinks> does not make sense for *input-stream*, then <ClLinks styled={true} term={"clear-input"}><b>clear-input</b></ClLinks> does nothing. 

**Examples:**
```lisp

;; The exact I/O behavior of this example might vary from implementation 
;; to implementation depending on the kind of interactive buffering that 
;; occurs. (The call to SLEEP here is intended to help even out the 
;; differences in implementations which do not do line-at-a-time buffering.) 
(defun read-sleepily (&optional (clear-p nil) (zzz 0)) 
  (list (progn (print ’>) (read)) 
	;; Note that input typed within the first ZZZ seconds 
	;; will be discarded. 
	(progn (print ’>) 
	       (if zzz (sleep zzz)) 
	       (print ’») 
	       (if clear-p (clear-input)) 
	       (read)))) 
(read-sleepily) 
▷ > 10 
▷ > 
▷ » 20 
→ (10 20) 
(read-sleepily t) 
▷ > 10 
▷ > 
▷ » 20 
→ (10 20) 
(read-sleepily t 10) 
▷ > 10 
▷ > 20 ; Some implementations won’t echo typeahead here. 



▷ » 30 
→ (10 30) 

```
**Side Effects:** 



The *input-stream* is modified. 



**Affected By:** 



**\*standard-input\*** 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *input-stream* is not a *stream designator* . 



**See Also:** 



<ClLinks styled={true} term={"clear-output"}><b>clear-output</b></ClLinks> 



