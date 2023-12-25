**remprop** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> removes from the *property list* <sub>2</sub> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks><sub>1</sub> with a *property indicator identical* to <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>. If there are multiple *properties*<sub>1</sub> with the <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> key, <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> only removes the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if no such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> was found, or <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks>, such that: 



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



The *property list* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks>, <ClLinks styled={true} term={"symbol-plist"}><b>symbol-plist</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"number"}><i>Numbers</i></ClLinks> and <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> in portable code since <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> tests with <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, and consequently the effect of using such <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Of course, if you’ve gotten as far as needing to remove such a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>, you don’t have much choice—the time to have been thinking about this was when you used <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> to establish the <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. 



