**locally** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"locally"}><b>locally</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* *! \{result\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"declaration"}><i>Declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Sequentially evaluates a body of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a *lexical environment* where the given <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> have e↵ect. 



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



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration may be used with <ClLinks styled={true} term={"locally"}><b>locally</b></ClLinks> to a↵ect references to, rather than <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of, <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>. 



If a <ClLinks styled={true} term={"locally"}><b>locally</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *top level form*, the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 







 



 



<ClLinks styled={true} term={"the"}><b>the</b></ClLinks> 



