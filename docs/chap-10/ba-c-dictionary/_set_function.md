**set** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"set"}><b>set</b></DictionaryLink> *symbol value → value* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"set"}><b>set</b></DictionaryLink> changes the contents of the *value cell* of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to the given <ClLinks  term={"value"}><i>value</i></ClLinks>. 



(set *symbol value*) *≡* (setf (symbol-value <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) <ClLinks  term={"value"}><i>value</i></ClLinks>) 



**Examples:**
```lisp
(setf (symbol-value ’n) 1) → 1 
(set ’n 2) → 2 
(symbol-value ’n) → 2 
(let ((n 3)) 
  (declare (special n)) 
  (setq n (+ n 1)) 
  (setf (symbol-value ’n) (\* n 10)) 
  (set ’n (+ (symbol-value ’n) n)) 
  n) → 80 
n → 2 
(let ((n 3)) 
  (setq n (+ n 1)) 
  (setf (symbol-value ’n) (\* n 10)) 
  (set ’n (+ (symbol-value ’n) n)) 
  n) → 4 
n → 44 
(defvar \*n\* 2) 
(let ((\*n\* 3)) 
  (setq \*n\* (+ \*n\* 1)) 
  (setf (symbol-value ’\*n\*) (\* \*n\* 10)) 
  (set ’\*n\* (+ (symbol-value ’\*n\*) \*n\*)) 
  \*n\*) → 80 
\*n\* → 2 

(defvar \*even-count\* 0) → \*EVEN-COUNT\* 
(defvar \*odd-count\* 0) → \*ODD-COUNT\* 
(defun tally-list (list) 
  (dolist (element list) 
    (set (if (evenp element) ’\*even-count\* ’\*odd-count\*) 
	 (+ element (if (evenp element) \*even-count\* \*odd-count\*))))) 
(tally-list ’(1 9 4 3 2 7)) → NIL 
\*even-count\* → 6 
\*odd-count\* → 20 
```
**Side Effects:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is changed. 



**See Also:** 



<DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink>, <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> 



**Notes:** 



The function <DictionaryLink  term={"set"}><b>set</b></DictionaryLink> is deprecated. 



<DictionaryLink  term={"set"}><b>set</b></DictionaryLink> cannot change the value of a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm>. 



