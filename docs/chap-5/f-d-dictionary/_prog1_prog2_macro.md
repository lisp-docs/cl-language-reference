**prog1, prog2** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"prog1"}><b>prog1</b></DictionaryLink> *first-form \{form\}*\* *! result-1* 



<DictionaryLink styled={true} term={"prog2"}><b>prog2</b></DictionaryLink> *first-form second-form \{form\}*\* *! result-2* 



**Arguments and Values:** 



*first-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*second-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*; evaluated as described below. 



*result-1*—the *primary value* resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *first-form*. 



Data and Control 



 



 



**prog1, prog2** 



*result-2*—the *primary value* resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *second-form*. 



**Description:** 



<DictionaryLink styled={true} term={"prog1"}><b>prog1</b></DictionaryLink> *evaluates first-form* and then <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, *yielding* as its only <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> the *primary value yielded* by *first-form*. 



<DictionaryLink styled={true} term={"prog2"}><b>prog2</b></DictionaryLink> *evaluates first-form*, then *second-form*, and then <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, *yielding* as its only <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> the *primary value yielded* by *first-form*. 



**Examples:**
```lisp

(setq temp 1) *!* 1 
(prog1 temp (print temp) (incf temp) (print temp)) 
▷ 1 
▷ 2 
*!* 1 
(prog1 temp (setq temp nil)) *!* 2 
temp *!* NIL 
(prog1 (values 1 2 3) 4) *!* 1 
(setq temp (list ’a ’b ’c)) 
(prog1 (car temp) (setf (car temp) ’alpha)) *!* A 
temp *!* (ALPHA B C) 
(flet ((swap-symbol-values (x y) 
	 (setf (symbol-value x) 
	       (prog1 (symbol-value y) 
		 (setf (symbol-value y) (symbol-value x)))))) 
  (let ((\*foo\* 1) (\*bar\* 2)) 
    (declare (special \*foo\* \*bar\*)) 
    (swap-symbol-values ’\*foo\* ’\*bar\*) 
    (values \*foo\* \*bar\*))) 
*!* 2, 1 
(setq temp 1) *!* 1 
(prog2 (incf temp) (incf temp) (incf temp)) *!* 3 
temp *!* 4 
(prog2 1 (values 2 3 4) 5) *!* 2 

```
**See Also:** 



<DictionaryLink styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink>, <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"prog1"}><b>prog1</b></DictionaryLink> and <DictionaryLink styled={true} term={"prog2"}><b>prog2</b></DictionaryLink> are typically used to <GlossaryTerm styled={true} term={"evaluate"}><i>evaluate</i></GlossaryTerm> one or more <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> with side e↵ects and return a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> that must be computed before some or all of the side e↵ects happen. 



(prog1 <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) *⌘* (values (multiple-value-prog1 <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*)) 



(prog2 *form1 \{form\}*\*) *⌘* (let () *form1* (prog1 <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*)) 







 



 



