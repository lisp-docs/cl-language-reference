**type-error-datum, type-error-expected-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"type-error-datum"}><b>type-error-datum</b></DictionaryLink> *condition → datum* 



<DictionaryLink styled={true} term={"type-error-expected-type"}><b>type-error-expected-type</b></DictionaryLink> *condition → expected-type* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink>. 



*datum*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*expected-type*—a *type specifier* . 



**Description:** 



<DictionaryLink styled={true} term={"type-error-datum"}><b>type-error-datum</b></DictionaryLink> returns the offending datum in the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"type-error-expected-type"}><b>type-error-expected-type</b></DictionaryLink> returns the expected type of the offending datum in the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**Examples:**
```lisp

(defun fix-digits (condition) 
  (check-type condition type-error) 
  (let\* ((digits ’(zero one two three four 
			 five six seven eight nine))  

	  (val (position (type-error-datum condition) digits))) 
	 (if (and val (subtypep ’fixnum (type-error-expected-type condition))) 
	     (store-value 7)))) 
(defun foo (x) 
  (handler-bind ((type-error #’fix-digits)) 
    (check-type x number) 
    (+ x 3))) 
(foo ’seven) 
*→* 10 

```
**See Also:** 



<DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink>, Chapter 9 (Conditions) 



