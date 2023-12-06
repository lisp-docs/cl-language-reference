**complement** *Function* 



**Syntax:** 



**complement** *function → complement-function* 



**Arguments and Values:** 



*function*—a *function*. 



*complement-function*—a *function*. 



**Description:** 



Returns a *function* that takes the same *arguments* as *function*, and has the same side-effect behavior as *function*, but returns only a single value: a *generalized boolean* with the opposite truth value of that which would be returned as the *primary value* of *function*. That is, when the *function* would have returned *true* as its *primary value* the *complement-function* returns *false*, and when the *function* would have returned *false* as its *primary value* the *complement-function* returns *true*. 



**Examples:**
```lisp
 



(funcall (complement #’zerop) 1) *→ true* 



(funcall (complement #’characterp) #\A) *→ false* 



(funcall (complement #’member) ’a ’(a b c)) *→ false* 



(funcall (complement #’member) ’d ’(a b c)) *→ true* 




```
**See Also:** 



**not** 



**Notes:** 



(complement *x*) *≡* #’(lambda (&amp;rest arguments) (not (apply *x* arguments))) 



In Common Lisp, functions with names like “*xxx*-if-not” are related to functions with names like “*xxx*-if” in that 



(*xxx*-if-not *f* . *arguments*) *≡* (*xxx*-if (complement *f*) . *arguments*) 



For example, 



(find-if-not #’zerop ’(0 0 3)) *≡* 



(find-if (complement #’zerop) ’(0 0 3)) *→* 3 



Data and Control 











Note that since the “*xxx*-if-not” *functions* and the :test-not arguments have been deprecated, uses of “*xxx*-if” *functions* or :test arguments with **complement** are preferred. 



