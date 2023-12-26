**symbol-function** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> *symbol → contents* 



**(setf (symbol-function** <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-contents***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*contents*— If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is globally defined as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature and identity is returned. If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not globally defined as either a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , and if the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, a *function object* is returned. 



*new-contents*—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>. 







 



 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Should signal <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> and an attempt is made to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> its definition. (No such error is signaled on an attempt to <GlossaryTerm  term={"write"}><i>write</i></GlossaryTerm> its definition.) 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> 







 



 



**Notes:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> cannot <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the value of a lexical function name produced by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>; it can <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> only the global function value. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to replace a global function definition when the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s function definition does not represent a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . 



(symbol-function <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) *≡* (fdefinition <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) 



However, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> accepts arguments other than just <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



