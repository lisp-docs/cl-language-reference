**make-condition** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks> <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> &amp;rest *slot-initializations → condition* 



**Arguments and Values:** 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (for a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>). 



*slot-initializations*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 







 



 



**Description:** 



Constructs and returns a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of type <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> using *slot-initializations* for the initial values of the slots. The newly created <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is returned. 



**Examples:**
```lisp
(defvar \*oops-count\* 0) 
(setq a (make-condition ’simple-error 
			 :format-control "This is your ~:R error." 
			 :format-arguments (list (incf \*oops-count\*)))) 
→ #<SIMPLE-ERROR 32245104> 
(format t "~&~A~%" a) 
▷ This is your first error. 
→ NIL 
(error a) 
▷ Error: This is your first error. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return to Lisp Toplevel. 
▷ Debug> 
```
**Affected By:** 



The set of defined *condition types*. 



**See Also:** 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, Section 9.1 (Condition System Concepts) 



