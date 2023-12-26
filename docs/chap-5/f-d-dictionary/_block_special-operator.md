**block** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink> *name form*\* → \{result\}\* 



Data and Control 











**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks> if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <ClLinks  term={"value"}><i>values</i></ClLinks> that were transferred. 



**Description:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink> *establishes* a <ClLinks  term={"block"}><i>block</i></ClLinks> named <ClLinks  term={"name"}><i>name</i></ClLinks> and then evaluates <ClLinks  term={"form"}><i>forms</i></ClLinks> as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm> <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> and <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within <ClLinks  term={"form"}><i>forms</i></ClLinks>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> can be used with the given <ClLinks  term={"name"}><i>name</i></ClLinks> to return control and values from the <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>, except when an intervening <ClLinks  term={"block"}><i>block</i></ClLinks> with the same name has been *established*, in which case the outer <ClLinks  term={"block"}><i>block</i></ClLinks> is shadowed by the inner one. 



The <ClLinks  term={"block"}><i>block</i></ClLinks> named <ClLinks  term={"name"}><i>name</i></ClLinks> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 



Once established, a <ClLinks  term={"block"}><i>block</i></ClLinks> may only be exited once, whether by <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm>. 

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



