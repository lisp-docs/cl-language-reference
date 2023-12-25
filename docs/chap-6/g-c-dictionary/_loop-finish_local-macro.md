**loop-finish** *Local Macro* 



**Syntax:** 



<DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> *hno argumentsi →* 



**Description:** 



The <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> can be used lexically within an extended <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to terminate that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> “normally.” That is, it transfers control to the loop epilogue of the lexically innermost extended <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. This permits execution of any **finally** clause (for effect) and the return of any accumulated result. 



**Examples:**
```lisp

;; Terminate the loop, but return the accumulated count. 
(loop for i in ’(1 2 3 stop-here 4 5 6) 
      when (symbolp i) do (loop-finish) 
      count i) 
*→* 3 
;; The preceding loop is equivalent to: 
(loop for i in ’(1 2 3 stop-here 4 5 6) 
      until (symbolp i) 
      count i) 
*→* 3 
;; While LOOP-FINISH can be used can be used in a variety of 
;; situations it is really most needed in a situation where a need 
;; to exit is detected at other than the loop’s ‘top level’ 
;; (where UNTIL or WHEN often work just as well), or where some 
;; computation must occur between the point where a need to exit is 
;; detected and the point where the exit actually occurs. For example: 
(defun tokenize-sentence (string) 
  (macrolet ((add-word (wvar svar) 
	       ‘(when ,wvar 
		  (push (coerce (nreverse ,wvar) ’string) ,svar) 
		  (setq ,wvar nil)))) 

    
    
    **loop-finish** 
    (loop with word = ’() and sentence = ’() and endpos = nil 
	  for i below (length string) 
	  do (let ((char (aref string i))) 
	       (case char 
		 (#\Space (add-word word sentence)) 
		 (#\. (setq endpos (1+ i)) (loop-finish)) 
		 (otherwise (push char word)))) 
	  finally (add-word word sentence) 
	  (return (values (nreverse sentence) endpos))))) 
*→* TOKENIZE-SENTENCE 
(tokenize-sentence "this is a sentence. this is another sentence.") 
*→* ("this" "is" "a" "sentence"), 19 
(tokenize-sentence "this is a sentence") 
*→* ("this" "is" "a" "sentence"), NIL 

```
**Side Effects:** 



Transfers control. 



**Exceptional Situations:** 



Whether or not <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> outside of <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> are undefined. 



**See Also:** 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, Section 6.1 (The LOOP Facility) 



**Notes:** 







 



 





