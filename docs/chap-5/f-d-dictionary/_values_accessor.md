**values** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"values"}><b>values</b></ClLinks> &amp;rest *object ! \{object\}*\* 



**(setf (values** &amp;rest <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>**)** *new-values***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



*new-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"values"}><b>values</b></ClLinks> returns the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> as *multiple values*<sub>2</sub>. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> is used to store the *multiple values*<sub>2</sub> *new-values* into the <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>. See Section 5.1.2.3 (VALUES Forms as Places). 



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



<ClLinks styled={true} term={"values-list"}><b>values-list</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks>, <ClLinks styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



Since <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, not a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *special form*, it receives as <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> only the *primary values* of its *argument forms*. 



