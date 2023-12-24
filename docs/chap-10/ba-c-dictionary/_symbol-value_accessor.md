**symbol-value** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks> *symbol → value* 



**(setf (symbol-value** <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>**)** *new-value***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, *new-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *value cell*. 



**Examples:**
```lisp

(setf (symbol-value ’a) 1) → 1 
(symbol-value ’a) → 1 
;; SYMBOL-VALUE cannot see lexical variables. 
(let ((a 2)) (symbol-value ’a)) → 1 
(let ((a 2)) (setq a 3) (symbol-value ’a)) → 1 
;; SYMBOL-VALUE can see dynamic variables. 
(let ((a 2)) 
  (declare (special a)) 
  (symbol-value ’a)) → 2 
(let ((a 2)) 
  (declare (special a)) 
  (setq a 3) 
  (symbol-value ’a)) → 3 
(let ((a 2)) 
  (setf (symbol-value ’a) 3) 
  a) → 2 
a → 3 
(symbol-value ’a) → 3 
(let ((a 4)) 
  (declare (special a)) 
  (let ((b (symbol-value ’a))) 
    (setf (symbol-value ’a) 5) 
    (values a b))) → 5, 4 
a → 3 
(symbol-value :any-keyword) → :ANY-KEYWORD 
(symbol-value ’nil) → NIL 
(symbol-value ’()) → NIL 



;; The precision of this next one is *implementation-dependent*. 
(symbol-value ’pi) → 3.141592653589793d0 

```
**Affected By:** 



<ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks>, <ClLinks styled={true} term={"set"}><b>set</b></ClLinks>, <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Should signal <ClLinks styled={true} term={"unbound-variable"}><b>unbound-variable</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks> and an attempt is made to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. (No such error is signaled on an attempt to <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>.) 



**See Also:** 



<ClLinks styled={true} term={"boundp"}><b>boundp</b></ClLinks>, <ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks>, <ClLinks styled={true} term={"set"}><b>set</b></ClLinks>, <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks> can be used to get the value of a *constant variable*. <ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks> cannot <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the value of a *lexical variable*. 



