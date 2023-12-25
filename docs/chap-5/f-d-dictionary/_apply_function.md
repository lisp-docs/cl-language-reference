**apply** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink> <ClLinks  term={"function"}><i>function</i></ClLinks> &amp;rest *args*<sup>+</sup> → \{result\}\*

**Arguments and Values:**

<ClLinks  term={"function"}><i>function</i></ClLinks>—a *function designator* .

*args*—a *spreadable argument list designator* .

*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"function"}><i>function</i></ClLinks>.

**Description:**

*Applies* the <ClLinks  term={"function"}><i>function</i></ClLinks> to the *args*.

When the <ClLinks  term={"function"}><i>function</i></ClLinks> receives its arguments via **&amp;rest**, it is permissible (but not required) for the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to <ClLinks  term={"bind"}><i>bind</i></ClLinks> the *rest parameter* to an <ClLinks  term={"object"}><i>object</i></ClLinks> that shares structure with the last argument to <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>. Because a <ClLinks  term={"function"}><i>function</i></ClLinks> can neither detect whether it was called via <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink> nor whether (if so) the last argument to <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink> was a <ClLinks  term={"constant"}><i>constant</i></ClLinks>, *conforming programs* must neither rely on the <ClLinks  term={"list"}><i>list</i></ClLinks> structure of a *rest list* to be freshly consed, nor modify that <ClLinks  term={"list"}><i>list</i></ClLinks> structure.

<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink> in certain circumstances; see Section 5.1.2.5 (APPLY Forms as Places).

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

<DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, Section 3.1 (Evaluation), Section 5.1.2.5 (APPLY Forms as Places)
