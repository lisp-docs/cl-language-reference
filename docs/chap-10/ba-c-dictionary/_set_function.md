**set** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink> *symbol value → value* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink> changes the contents of the *value cell* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to the given <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



(set *symbol value*) *≡* (setf (symbol-value <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>) 



**Examples:**
```lisp

(setf (symbol-value ’n) 1) *→* 1 
(set ’n 2) *→* 2 
(symbol-value ’n) *→* 2 
(let ((n 3)) 
  (declare (special n)) 
  (setq n (+ n 1)) 
  (setf (symbol-value ’n) (\* n 10)) 
  (set ’n (+ (symbol-value ’n) n)) 
  n) *→* 80 
n *→* 2 
(let ((n 3)) 
  (setq n (+ n 1)) 
  (setf (symbol-value ’n) (\* n 10)) 
  (set ’n (+ (symbol-value ’n) n)) 
  n) *→* 4 
n *→* 44 
(defvar \*n\* 2) 
(let ((\*n\* 3)) 
  (setq \*n\* (+ \*n\* 1)) 
  (setf (symbol-value ’\*n\*) (\* \*n\* 10)) 
  (set ’\*n\* (+ (symbol-value ’\*n\*) \*n\*)) 
  \*n\*) *→* 80 
\*n\* *→* 2 



(defvar \*even-count\* 0) *→* \*EVEN-COUNT\* 
(defvar \*odd-count\* 0) *→* \*ODD-COUNT\* 
(defun tally-list (list) 
  (dolist (element list) 
    (set (if (evenp element) ’\*even-count\* ’\*odd-count\*) 
	 (+ element (if (evenp element) \*even-count\* \*odd-count\*))))) 
(tally-list ’(1 9 4 3 2 7)) *→* NIL 
\*even-count\* *→* 6 
\*odd-count\* *→* 20 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is changed. 



**See Also:** 



<DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> 



**Notes:** 



The function <DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink> is deprecated. 



<DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink> cannot change the value of a *lexical variable*. 



