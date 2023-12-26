**block** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink> *name form*\* → \{result\}\* 



Data and Control 











**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> that were transferred. 



**Description:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink> *establishes* a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and then evaluates <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm> <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> and <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> can be used with the given <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to return control and values from the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, except when an intervening <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> with the same name has been *established*, in which case the outer <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> is shadowed by the inner one. 



The <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 



Once established, a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> may only be exited once, whether by <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm>. 

**Examples:**
```lisp
(block empty) → NIL 
(block whocares (values 1 2) (values 3 4)) → 3, 4 
(let ((x 1)) 
  (block stop (setq x 2) (return-from stop) (setq x 3)) 
  x) → 2 
(block early (return-from early (values 1 2)) (values 3 4)) → 1, 2 
(block outer (block inner (return-from outer 1)) 2) → 1 
(block twin (block twin (return-from twin 1)) 2) → 2 
;; Contrast behavior of this example with corresponding example of CATCH. 
(block b 
  (flet ((b1 () (return-from b 1))) 
    (block b (b1) (print ’unreachable)) 
    2)) → 1 
```
**See Also:** 



<DictionaryLink  term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 















<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> 



