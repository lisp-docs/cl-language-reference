**copy-symbol** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *copy-properties → new-symbol* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*copy-properties*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*new-symbol*—a <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*. 



**Description:** 



<DictionaryLink  term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> returns a <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*, the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of which is <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> to and possibly the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the given <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



If *copy-properties* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, the *new-symbol* is neither <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> nor <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> and has a *null property list*. If *copy-properties* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then the initial <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of *new-symbol* is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, the initial <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition of *new-symbol* is the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of *new-symbol* is a <GlossaryTerm  term={"copy"}><i>copy</i></GlossaryTerm><sub>2</sub> of the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-symbol"}><b>make-symbol</b></DictionaryLink> 



**Notes:** 



Implementors are encouraged not to copy the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> which is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> unnecessarily. Unless there is a good reason to do so, the normal implementation strategy is for the *new-symbol*’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> to the given <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



