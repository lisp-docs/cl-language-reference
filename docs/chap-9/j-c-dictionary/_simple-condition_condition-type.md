**simple-condition** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks> represents <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> that are signaled by <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> whenever a *format control* is supplied as the function’s first argument. The *format control* and *format arguments* are initialized with the initialization arguments named :format-control and :format-arguments to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, and are *accessed* by the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> **simple-condition-format-control** and **simple-condition-format-arguments**. If format arguments are not supplied to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is used as a default. 



**See Also:** 



**simple-condition-format-control**, **simple-condition-format-arguments** 







 



 



<b><sup>simple-condition-format-control, simple</sup> condition-format-arguments</b> <i>Function</i> 



**Syntax:** 



**simple-condition-format-control** *condition → format-control* 



**simple-condition-format-arguments** *condition → format-arguments* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>. 



*format-control*—a *format control*. 



*format-arguments*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



**simple-condition-format-control** returns the *format control* needed to process the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>’s *format arguments*. 



**simple-condition-format-arguments** returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *format arguments* needed to process the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>’s *format control*. 



**Examples:**
```lisp

(setq foo (make-condition ’simple-condition 
			   :format-control "Hi ~S" 
			   :format-arguments ’(ho))) 
→ #<SIMPLE-CONDITION 26223553> 
(apply #’format nil (simple-condition-format-control foo) 
	 (simple-condition-format-arguments foo)) 
→ "Hi HO" 

```
**See Also:** 



<ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>, Section 9.1 (Condition System Concepts) 



