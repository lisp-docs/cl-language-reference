**vector-push, vector-push-extend** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> *new-element vector → new-index-p* 



<DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* . 



<GlossaryTerm styled={true} term={"extension"}><i>extension</i></GlossaryTerm>—a positive *integer* . The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*new-index-p*—a *valid array index* for <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-index*—a *valid array index* for <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> store *new-element* in <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. <DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> attempts to store *new-element* in the element of <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> designated by the *fill pointer* , and to increase the *fill pointer* by one. If the (&gt;= (fill-pointer <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>) (array-dimension <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> 0)), neither <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> nor its *fill pointer* are affected. Otherwise, the store and increment take place and <DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> returns the former value of the *fill pointer* which is one less than the one it leaves in <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> is just like <DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> except that if the *fill pointer* gets too large, <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is extended using <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> so that it can contain more elements. <GlossaryTerm styled={true} term={"extension"}><i>Extension</i></GlossaryTerm> is the minimum number of elements to be added to <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> if it must be extended. 



<DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> return the index of *new-element* in <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. If (&gt;= (fill-pointer <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>) (array-dimension <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> 0)), <DictionaryLink styled={true} term={"vector-push"}><b>vector-push</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(vector-push (setq fable (list ’fable)) 
	     (setq fa (make-array 8 
				  :fill-pointer 2 

				  
				  
				  :initial-element ’first-one))) *→* 2 
(fill-pointer fa) *→* 3 
(eq (aref fa 2) fable) *→ true* 
(vector-push-extend #\X 
		    (setq aa 
			  (make-array 5 
				      :element-type ’character 
				      :adjustable t 
				      :fill-pointer 3))) *→* 3 
(fill-pointer aa) *→* 4 
(vector-push-extend #\Y aa 4) *→* 4 
(array-total-size aa) *→* at least 5 
(vector-push-extend #\Z aa 4) *→* 5 
(array-total-size aa) *→* 9 ;(or more) 

```
**Affected By:** 



The value of the *fill pointer* . 



How <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> was created. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled by <DictionaryLink styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> if it tries to extend <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is not *actually adjustable*. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled if <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> does not have a *fill pointer* . 



**See Also:** 



**adjustable-array-p**, <DictionaryLink styled={true} term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector-pop"}><b>vector-pop</b></DictionaryLink> 



