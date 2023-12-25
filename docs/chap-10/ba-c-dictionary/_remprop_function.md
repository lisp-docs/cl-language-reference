**remprop** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"remprop"}><b>remprop</b></ClLinks> *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks  term={"remprop"}><b>remprop</b></ClLinks> removes from the *property list* <sub>2</sub> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> a <ClLinks  term={"property"}><i>property</i></ClLinks><sub>1</sub> with a *property indicator identical* to <ClLinks  term={"indicator"}><i>indicator</i></ClLinks>. If there are multiple *properties*<sub>1</sub> with the <ClLinks  term={"identical"}><i>identical</i></ClLinks> key, <ClLinks  term={"remprop"}><b>remprop</b></ClLinks> only removes the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. <ClLinks  term={"remprop"}><b>remprop</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks> if no such <ClLinks  term={"property"}><i>property</i></ClLinks> was found, or <ClLinks  term={"true"}><i>true</i></ClLinks> if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for <ClLinks  term={"remf"}><b>remf</b></ClLinks>, such that: 



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



The *property list* of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"remf"}><b>remf</b></ClLinks>, <ClLinks  term={"symbol-plist"}><b>symbol-plist</b></ClLinks> 



**Notes:** 



<ClLinks  term={"number"}><i>Numbers</i></ClLinks> and <ClLinks  term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> in portable code since <ClLinks  term={"remprop"}><b>remprop</b></ClLinks> tests with <ClLinks  term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks  term={"eql"}><b>eql</b></ClLinks>, and consequently the effect of using such <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Of course, if you’ve gotten as far as needing to remove such a <ClLinks  term={"property"}><i>property</i></ClLinks>, you don’t have much choice—the time to have been thinking about this was when you used <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"get"}><b>get</b></ClLinks> to establish the <ClLinks  term={"property"}><i>property</i></ClLinks>. 



