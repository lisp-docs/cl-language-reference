**vector-pop** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> *vector → element* 



**Arguments and Values:** 



<ClLinks  term={"vector"}><i>vector</i></ClLinks>—a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



<ClLinks  term={"element"}><i>element</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Decreases the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> of <ClLinks  term={"vector"}><i>vector</i></ClLinks> by one, and retrieves the <ClLinks  term={"element"}><i>element</i></ClLinks> of <ClLinks  term={"vector"}><i>vector</i></ClLinks> that is designated by the new <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



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



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled if <ClLinks  term={"vector"}><i>vector</i></ClLinks> does not have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



If the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is zero, <DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink>, <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink>, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



