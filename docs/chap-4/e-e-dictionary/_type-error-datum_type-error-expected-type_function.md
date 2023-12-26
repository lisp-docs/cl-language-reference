**type-error-datum, type-error-expected-type** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"type-error-datum"}><b>type-error-datum</b></DictionaryLink> *condition → datum* 



<DictionaryLink  term={"type-error-expected-type"}><b>type-error-expected-type</b></DictionaryLink> *condition → expected-type* 



**Arguments and Values:** 



<GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink>. 



*datum*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*expected-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"type-error-datum"}><b>type-error-datum</b></DictionaryLink> returns the offending datum in the <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>. 



<DictionaryLink  term={"type-error-expected-type"}><b>type-error-expected-type</b></DictionaryLink> returns the expected type of the offending datum in the <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>. 



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
→ 10 
```
**See Also:** 



<DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink>, Chapter 9 (Conditions) 



