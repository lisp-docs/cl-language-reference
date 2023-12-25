**remprop** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> removes from the *property list* <sub>2</sub> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm><sub>1</sub> with a *property indicator identical* to <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>. If there are multiple *properties*<sub>1</sub> with the <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> key, <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> only removes the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> was found, or <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink>, such that: 



(remprop *x y*) *≡* (remf (symbol-plist *x*) *y*) 



**Examples:**
```lisp

(setq test (make-symbol "PSEUDO-PI")) *→* #:PSEUDO-PI 
(symbol-plist test) *→* () 
(setf (get test ’constant) t) *→* T 
(setf (get test ’approximation) 3.14) *→* 3.14 
(setf (get test ’error-range) ’noticeable) *→* NOTICEABLE 
(symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T) 
(setf (get test ’approximation) nil) *→* NIL 
(symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T) 
(get test ’approximation) *→* NIL 



(remprop test ’approximation) *→ true* 
(get test ’approximation) *→* NIL 
(symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE CONSTANT T) 
(remprop test ’approximation) *→* NIL 
(symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE CONSTANT T) 
(remprop test ’error-range) *→ true* 
(setf (get test ’approximation) 3) *→* 3 
(symbol-plist test) 
*→* (APPROXIMATION 3 CONSTANT T) 

```
**Side Effects:** 



The *property list* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is modified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"number"}><i>Numbers</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are not recommended for use as <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> in portable code since <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> tests with <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Of course, if you’ve gotten as far as needing to remove such a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>, you don’t have much choice—the time to have been thinking about this was when you used <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> to establish the <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. 



