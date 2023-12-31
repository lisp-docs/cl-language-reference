**remprop** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> removes from the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> <sub>2</sub> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> a <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm><sub>1</sub> with a *property indicator identical* to <GlossaryTerm  term={"indicator"}><i>indicator</i></GlossaryTerm>. If there are multiple *properties*<sub>1</sub> with the <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> key, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> only removes the first such <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm>. <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if no such <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm> was found, or <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if a property was found. 



The <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> and the corresponding <GlossaryTerm styled={true} term={"property value"}><i>property value</i></GlossaryTerm> are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for <DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, such that: 



(remprop *x y*) *≡* (remf (symbol-plist *x*) *y*) 



**Examples:**
```lisp
(setq test (make-symbol "PSEUDO-PI")) → #:PSEUDO-PI 
(symbol-plist test) → () 
(setf (get test ’constant) t) → T 
(setf (get test ’approximation) 3.14) → 3.14 
(setf (get test ’error-range) ’noticeable) → NOTICEABLE 
(symbol-plist test) 
→ (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T) 
(setf (get test ’approximation) nil) → NIL 
(symbol-plist test) 
→ (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T) 
(get test ’approximation) → NIL 

(remprop test ’approximation) → true 
(get test ’approximation) → NIL 
(symbol-plist test) 
→ (ERROR-RANGE NOTICEABLE CONSTANT T) 
(remprop test ’approximation) → NIL 
(symbol-plist test) 
→ (ERROR-RANGE NOTICEABLE CONSTANT T) 
(remprop test ’error-range) → true 
(setf (get test ’approximation) 3) → 3 
(symbol-plist test) 
→ (APPROXIMATION 3 CONSTANT T) 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is modified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm  term={"number"}><i>Numbers</i></GlossaryTerm> and <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are not recommended for use as <GlossaryTerm  term={"indicator"}><i>indicators</i></GlossaryTerm> in portable code since <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> tests with <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <GlossaryTerm  term={"indicator"}><i>indicators</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Of course, if you’ve gotten as far as needing to remove such a <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm>, you don’t have much choice—the time to have been thinking about this was when you used <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> to establish the <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm>. 



