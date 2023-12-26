**locally** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"locally"}><b>locally</b></DictionaryLink> <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* *! \{result\}*\* 



**Arguments and Values:** 



<ClLinks  term={"declaration"}><i>Declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Sequentially evaluates a body of <ClLinks  term={"form"}><i>forms</i></ClLinks> in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> where the given <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> have e↵ect. 



**Examples:**
```lisp
(defun sample-function (y) ;this y is regarded as special 
  (declare (special y)) 
  Evaluation and 
  
  
  (let ((y t)) ;this y is regarded as lexical 
    (list y 
	  (locally (declare (special y)) 
	    ;; this next y is regarded as special 
	    y)))) 
*!* SAMPLE-FUNCTION 
(sample-function nil) *!* (T NIL) 
(setq x ’(1 2 3) y ’(4 . 5)) *!* (4 . 5) 
;;; The following declarations are not notably useful in specific. 
;;; They just offer a sample of valid declaration syntax using LOCALLY. 
(locally (declare (inline floor) (notinline car cdr)) 
  (declare (optimize space)) 
  (floor (car x) (cdr y))) *!* 0, 1 
;;; This example shows a definition of a function that has a particular set 
;;; of OPTIMIZE settings made locally to that definition. 
(locally (declare (optimize (safety 3) (space 3) (speed 0))) 
  (defun frob (w x y &optional (z (foo x y))) 
    (mumble x y z w))) 
*!* FROB 
;;; This is like the previous example, except that the optimize settings 
;;; remain in effect for subsequent definitions in the same compilation unit. (declaim (optimize (safety 3) (space 3) (speed 0))) 
(defun frob (w x y &optional (z (foo x y))) 
  (mumble x y z w)) 
*!* FROB 
```
**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> 



**Notes:** 



The <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration may be used with <DictionaryLink  term={"locally"}><b>locally</b></DictionaryLink> to a↵ect references to, rather than <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of, <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



If a <DictionaryLink  term={"locally"}><b>locally</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the body <ClLinks  term={"form"}><i>forms</i></ClLinks> are also processed as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. See Section 3.2.3 (File Compilation). 







 



 



<DictionaryLink  term={"the"}><b>the</b></DictionaryLink> 



