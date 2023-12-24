**copy-symbol** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-symbol"}><b>copy-symbol</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *copy-properties → new-symbol* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*copy-properties*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*new-symbol*—a <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*. 



**Description:** 



<ClLinks styled={true} term={"copy-symbol"}><b>copy-symbol</b></ClLinks> returns a <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks>, *uninterned symbol*, the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of which is <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> to and possibly the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the given <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



If *copy-properties* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *new-symbol* is neither <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> nor <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> and has a *null property list*. If *copy-properties* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of *new-symbol* is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, the initial <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definition of *new-symbol* is the *functional value* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and the *property list* of *new-symbol* is a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>2</sub> of the *property list* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Examples:**
```lisp

(setq fred ’fred-smith) → FRED-SMITH 
(setf (symbol-value fred) 3) → 3 
(setq fred-clone-1a (copy-symbol fred nil)) → #:FRED-SMITH 
(setq fred-clone-1b (copy-symbol fred nil)) → #:FRED-SMITH 
(setq fred-clone-2a (copy-symbol fred t)) → #:FRED-SMITH 
(setq fred-clone-2b (copy-symbol fred t)) → #:FRED-SMITH 
(eq fred fred-clone-1a) → false 
(eq fred-clone-1a fred-clone-1b) → false 
(eq fred-clone-2a fred-clone-2b) → false 
(eq fred-clone-1a fred-clone-2a) → false 
(symbol-value fred) → 3 
(boundp fred-clone-1a) → false 
(symbol-value fred-clone-2a) → 3 
(setf (symbol-value fred-clone-2a) 4) → 4 
(symbol-value fred) → 3 
(symbol-value fred-clone-2a) → 4 
(symbol-value fred-clone-2b) → 3 
(boundp fred-clone-1a) → false 
(setf (symbol-function fred) #’(lambda (x) x)) → #<FUNCTION anonymous> 
(fboundp fred) → true 
(fboundp fred-clone-1a) → false 
(fboundp fred-clone-2a) → false 




```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"make-symbol"}><b>make-symbol</b></ClLinks> 



**Notes:** 



Implementors are encouraged not to copy the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> which is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> unnecessarily. Unless there is a good reason to do so, the normal implementation strategy is for the *new-symbol*’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to the given <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



