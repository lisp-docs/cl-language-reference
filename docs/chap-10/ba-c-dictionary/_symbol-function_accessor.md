**symbol-function** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> *symbol → contents* 



**(setf (symbol-function** <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-contents***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*contents*— If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is globally defined as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special operator* , an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature and identity is returned. If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not globally defined as either a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special operator* , and if the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, a *function object* is returned. 



*new-contents*—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *function cell*. 







 



 



<DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> 



**Examples:**
```lisp

(symbol-function ’car) *→* #<FUNCTION CAR> 
(symbol-function ’twice) is an error ;because TWICE isn’t defined. 
(defun twice (n) (\* n 2)) *→* TWICE 
(symbol-function ’twice) *→* #<FUNCTION TWICE> 
(list (twice 3) 
      (funcall (function twice) 3) 
      (funcall (symbol-function ’twice) 3)) 
*→* (6 6 6) 
(flet ((twice (x) (list x x))) 
  (list (twice 3) 
	(funcall (function twice) 3) 
	(funcall (symbol-function ’twice) 3))) 
*→* ((3 3) (3 3) 6) 
(setf (symbol-function ’twice) #’(lambda (x) (list x x))) 
*→* #<FUNCTION anonymous> 
(list (twice 3) 
      (funcall (function twice) 3) 
      (funcall (symbol-function ’twice) 3)) 
*→* ((3 3) (3 3) (3 3)) 
(fboundp ’defun) *→ true* 
(symbol-function ’defun) 
*→ implementation-dependent* 
(functionp (symbol-function ’defun)) 
*→ implementation-dependent* 
(defun symbol-function-or-nil (symbol) 
  (if (and (fboundp symbol) 
	   (not (macro-function symbol)) 
	   (not (special-operator-p symbol))) 
      (symbol-function symbol) 
      nil)) *→* SYMBOL-FUNCTION-OR-NIL 
(symbol-function-or-nil ’car) *→* #<FUNCTION CAR> 
(symbol-function-or-nil ’defun) *→* NIL 

```
**Affected By:** 



<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Should signal <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> and an attempt is made to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> its definition. (No such error is signaled on an attempt to <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> its definition.) 



**See Also:** 



<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> 







 



 



**Notes:** 



<DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> cannot <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the value of a lexical function name produced by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>; it can <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> only the global function value. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to replace a global function definition when the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s function definition does not represent a *special operator* . 



(symbol-function <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) *≡* (fdefinition <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) 



However, <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> accepts arguments other than just <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



