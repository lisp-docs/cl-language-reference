**vector-pop** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> *vector → element* 



**Arguments and Values:** 



<GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Decreases the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> of <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> by one, and retrieves the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> that is designated by the new <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



**Examples:**
```lisp
(vector-push (setq fable (list ’fable)) 
	     (setq fa (make-array 8 
				  :fill-pointer 2 
				  :initial-element ’sisyphus))) → 2 
(fill-pointer fa) → 3 
(eq (vector-pop fa) fable) → true 
(vector-pop fa) → SISYPHUS 
(fill-pointer fa) → 1 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is decreased by one. 



**Affected By:** 



The value of the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 







 



 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled if <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> does not have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



If the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is zero, <DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink>, <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink>, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



