**the** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> *value-type form ! \{result\}*\* 



**Arguments and Values:** 



*value-type*—a *type specifier* ; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. These <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> must conform to the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> supplied by *value-type*; see below. 



**Description:** 



<b>the</b> specifies that the <i>values</i><sub>1<i>a</i></sub> returned by <i>form</i> are of the <i>types</i> specified by <i>value-type</i>. The consequences are undefined if any <i>result</i> is not of the declared type. 



It is permissible for <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> a di↵erent number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> than are specified by *value-type*, provided that the values for which <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are declared are indeed of those <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. Missing values are treated as <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> for the purposes of checking their <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. 



Regardless of number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> declared by *value-type*, the number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> *special form* is the same as the number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



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



The consequences are undefined if the *values yielded* by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are not of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> specified by *value-type*. 



**See Also:** 



<DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> 



**Notes:** 



The <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> *type specifier* can be used to indicate the types of *multiple values*: 



(the (values integer integer) (floor x y)) 



(the (values string t) 



(gethash the-key the-string-table)) 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> type declarations. In this case the declaration is transferred to the form that specifies the new value. The resulting <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is then analyzed. 



