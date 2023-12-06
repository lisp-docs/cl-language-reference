**constantly** *Function* 



**Syntax:** 



**constantly** *value → function* 



**Arguments and Values:** 



*value*—an *object*. 



*function*—a *function*. 



**Description:** 



**constantly** returns a *function* that accepts any number of arguments, that has no side-effects, and that always returns *value*. 



**Examples:**
```lisp
 

(mapcar (constantly 3) ’(a b c d)) *→* (3 3 3 3) 

(defmacro with-vars (vars &amp;body forms) 

‘((lambda ,vars ,@forms) ,@(mapcar (constantly nil) vars))) 

*→* WITH-VARS 

(macroexpand ’(with-vars (a b) (setq a 3 b (\* a a)) (list a b))) 

*→* ((LAMBDA (A B) (SETQ A 3 B (\* A A)) (LIST A B)) NIL NIL), *true* 


```
**See Also:** 



**identity** 



**Notes:** 



**constantly** could be defined by: 



(defun constantly (object) 



#’(lambda (&amp;rest arguments) object)) 















**every, some, notevery, notany** 



