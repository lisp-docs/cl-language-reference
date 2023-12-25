**clear-input** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"clear-input"}><b>clear-input</b></DictionaryLink> &amp;optional *input-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



**Description:** 



Clears any available input from *input-stream*. 



If <DictionaryLink styled={true} term={"clear-input"}><b>clear-input</b></DictionaryLink> does not make sense for *input-stream*, then <DictionaryLink styled={true} term={"clear-input"}><b>clear-input</b></DictionaryLink> does nothing. **Examples:**
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
*→* (10 20) 
(read-sleepily t) 
▷ > 10 
▷ > 
▷ » 20 
*→* (10 20) 
(read-sleepily t 10) 
▷ > 10 
▷ > 20 ; Some implementations won’t echo typeahead here. 



▷ » 30 
*→* (10 30) 

```
**Side Effects:** 



The *input-stream* is modified. 



**Affected By:** 



**\*standard-input\*** 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *input-stream* is not a *stream designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"clear-output"}><b>clear-output</b></DictionaryLink> 



