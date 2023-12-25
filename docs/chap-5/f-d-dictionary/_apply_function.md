**apply** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest *args*<sup>+</sup> → \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a *function designator* . 



*args*—a *spreadable argument list designator* . 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



*Applies* the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to the *args*. 



When the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> receives its arguments via **&amp;rest**, it is permissible (but not required) for the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> the *rest parameter* to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that shares structure with the last argument to <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks>. Because a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can neither detect whether it was called via <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> nor whether (if so) the last argument to <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> was a <ClLinks styled={true} term={"constant"}><i>constant</i></ClLinks>, *conforming programs* must neither rely on the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> structure of a *rest list* to be freshly consed, nor modify that <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> structure. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> in certain circumstances; see Section 5.1.2.5 (APPLY Forms as Places). 

**Examples:**
```lisp
(setq f ’+) → + 
(apply f ’(1 2)) → 3 
(setq f #’-) → #<FUNCTION -> 
(apply f ’(1 2)) → -1 
(apply #’max 3 5 ’(2 7 3)) → 7 
(apply ’cons ’((+ 2 3) 4)) → ((+ 2 3) . 4) 
(apply #’+ ’()) → 0 
(defparameter \*some-list\* ’(a b c)) 
(defun strange-test (&rest x) (eq x \*some-list\*)) 
(apply #’strange-test \*some-list\*) → implementation-dependent 
(defun bad-boy (&rest x) (rplacd x ’y)) 
(bad-boy ’a ’b ’c) has undefined consequences. 
(apply #’bad-boy \*some-list\*) has undefined consequences. 
(defun foo (size &rest keys &key double &allow-other-keys) 
  (let ((v (apply #’make-array size :allow-other-keys t keys))) 
    (if double (concatenate (type-of v) v v) v))) 
(foo 4 :initial-contents ’(a b c d) :double t) 

→ #(A B C D A B C D) 
```
**See Also:** 



<ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks>, <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, Section 3.1 (Evaluation), Section 5.1.2.5 (APPLY Forms as Places) 