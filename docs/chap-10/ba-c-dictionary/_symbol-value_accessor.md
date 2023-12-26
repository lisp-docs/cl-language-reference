**symbol-value** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> *symbol → value* 



**(setf (symbol-value** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>**)** *new-value***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that must have a <ClLinks  term={"value"}><i>value</i></ClLinks>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>, *new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm>. 



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



<DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>, <DictionaryLink  term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



Should signal <DictionaryLink  term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> and an attempt is made to <ClLinks  term={"read"}><i>read</i></ClLinks> its <ClLinks  term={"value"}><i>value</i></ClLinks>. (No such error is signaled on an attempt to <ClLinks  term={"write"}><i>write</i></ClLinks> its <ClLinks  term={"value"}><i>value</i></ClLinks>.) 



**See Also:** 



<DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink>, <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>, <DictionaryLink  term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> can be used to get the value of a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> cannot <ClLinks  term={"access"}><i>access</i></ClLinks> the value of a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm>. 



