**symbol-value** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> *symbol → value* 



**(setf (symbol-value** <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that must have a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, *new-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *value cell*. 



**Examples:**
```lisp

(setf (symbol-value ’a) 1) *→* 1 
(symbol-value ’a) *→* 1 
;; SYMBOL-VALUE cannot see lexical variables. 
(let ((a 2)) (symbol-value ’a)) *→* 1 
(let ((a 2)) (setq a 3) (symbol-value ’a)) *→* 1 
;; SYMBOL-VALUE can see dynamic variables. 
(let ((a 2)) 
  (declare (special a)) 
  (symbol-value ’a)) *→* 2 
(let ((a 2)) 
  (declare (special a)) 
  (setq a 3) 
  (symbol-value ’a)) *→* 3 
(let ((a 2)) 
  (setf (symbol-value ’a) 3) 
  a) *→* 2 
a *→* 3 
(symbol-value ’a) *→* 3 
(let ((a 4)) 
  (declare (special a)) 
  (let ((b (symbol-value ’a))) 
    (setf (symbol-value ’a) 5) 
    (values a b))) *→* 5, 4 
a *→* 3 
(symbol-value :any-keyword) *→* :ANY-KEYWORD 
(symbol-value ’nil) *→* NIL 
(symbol-value ’()) *→* NIL 



;; The precision of this next one is *implementation-dependent*. 
(symbol-value ’pi) *→* 3.141592653589793d0 

```
**Affected By:** 



<DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Should signal <DictionaryLink styled={true} term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm> and an attempt is made to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. (No such error is signaled on an attempt to <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>.) 



**See Also:** 



<DictionaryLink styled={true} term={"boundp"}><b>boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> can be used to get the value of a *constant variable*. <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> cannot <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the value of a *lexical variable*. 



