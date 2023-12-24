**the** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"the"}><b>the</b></ClLinks> *value-type form ! \{result\}*\* 



**Arguments and Values:** 



*value-type*—a *type specifier* ; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. These <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> must conform to the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> supplied by *value-type*; see below. 



**Description:** 



<b>the</b> specifies that the <i>values</i><sub>1<i>a</i></sub> returned by <i>form</i> are of the <i>types</i> specified by <i>value-type</i>. The consequences are undefined if any <i>result</i> is not of the declared type. 



It is permissible for <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> a di↵erent number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> than are specified by *value-type*, provided that the values for which <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are declared are indeed of those <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. Missing values are treated as <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> for the purposes of checking their <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



Regardless of number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> declared by *value-type*, the number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"the"}><b>the</b></ClLinks> *special form* is the same as the number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Examples:**
```lisp

(the symbol (car (list (gensym)))) *!* #:G9876 
(the fixnum (+ 5 7)) *!* 12 
(the (values) (truncate 3.2 2)) *!* 1, 1.2 
(the integer (truncate 3.2 2)) *!* 1, 1.2 
(the (values integer) (truncate 3.2 2)) *!* 1, 1.2 
(the (values integer float) (truncate 3.2 2)) *!* 1, 1.2 
(the (values integer float symbol) (truncate 3.2 2)) *!* 1, 1.2 
(the (values integer float symbol t null list) 
     (truncate 3.2 2)) *!* 1, 1.2 
(let ((i 100)) 
  (declare (fixnum i)) 
  (the fixnum (1+ i))) *!* 101 
(let\* ((x (list ’a ’b ’c)) 
	(y 5)) 
       (setf (the fixnum (car x)) y) 
       x) *!* (5 B C) 
Evaluation and 



```
**Exceptional Situations:** 



The consequences are undefined if the *values yielded* by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are not of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> specified by *value-type*. 



**See Also:** 



<ClLinks styled={true} term={"values"}><b>values</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> *type specifier* can be used to indicate the types of *multiple values*: 



(the (values integer integer) (floor x y)) 



(the (values string t) 



(gethash the-key the-string-table)) 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks styled={true} term={"the"}><b>the</b></ClLinks> type declarations. In this case the declaration is transferred to the form that specifies the new value. The resulting <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is then analyzed. 



