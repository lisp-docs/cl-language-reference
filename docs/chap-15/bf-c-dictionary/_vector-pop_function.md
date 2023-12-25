**vector-pop** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"vector-pop"}><b>vector-pop</b></DictionaryLink> *vector → element* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* . 



<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Decreases the *fill pointer* of <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> by one, and retrieves the <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that is designated by the new *fill pointer* . 



**Examples:**
```lisp

(vector-push (setq fable (list ’fable)) 
	     (setq fa (make-array 8 
				  :fill-pointer 2 
				  :initial-element ’sisyphus))) *→* 2 
(fill-pointer fa) *→* 3 
(eq (vector-pop fa) fable) *→ true* 
(vector-pop fa) *→* SISYPHUS 
(fill-pointer fa) *→* 1 

```
**Side Effects:** 



The *fill pointer* is decreased by one. 



**Affected By:** 



The value of the *fill pointer* . 







 



 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled if <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> does not have a *fill pointer* . 



If the *fill pointer* is zero, <DictionaryLink styled={true} term={"vector-pop"}><b>vector-pop</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink>, <DictionaryLink styled={true} term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



