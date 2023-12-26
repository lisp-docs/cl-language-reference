**symbol-value** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> *symbol → value* 



**(setf (symbol-value** <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>**)** *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. 



<GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, *new-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Should signal <DictionaryLink  term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm> and an attempt is made to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. (No such error is signaled on an attempt to <GlossaryTerm  term={"write"}><i>write</i></GlossaryTerm> its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>.) 



**See Also:** 



<DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink>, <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>, <DictionaryLink  term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> can be used to get the value of a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> cannot <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the value of a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm>. 



