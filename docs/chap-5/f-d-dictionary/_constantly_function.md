**constantly** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"constantly"}><b>constantly</b></DictionaryLink> *value → function* 



**Arguments and Values:** 



<GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"constantly"}><b>constantly</b></DictionaryLink> returns a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that accepts any number of arguments, that has no side-effects, and that always returns <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. 



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



<DictionaryLink  term={"identity"}><b>identity</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"constantly"}><b>constantly</b></DictionaryLink> could be defined by: 



(defun constantly (object) 



#’(lambda (&amp;rest arguments) object)) 















<DictionaryLink styled={true} term={"every, some, notevery, notany"}><b>every, some, notevery, notany</b></DictionaryLink> 



