**vector-push, vector-push-extend** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> *new-element vector → new-index-p* 



<DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



<GlossaryTerm  term={"extension"}><i>extension</i></GlossaryTerm>—a positive *integer* . The default is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*new-index-p*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*new-index*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> store *new-element* in <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> attempts to store *new-element* in the element of <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> designated by the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and to increase the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> by one. If the (&gt;= (fill-pointer <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>) (array-dimension <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> 0)), neither <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> nor its <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> are affected. Otherwise, the store and increment take place and <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> returns the former value of the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> which is one less than the one it leaves in <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. 



<DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> is just like <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> except that if the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> gets too large, <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> is extended using <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> so that it can contain more elements. <GlossaryTerm  term={"extension"}><i>Extension</i></GlossaryTerm> is the minimum number of elements to be added to <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> if it must be extended. 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> return the index of *new-element* in <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. If (&gt;= (fill-pointer <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>) (array-dimension <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> 0)), <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp
(vector-push (setq fable (list ’fable)) 
	     (setq fa (make-array 8 
				  :fill-pointer 2 
				  
				  
				  :initial-element ’first-one))) → 2 
(fill-pointer fa) → 3 
(eq (aref fa 2) fable) → true 
(vector-push-extend #\X 
		    (setq aa 
			  (make-array 5 
				      :element-type ’character 
				      :adjustable t 
				      :fill-pointer 3))) → 3 
(fill-pointer aa) → 4 
(vector-push-extend #\Y aa 4) → 4 
(array-total-size aa) → at least 5 
(vector-push-extend #\Z aa 4) → 5 
(array-total-size aa) → 9 ;(or more) 
```
**Affected By:** 



The value of the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



How <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> was created. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled by <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> if it tries to extend <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> and <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> does not have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



**See Also:** 



**adjustable-array-p**, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink>, <DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> 



