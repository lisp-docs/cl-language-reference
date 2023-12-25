**values** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> &amp;rest *object ! \{object\}*\* 



**(setf (values** &amp;rest <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>**)** *new-values***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



*new-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> as *multiple values*<sub>2</sub>. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> is used to store the *multiple values*<sub>2</sub> *new-values* into the <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>. See Section 5.1.2.3 (VALUES Forms as Places). 



**Examples:**
```lisp

(values) *! hno valuesi* 
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



<DictionaryLink styled={true} term={"values-list"}><b>values-list</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Since <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, not a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *special form*, it receives as <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> only the *primary values* of its *argument forms*. 



