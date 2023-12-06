**typecase, ctypecase, etypecase** *Macro* 



**Syntax:** 



**typecase** *keyform \{↓normal-clause\}*\* [*↓otherwise-clause*] *→ \{result\}*\* 



**ctypecase** *keyplace \{↓normal-clause\}*\* *→ \{result\}*\* 















**typecase, ctypecase, etypecase** 



**etypecase** *keyform \{↓normal-clause\}*\* *→ \{result\}*\* 



*normal-clause::*=(*type \{form\}*\*) 



*otherwise-clause::*=(*\{otherwise | t\} \{form\}*\*) 



*clause::*=*normal-clause | otherwise-clause* 



**Arguments and Values:** 



*keyform*—a *form*; evaluated to produce a *test-key*. 



*keyplace*—a *form*; evaluated initially to produce a *test-key*. Possibly also used later as a *place* if no *types* match. 



*test-key*—an object produced by evaluating *keyform* or *keyplace*. 



*type*—a *type specifier* . 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms* in the matching *clause*. 



**Description:** 



These *macros* allow the conditional execution of a body of *forms* in a *clause* that is selected by matching the *test-key* on the basis of its *type*. 



The *keyform* or *keyplace* is *evaluated* to produce the *test-key*. 



Each of the *normal-clauses* is then considered in turn. If the *test-key* is of the *type* given by the *clauses*’s *type*, the *forms* in that *clause* are *evaluated* as an *implicit progn*, and the *values* it returns are returned as the value of the **typecase**, **ctypecase**, or **etypecase** *form*. 



These *macros* differ only in their *behavior* when no *normal-clause* matches; specifically: 



**typecase** 



If no *normal-clause* matches, and there is an *otherwise-clause*, then that *otherwise-clause* automatically matches; the *forms* in that *clause* are *evaluated* as an *implicit progn*, and the *values* it returns are returned as the value of the **typecase**. 



If there is no *otherwise-clause*, **typecase** returns **nil**. 



**ctypecase** 



If no *normal-clause* matches, a *correctable error* of *type* **type-error** is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (or *type1 type2* ...). The **store-value** *restart* can be used to correct the error. 



If the **store-value** *restart* is invoked, its *argument* becomes the new *test-key*, and is stored Data and Control 











**typecase, ctypecase, etypecase** 



in *keyplace* as if by (setf *keyplace test-key*). Then **ctypecase** starts over, considering each *clause* anew. 



If the **store-value** *restart* is invoked interactively, the user is prompted for a new *test-key* to use. 



The subforms of *keyplace* might be evaluated again if none of the cases holds. 



**etypecase** 



If no *normal-clause* matches, a *non-correctable error* of *type* **type-error** is signaled. The offending datum is the *test-key* and the expected type is *type equivalent* to (or *type1 type2* ...). 



Note that in contrast with **ctypecase**, the caller of **etypecase** may rely on the fact that **etypecase** does not return if a *normal-clause* does not match. 



In all three cases, is permissible for more than one *clause* to specify a matching *type*, particularly if one is a *subtype* of another; the earliest applicable *clause* is chosen. 



**Examples:**
```lisp
 



;;; (Note that the parts of this example which use TYPE-OF 



;;; are implementation-dependent.) 



(defun what-is-it (x) 



(format t "&#126;&amp;&#126;S is &#126;A.&#126;%" 



x (typecase x 



(float "a float") 



(null "a symbol, boolean false, or the empty list") 



(list "a list") 



(t (format nil "a(n) &#126;(&#126;A&#126;)" (type-of x)))))) 



*→* WHAT-IS-IT 



(map ’nil #’what-is-it ’(nil (a b) 7.0 7 box)) 



▷ NIL is a symbol, boolean false, or the empty list. 



▷ (A B) is a list. 



▷ 7.0 is a float. 



▷ 7 is a(n) integer. 



▷ BOX is a(n) symbol. 



*→* NIL 



(setq x 1/3) 



*→* 1/3 



(ctypecase x 



(integer (\* x 4)) 



(symbol (symbol-value x))) 



▷ Error: The value of X, 1/3, is neither an integer nor a symbol. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 







 



 



▷ 2: Return to Lisp Toplevel. 



▷ Debug&gt; :CONTINUE 1 



▷ Use value: 3.7 



▷ Error: The value of X, 3.7, is neither an integer nor a symbol. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 



▷ 2: Return to Lisp Toplevel. 



▷ Debug&gt; :CONTINUE 1 



▷ Use value: 12 



*!* 48 



x *!* 12 




```
**Aected By:** 



**ctypecase** and **etypecase**, since they might signal an error, are potentially a↵ected by existing *handlers* and **\*debug-io\***. 



**Exceptional Situations:** 



**ctypecase** and **etypecase** signal an error of *type* **type-error** if no *normal-clause* matches. 



The *compiler* may choose to issue a warning of *type* **style-warning** if a *clause* will never be selected because it is completely shadowed by earlier clauses. 



**See Also:** 



**case**, **cond**, **setf**, Section 5.1 (Generalized Reference) 



**Notes:** 



(typecase *test-key* 



*\{*(*type \{form\}*\*)*\}*\*) 



*⌘* 



(let ((#1=#:g0001 *test-key*)) 



(cond *\{*((typep #1# ’*type*) *\{form\}*\*)*\}*\*)) 



The specific error message used by **etypecase** and **ctypecase** can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use **typecase** with an *otherwise-clause* that explicitly signals an error with an appropriate message. 



