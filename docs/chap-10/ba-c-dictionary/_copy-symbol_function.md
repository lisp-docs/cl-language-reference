**copy-symbol** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *copy-properties → new-symbol* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*copy-properties*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*new-symbol*—a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*. 



**Description:** 



<DictionaryLink styled={true} term={"copy-symbol"}><b>copy-symbol</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *uninterned symbol*, the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of which is <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink> to and possibly the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



If *copy-properties* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *new-symbol* is neither <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> nor <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> and has a *null property list*. If *copy-properties* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then the initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of *new-symbol* is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, the initial <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition of *new-symbol* is the *functional value* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and the *property list* of *new-symbol* is a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>2</sub> of the *property list* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq fred ’fred-smith) *→* FRED-SMITH 
(setf (symbol-value fred) 3) *→* 3 
(setq fred-clone-1a (copy-symbol fred nil)) *→* #:FRED-SMITH 
(setq fred-clone-1b (copy-symbol fred nil)) *→* #:FRED-SMITH 
(setq fred-clone-2a (copy-symbol fred t)) *→* #:FRED-SMITH 
(setq fred-clone-2b (copy-symbol fred t)) *→* #:FRED-SMITH 
(eq fred fred-clone-1a) *→ false* 
(eq fred-clone-1a fred-clone-1b) *→ false* 
(eq fred-clone-2a fred-clone-2b) *→ false* 
(eq fred-clone-1a fred-clone-2a) *→ false* 
(symbol-value fred) *→* 3 
(boundp fred-clone-1a) *→ false* 
(symbol-value fred-clone-2a) *→* 3 
(setf (symbol-value fred-clone-2a) 4) *→* 4 
(symbol-value fred) *→* 3 
(symbol-value fred-clone-2a) *→* 4 
(symbol-value fred-clone-2b) *→* 3 
(boundp fred-clone-1a) *→ false* 
(setf (symbol-function fred) #’(lambda (x) x)) *→* #<FUNCTION anonymous> 
(fboundp fred) *→ true* 
(fboundp fred-clone-1a) *→ false* 
(fboundp fred-clone-2a) *→ false* 




```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-symbol"}><b>make-symbol</b></DictionaryLink> 



**Notes:** 



Implementors are encouraged not to copy the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> which is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> unnecessarily. Unless there is a good reason to do so, the normal implementation strategy is for the *new-symbol*’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to the given <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



