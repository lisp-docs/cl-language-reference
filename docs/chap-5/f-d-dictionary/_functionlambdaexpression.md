**function-lambda-expression** *Function* 



**Syntax:** 



**function-lambda-expression** *function* 



*→ lambda-expression, closure-p, name* 



**Arguments and Values:** 



*function*—a *function*. 



*lambda-expression*—a *lambda expression* or **nil**. 



*closure-p*—a *generalized boolean*. 



*name*—an *object*. 



**Description:** 



Returns information about *function* as follows: 



The *primary value*, *lambda-expression*, is *function*’s defining *lambda expression*, or **nil** if the information is not available. The *lambda expression* may have been pre-processed in some ways, but it should remain a suitable argument to **compile** or **function**. Any *implementation* may legitimately return **nil** as the *lambda-expression* of any *function*. 



The *secondary value*, *closure-p*, is **nil** if *function*’s definition was enclosed in the *null lexical environment* or something *non-nil* if *function*’s definition might have been enclosed in some *non-null lexical environment*. Any *implementation* may legitimately return *true* as the *closure-p* of any *function*. 



The *tertiary value*, *name*, is the “name” of *function*. The name is intended for debugging only and is not necessarily one that would be valid for use as a name in **defun** or **function**, for example. By convention, **nil** is used to mean that *function* has no name. Any *implementation* may legitimately return **nil** as the *name* of any *function*. 



**Examples:**
```lisp
 



The following examples illustrate some possible return values, but are not intended to be exhaustive: 



(function-lambda-expression #’(lambda (x) x)) 



*→* NIL, *false*, NIL 



<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 















(function-lambda-expression 



(funcall #’(lambda () #’(lambda (x) x)))) 



*→* NIL, *false*, NIL 



<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 



(function-lambda-expression 



(funcall #’(lambda (x) #’(lambda () x)) nil)) 



*→* NIL, *true*, NIL 



<i><sup>or</sup>→</i> (LAMBDA () X), <i>true</i>, NIL 



<i><sup>not</sup> →</i> NIL, <i>false</i>, NIL 



<i><sup>not</sup> →</i> (LAMBDA () X), <i>false</i>, NIL 



(flet ((foo (x) x)) 



(setf (symbol-function ’bar) #’foo) 



(function-lambda-expression #’bar)) 



*→* NIL, *false*, NIL 



<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>false</i>, FOO 



<i><sup>or</sup>→</i> (SI::BLOCK-LAMBDA FOO (X) X), <i>false</i>, FOO 



(defun foo () 



(flet ((bar (x) x)) 



#’bar)) 



(function-lambda-expression (foo)) 



*→* NIL, *false*, NIL 



<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, NIL 



<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, (:INTERNAL FOO 0 BAR) 



<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>false</i>, "BAR in FOO" 




```
**Notes:** 



Although *implementations* are free to return “**nil**, *true*, **nil**” in all cases, they are encouraged to return a *lambda expression* as the *primary value* in the case where the argument was created by a call to **compile** or **eval** (as opposed to being created by *loading* a *compiled file*). 



Data and Control 











