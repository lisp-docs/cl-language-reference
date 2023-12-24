**progv** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks> *symbols values \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"value"}><i>values</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks> creates new dynamic variable <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> and executes each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> using those <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. Each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated in order. 



<ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks> allows <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> one or more dynamic variables whose names may be determined at run time. Each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated in order with the dynamic variables whose names are in <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> bound to corresponding <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. If too few <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are supplied, the remaining <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are bound and then made to have no value. If too many <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are supplied, the excess values are ignored. The <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the dynamic variables are undone on exit from <ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks>. 



**Examples:**
```lisp

(setq \*x\* 1) → 1 
(progv ’(\*x\*) ’(2) \*x\*) → 2 
\*x\* → 1 
Assuming \*x\* is not globally special, 
(let ((\*x\* 3)) 
  (progv ’(\*x\*) ’(4) 
    (list \*x\* (symbol-value ’\*x\*)))) → (3 4) 




```
**See Also:** 



<ClLinks styled={true} term={"let"}><b>let</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



Among other things, <ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks> is useful when writing interpreters for languages embedded in Lisp; it provides a handle on the mechanism for *binding dynamic variables*. 



