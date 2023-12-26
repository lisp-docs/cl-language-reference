**return-from** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> <ClLinks  term={"name"}><i>name</i></ClLinks> [*result*] → 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"block tag"}><i>block tag</i></GlossaryTerm>; not evaluated. 



*result*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns control and <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub> from a lexically enclosing <ClLinks  term={"block"}><i>block</i></ClLinks>. 



A <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> named <ClLinks  term={"name"}><i>name</i></ClLinks> must lexically enclose the occurrence of <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>; any *values yielded* by the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of *result* are immediately returned from the innermost such lexically enclosing <ClLinks  term={"block"}><i>block</i></ClLinks>. 



The transfer of control initiated by <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp
(block alpha (return-from alpha) 1) → NIL 
(block alpha (return-from alpha 1) 2) → 1 
(block alpha (return-from alpha (values 1 2)) 3) → 1, 2 
(let ((a 0)) 
  (dotimes (i 10) (incf a) (when (oddp i) (return))) 
  a) → 2 
Data and Control 

**return-from** 
(defun temp (x) 
  (if x (return-from temp ’dummy)) 
  \44) → TEMP 
(temp nil) → 44 
(temp t) → DUMMY 
(block out 
  (flet ((exit (n) (return-from out n))) 
    (block out (exit 1))) 
  \2) → 1 
(block nil 
  (unwind-protect (return-from nil 1) 
    (return-from nil 2))) 
→ 2 
(dolist (flag ’(nil t)) 
  (block nil 
    (let ((x 5)) 
      (declare (special x)) 
      (unwind-protect (return-from nil) 
	(print x)))) 
  (print ’here)) 
▷ 5 
▷ HERE 
▷ 5 
▷ HERE 
→ NIL 
(dolist (flag ’(nil t)) 
  (block nil 
    (let ((x 5)) 
      (declare (special x)) 
      (unwind-protect 
	   (if flag (return-from nil)) 
	(print x)))) 
  (print ’here)) 
▷ 5 
▷ HERE 
▷ 5 
▷ HERE 
→ NIL 
The following has undefined consequences because the **block** *form* exits normally before the **return-from** *form* is attempted. 
(funcall (block nil #’(lambda () (return-from nil)))) is an error. 


```
**See Also:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink  term={"return"}><b>return</b></DictionaryLink>, Section 3.1 (Evaluation) 



