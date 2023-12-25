**constantly** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"constantly"}><b>constantly</b></ClLinks> *value → function* 



**Arguments and Values:** 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"constantly"}><b>constantly</b></ClLinks> returns a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that accepts any number of arguments, that has no side-effects, and that always returns <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



**Examples:**
```lisp
(mapcar (constantly 3) ’(a b c d)) → (3 3 3 3) 
(defmacro with-vars (vars &body forms) 
  ‘((lambda ,vars ,@forms) ,@(mapcar (constantly nil) vars))) 
→ WITH-VARS 
(macroexpand ’(with-vars (a b) (setq a 3 b (\* a a)) (list a b))) 
→ ((LAMBDA (A B) (SETQ A 3 B (\* A A)) (LIST A B)) NIL NIL), *true* 
```
**See Also:** 



<ClLinks styled={true} term={"identity"}><b>identity</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"constantly"}><b>constantly</b></ClLinks> could be defined by: 



(defun constantly (object) 



#’(lambda (&amp;rest arguments) object)) 















**every, some, notevery, notany** 



