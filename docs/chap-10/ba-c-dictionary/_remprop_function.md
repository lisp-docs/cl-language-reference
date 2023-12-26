**remprop** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> removes from the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> <sub>2</sub> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> a <ClLinks  term={"property"}><i>property</i></ClLinks><sub>1</sub> with a *property indicator identical* to <ClLinks  term={"indicator"}><i>indicator</i></ClLinks>. If there are multiple *properties*<sub>1</sub> with the <ClLinks  term={"identical"}><i>identical</i></ClLinks> key, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> only removes the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> returns <ClLinks  term={"false"}><i>false</i></ClLinks> if no such <ClLinks  term={"property"}><i>property</i></ClLinks> was found, or <ClLinks  term={"true"}><i>true</i></ClLinks> if a property was found. 



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



The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink> 



**Notes:** 



<ClLinks  term={"number"}><i>Numbers</i></ClLinks> and <ClLinks  term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> in portable code since <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> tests with <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Of course, if you’ve gotten as far as needing to remove such a <ClLinks  term={"property"}><i>property</i></ClLinks>, you don’t have much choice—the time to have been thinking about this was when you used <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> to establish the <ClLinks  term={"property"}><i>property</i></ClLinks>. 



