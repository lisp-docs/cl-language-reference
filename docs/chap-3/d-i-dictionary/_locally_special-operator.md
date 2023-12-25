**locally** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"locally"}><b>locally</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *! \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"declaration"}><i>Declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Sequentially evaluates a body of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a *lexical environment* where the given <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> have e↵ect. 



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



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> 



**Notes:** 



The <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declaration may be used with <DictionaryLink styled={true} term={"locally"}><b>locally</b></DictionaryLink> to a↵ect references to, rather than <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of, <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>. 



If a <DictionaryLink styled={true} term={"locally"}><b>locally</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *top level form*, the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 







 



 



<DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> 



