**loop-finish** *Local Macro* 



**Syntax:** 



<ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> *⟨no arguments⟩ →* 



**Description:** 



The <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> can be used lexically within an extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to terminate that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> “normally.” That is, it transfers control to the loop epilogue of the lexically innermost extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. This permits execution of any **finally** clause (for effect) and the return of any accumulated result. 



**Examples:**
```lisp
;; Terminate the loop, but return the accumulated count. 
(loop for i in ’(1 2 3 stop-here 4 5 6) 
      when (symbolp i) do (loop-finish) 
      count i) 
→ 3 
;; The preceding loop is equivalent to: 
(loop for i in ’(1 2 3 stop-here 4 5 6) 
      until (symbolp i) 
      count i) 
→ 3 
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
→ TOKENIZE-SENTENCE 
(tokenize-sentence "this is a sentence. this is another sentence.") 
→ ("this" "is" "a" "sentence"), 19 
(tokenize-sentence "this is a sentence") 
→ ("this" "is" "a" "sentence"), NIL 
```
**Side Effects:** 



Transfers control. 



**Exceptional Situations:** 



Whether or not <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> outside of <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> are undefined. 



**See Also:** 



<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>, Section 6.1 (The LOOP Facility) 



**Notes:** 







 



 





