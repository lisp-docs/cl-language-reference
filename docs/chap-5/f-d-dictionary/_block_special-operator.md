**block** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> *name form*\* *→ \{result\}*\* 



Data and Control 











**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> if a *normal return* occurs, or else, if an *explicit return* occurs, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that were transferred. 



**Description:** 



<DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> *establishes* a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and then evaluates <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> as an *implicit progn*. 



The *special operators* <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> and <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> can be used with the given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to return control and values from the <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, except when an intervening <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> with the same name has been *established*, in which case the outer <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> is shadowed by the inner one. 



The <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> has *lexical scope* and *dynamic extent*. 



Once established, a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> may only be exited once, whether by *normal return* or *explicit return*. **Examples:**
```lisp

(block empty) *→* NIL 
(block whocares (values 1 2) (values 3 4)) *→* 3, 4 
(let ((x 1)) 
  (block stop (setq x 2) (return-from stop) (setq x 3)) 
  x) *→* 2 
(block early (return-from early (values 1 2)) (values 3 4)) *→* 1, 2 
(block outer (block inner (return-from outer 1)) 2) *→* 1 
(block twin (block twin (return-from twin 1)) 2) *→* 2 
;; Contrast behavior of this example with corresponding example of CATCH. 
(block b 
  (flet ((b1 () (return-from b 1))) 
    (block b (b1) (print ’unreachable)) 
    2)) *→* 1 

```
**See Also:** 



<DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 















<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> 



