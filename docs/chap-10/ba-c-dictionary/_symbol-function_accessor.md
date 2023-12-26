**symbol-function** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> *symbol → contents* 



**(setf (symbol-function** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>**)** *new-contents***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*contents*— If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is globally defined as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature and identity is returned. If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not globally defined as either a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , and if the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, a *function object* is returned. 



*new-contents*—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> 



**Examples:**
```lisp
(symbol-function ’car) → #<FUNCTION CAR> 
(symbol-function ’twice) is an error ;because TWICE isn’t defined. 
(defun twice (n) (\* n 2)) → TWICE 
(symbol-function ’twice) → #<FUNCTION TWICE> 
(list (twice 3) 
      (funcall (function twice) 3) 
      (funcall (symbol-function ’twice) 3)) 
→ (6 6 6) 
(flet ((twice (x) (list x x))) 
  (list (twice 3) 
	(funcall (function twice) 3) 
	(funcall (symbol-function ’twice) 3))) 
→ ((3 3) (3 3) 6) 
(setf (symbol-function ’twice) #’(lambda (x) (list x x))) 
→ #<FUNCTION anonymous> 
(list (twice 3) 
      (funcall (function twice) 3) 
      (funcall (symbol-function ’twice) 3)) 
→ ((3 3) (3 3) (3 3)) 
(fboundp ’defun) → true 
(symbol-function ’defun) 
→ implementation-dependent 
(functionp (symbol-function ’defun)) 
→ implementation-dependent 
(defun symbol-function-or-nil (symbol) 
  (if (and (fboundp symbol) 
	   (not (macro-function symbol)) 
	   (not (special-operator-p symbol))) 
      (symbol-function symbol) 
      nil)) → SYMBOL-FUNCTION-OR-NIL 
(symbol-function-or-nil ’car) → #<FUNCTION CAR> 
(symbol-function-or-nil ’defun) → NIL 
```
**Affected By:** 



<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



Should signal <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> and an attempt is made to <ClLinks  term={"read"}><i>read</i></ClLinks> its definition. (No such error is signaled on an attempt to <ClLinks  term={"write"}><i>write</i></ClLinks> its definition.) 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> 







 



 



**Notes:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> cannot <ClLinks  term={"access"}><i>access</i></ClLinks> the value of a lexical function name produced by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>; it can <ClLinks  term={"access"}><i>access</i></ClLinks> only the global function value. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to replace a global function definition when the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s function definition does not represent a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . 



(symbol-function <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) *≡* (fdefinition <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) 



However, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> accepts arguments other than just <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



