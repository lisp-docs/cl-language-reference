**the** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"the"}><b>the</b></ClLinks> *value-type form ! \{result\}*\* 



**Arguments and Values:** 



*value-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"form"}><i>form</i></ClLinks>. These <ClLinks  term={"value"}><i>values</i></ClLinks> must conform to the <ClLinks  term={"type"}><i>type</i></ClLinks> supplied by *value-type*; see below. 



**Description:** 



<b>the</b> specifies that the <i>values</i><sub>1<i>a</i></sub> returned by <i>form</i> are of the <i>types</i> specified by <i>value-type</i>. The consequences are undefined if any <i>result</i> is not of the declared type. 



It is permissible for <ClLinks  term={"form"}><i>form</i></ClLinks> to <ClLinks  term={"yield"}><i>yield</i></ClLinks> a di↵erent number of <ClLinks  term={"value"}><i>values</i></ClLinks> than are specified by *value-type*, provided that the values for which <ClLinks  term={"type"}><i>types</i></ClLinks> are declared are indeed of those <ClLinks  term={"type"}><i>types</i></ClLinks>. Missing values are treated as <ClLinks  term={"nil"}><b>nil</b></ClLinks> for the purposes of checking their <ClLinks  term={"type"}><i>types</i></ClLinks>. 



Regardless of number of <ClLinks  term={"value"}><i>values</i></ClLinks> declared by *value-type*, the number of <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"the"}><b>the</b></ClLinks> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> is the same as the number of <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"form"}><i>form</i></ClLinks>. 



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



The consequences are undefined if the *values yielded* by the <ClLinks  term={"form"}><i>form</i></ClLinks> are not of the <ClLinks  term={"type"}><i>type</i></ClLinks> specified by *value-type*. 



**See Also:** 



<ClLinks  term={"values"}><b>values</b></ClLinks> 



**Notes:** 



The <ClLinks  term={"values"}><b>values</b></ClLinks> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> can be used to indicate the types of <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm>: 



(the (values integer integer) (floor x y)) 



(the (values string t) 



(gethash the-key the-string-table)) 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks  term={"the"}><b>the</b></ClLinks> type declarations. In this case the declaration is transferred to the form that specifies the new value. The resulting <ClLinks  term={"setf"}><b>setf</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is then analyzed. 



