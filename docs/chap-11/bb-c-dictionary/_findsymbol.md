**find-symbol** *Function* 



**Syntax:** 



**find-symbol** *string* &optional *package → symbol, status* 



**Arguments and Values:** 



*string*—a *string*. 



*package*—a *package designator* . The default is the *current package*. 



*symbol*—a *symbol* accessible in the *package*, or **nil**. 



*status*—one of :inherited, :external, :internal, or **nil**. 







 



 



**find-symbol** 



**Description:** 



**find-symbol** locates a *symbol* whose *name* is *string* in a *package*. If a *symbol* named *string* is found in *package*, directly or by inheritance, the *symbol* found is returned as the first value; the second value is as follows: 



:internal 



If the *symbol* is *present* in *package* as an *internal symbol*. 



:external 



If the *symbol* is *present* in *package* as an *external symbol*. 



:inherited 



If the *symbol* is inherited by *package* through **use-package**, but is not *present* in *package*. If no such *symbol* is *accessible* in *package*, both values are **nil**. 



**Examples:**
```lisp
 



(find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL 



(find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL 



(intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, NIL 



(intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL 



(find-symbol "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL 



(find-symbol "never-before-used") *→* NIL, NIL 



(find-symbol "CAR" ’common-lisp-user) *→* CAR, :INHERITED 



(find-symbol "CAR" ’common-lisp) *→* CAR, :EXTERNAL 



(find-symbol "NIL" ’common-lisp-user) *→* NIL, :INHERITED 



(find-symbol "NIL" ’common-lisp) *→* NIL, :EXTERNAL 



(find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use ’()) 



(intern "NIL" "JUST-TESTING"))) 



*→* JUST-TESTING::NIL, :INTERNAL 



(export ’just-testing::nil ’just-testing) 



(find-symbol "NIL" ’just-testing) *→* JUST-TESTING:NIL, :EXTERNAL 



(find-symbol "NIL" "KEYWORD") 



*→* NIL, NIL 



<i><sup>or</sup>→</i> :NIL, :EXTERNAL 



(find-symbol (symbol-name :nil) "KEYWORD") *→* :NIL, :EXTERNAL 




```
**Affected By:** 



**intern**, **import**, **export**, **use-package**, **unintern**, **unexport**, **unuse-package** 



**See Also:** 



**intern**, **find-all-symbols** 







 



 



**Notes:** 



