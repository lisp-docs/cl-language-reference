**apply** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest *args*<sup>+</sup> *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *function designator* . 



*args*—a *spreadable argument list designator* . 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



*Applies* the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to the *args*. 



When the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> receives its arguments via **&amp;rest**, it is permissible (but not required) for the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> the *rest parameter* to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that shares structure with the last argument to <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>. Because a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can neither detect whether it was called via <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink> nor whether (if so) the last argument to <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink> was a <GlossaryTerm styled={true} term={"constant"}><i>constant</i></GlossaryTerm>, *conforming programs* must neither rely on the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> structure of a *rest list* to be freshly consed, nor modify that <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> structure. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink> in certain circumstances; see Section 5.1.2.5 (APPLY Forms as Places). **Examples:**
```lisp

(setq f ’+) *→* + 
(apply f ’(1 2)) *→* 3 
(setq f #’-) *→* #<FUNCTION -> 
(apply f ’(1 2)) *→* -1 
(apply #’max 3 5 ’(2 7 3)) *→* 7 
(apply ’cons ’((+ 2 3) 4)) *→* ((+ 2 3) . 4) 
(apply #’+ ’()) *→* 0 
(defparameter \*some-list\* ’(a b c)) 
(defun strange-test (&rest x) (eq x \*some-list\*)) 
(apply #’strange-test \*some-list\*) *→ implementation-dependent* 
(defun bad-boy (&rest x) (rplacd x ’y)) 
(bad-boy ’a ’b ’c) has undefined consequences. 
(apply #’bad-boy \*some-list\*) has undefined consequences. 
(defun foo (size &rest keys &key double &allow-other-keys) 
  (let ((v (apply #’make-array size :allow-other-keys t keys))) 
    (if double (concatenate (type-of v) v v) v))) 
(foo 4 :initial-contents ’(a b c d) :double t) 



*→* #(A B C D A B C D) 

```
**See Also:** 



<DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>, <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, Section 3.1 (Evaluation), Section 5.1.2.5 (APPLY Forms as Places) 