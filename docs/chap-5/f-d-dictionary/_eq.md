**eq** *Function* 



**Syntax:** 



**eq** *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an *object*. 



*y*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if its *arguments* are the same, identical *object*; otherwise, returns *false*. **Examples:**
```lisp
 

(eq ’a ’b) *→ false* 

(eq ’a ’a) *→ true* 

(eq 3 3) 

*→ true* 

<i><sup>or</sup>→ false</i> 

(eq 3 3.0) *→ false* 

(eq 3.0 3.0) 

*→ true* 

<i><sup>or</sup>→ false</i> 







**eq** 

(eq #c(3 -4) #c(3 -4)) 

*→ true* 

<i><sup>or</sup>→ false</i> 

(eq #c(3 -4.0) #c(3 -4)) *→ false* 

(eq (cons ’a ’b) (cons ’a ’c)) *→ false* 

(eq (cons ’a ’b) (cons ’a ’b)) *→ false* 

(eq ’(a . b) ’(a . b)) 

*→ true* 

<i><sup>or</sup>→ false</i> 

(progn (setq x (cons ’a ’b)) (eq x x)) *→ true* 

(progn (setq x ’(a . b)) (eq x x)) *→ true* 

(eq #\A #\A) 

*→ true* 

<i><sup>or</sup>→ false</i> 

(let ((x "Foo")) (eq x x)) *→ true* 

(eq "Foo" "Foo") 

*→ true* 

<i><sup>or</sup>→ false</i> 

(eq "Foo" (copy-seq "Foo")) *→ false* 

(eq "FOO" "foo") *→ false* 

(eq "string-seq" (copy-seq "string-seq")) *→ false* 

(let ((x 5)) (eq x x)) 

*→ true* 

<i><sup>or</sup>→ false</i> 


```
**See Also:** 



**eql**, **equal**, **equalp**, **=**, Section 3.2 (Compilation) 



**Notes:** 



*Objects* that appear the same when printed are not necessarily **eq** to each other. *Symbols* that print the same usually are **eq** to each other because of the use of the **intern** function. However, *numbers* with the same value need not be **eq**, and two similar *lists* are usually not *identical*. 



An implementation is permitted to make “copies” of *characters* and *numbers* at any time. The effect is that Common Lisp makes no guarantee that **eq** is true even when both its arguments are “the same thing” if that thing is a *character* or *number* . 



Most Common Lisp *operators* use **eql** rather than **eq** to compare objects, or else they default to **eql** and only use **eq** if specifically requested to do so. However, the following *operators* are defined to use **eq** rather than **eql** in a way that cannot be overridden by the *code* which employs them: 



Data and Control 











|<p>**catch getf throw** </p><p>**get remf** </p><p>**get-properties remprop**</p>|

| :- |





**Figure 5–11. Operators that always prefer EQ over EQL** 



