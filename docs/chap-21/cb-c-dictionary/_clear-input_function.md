**clear-input** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"clear-input"}><b>clear-input</b></DictionaryLink> &amp;optional *input-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



**Description:** 



Clears any available input from *input-stream*. 



If <DictionaryLink  term={"clear-input"}><b>clear-input</b></DictionaryLink> does not make sense for *input-stream*, then <DictionaryLink  term={"clear-input"}><b>clear-input</b></DictionaryLink> does nothing. 

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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *input-stream* is not a <GlossaryTerm styled={true} term={"stream designator"}><i>stream designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"clear-output"}><b>clear-output</b></DictionaryLink> 



