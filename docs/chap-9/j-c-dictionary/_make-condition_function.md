**make-condition** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink> <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> &amp;rest *slot-initializations → condition* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *type specifier* (for a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>). 



*slot-initializations*—an *initialization argument list*. 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 







 



 



**Description:** 



Constructs and returns a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of type <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> using *slot-initializations* for the initial values of the slots. The newly created <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is returned. 



**Examples:**
```lisp

(defvar \*oops-count\* 0) 
(setq a (make-condition ’simple-error 
			 :format-control "This is your ~:R error." 
			 :format-arguments (list (incf \*oops-count\*)))) 
*→* #<SIMPLE-ERROR 32245104> 
(format t "~&~A~%" a) 
▷ This is your first error. 
*→* NIL 
(error a) 
▷ Error: This is your first error. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return to Lisp Toplevel. 
▷ Debug> 

```
**Affected By:** 



The set of defined *condition types*. 



**See Also:** 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 



