**block** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"block"}><b>block</b></ClLinks> *name form*\* → \{result\}\* 



Data and Control 











**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> if a *normal return* occurs, or else, if an *explicit return* occurs, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that were transferred. 



**Description:** 



<ClLinks styled={true} term={"block"}><b>block</b></ClLinks> *establishes* a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and then evaluates <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> as an *implicit progn*. 



The *special operators* <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> and <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> can be used with the given <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to return control and values from the <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, except when an intervening <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> with the same name has been *established*, in which case the outer <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> is shadowed by the inner one. 



The <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> has *lexical scope* and *dynamic extent*. 



Once established, a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> may only be exited once, whether by *normal return* or *explicit return*. 

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



<ClLinks styled={true} term={"return"}><b>return</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 















<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> 



