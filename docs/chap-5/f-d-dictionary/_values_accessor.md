**values** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"values"}><b>values</b></DictionaryLink> &amp;rest *object ! \{object\}*\* 



**(setf (values** &amp;rest <ClLinks  term={"place"}><i>place</i></ClLinks>**)** *new-values***)** 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



*new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"values"}><b>values</b></DictionaryLink> returns the <ClLinks  term={"object"}><i>objects</i></ClLinks> as <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> is used to store the <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub> *new-values* into the <ClLinks  term={"place"}><i>places</i></ClLinks>. See Section 5.1.2.3 (VALUES Forms as Places). 



**Examples:**
```lisp
(values) *! ⟨no values⟩* 
(values 1) *!* 1 
(values 1 2) *!* 1, 2 
(values 1 2 3) *!* 1, 2, 3 
(values (values 1 2 3) 4 5) *!* 1, 4, 5 
(defun polar (x y) 
  (values (sqrt (+ (\* x x) (\* y y))) (atan y x))) *!* POLAR 
(multiple-value-bind (r theta) (polar 3.0 4.0) 
  (vector r theta)) 
*!* #(5.0 0.927295) 
Sometimes it is desirable to indicate explicitly that a function returns exactly one value. For example, the function 
(defun foo (x y) 
  (floor (+ x y) y)) *!* FOO 
returns two values because **floor** returns two values. It may be that the second value makes no sense, or that for eciency reasons it is desired not to compute the second value. **values** is the standard idiom for indicating that only one value is to be returned: 

(defun foo (x y) 
  (values (floor (+ x y) y))) *!* FOO 
This works because **values** returns exactly one value for each of *args*; as for any function call, if any of *args* produces more than one value, all but the first are discarded. 
```
**See Also:** 



<DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink>, <DictionaryLink  term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Since <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> is a <ClLinks  term={"function"}><i>function</i></ClLinks>, not a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, it receives as <ClLinks  term={"argument"}><i>arguments</i></ClLinks> only the <GlossaryTerm styled={true} term={"primary value"}><i>primary values</i></GlossaryTerm> of its *argument forms*. 



