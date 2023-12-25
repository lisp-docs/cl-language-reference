**symbol-function** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> *symbol → contents* 



**(setf (symbol-function** <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>**)** *new-contents***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*contents*— If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is globally defined as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special operator* , an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature and identity is returned. If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not globally defined as either a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special operator* , and if the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, a *function object* is returned. 



*new-contents*—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *function cell*. 







 



 



<ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> 



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



<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Should signal <ClLinks styled={true} term={"undefined-function"}><b>undefined-function</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> and an attempt is made to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> its definition. (No such error is signaled on an attempt to <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> its definition.) 



**See Also:** 



<ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks>, <ClLinks styled={true} term={"fmakunbound"}><b>fmakunbound</b></ClLinks>, <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks styled={true} term={"special-operator-p"}><b>special-operator-p</b></ClLinks> 







 



 



**Notes:** 



<ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> cannot <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the value of a lexical function name produced by <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks> or <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks>; it can <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> only the global function value. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> to replace a global function definition when the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s function definition does not represent a *special operator* . 



(symbol-function <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) *≡* (fdefinition <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) 



However, <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks> accepts arguments other than just <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



