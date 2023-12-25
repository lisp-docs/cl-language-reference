**multiple-value-call** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> *function-form form*\* *! \{result\}*\* 



**Arguments and Values:** 



*function-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a *function designator* resulting from the evaluation of *function-form*. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Applies <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> collected from groups of *multiple values*<sub>2</sub>. 



<ClLinks styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> first evaluates the *function-form* to obtain <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, and then evaluates each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. All the values of each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are gathered together (not just one value from each) and given as arguments to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Examples:**
```lisp
(multiple-value-call #’list 1 ’/ (values 2 3) ’/ (values) ’/ (floor 2.5)) 
*!* (1 / 2 3 / / 2 0.5) 
(+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 4) 
*!* 5 
(multiple-value-call #’+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 2 4 3) 
*!* 10 
```
**See Also:** 



<ClLinks styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> 



