**vector-push, vector-push-extend** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> *new-element vector → new-index-p* 



<DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"vector"}><i>vector</i></ClLinks>—a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



<ClLinks  term={"extension"}><i>extension</i></ClLinks>—a positive *integer* . The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*new-index-p*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for <ClLinks  term={"vector"}><i>vector</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*new-index*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> store *new-element* in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> attempts to store *new-element* in the element of <ClLinks  term={"vector"}><i>vector</i></ClLinks> designated by the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and to increase the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> by one. If the (&gt;= (fill-pointer <ClLinks  term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks  term={"vector"}><i>vector</i></ClLinks> 0)), neither <ClLinks  term={"vector"}><i>vector</i></ClLinks> nor its <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> are affected. Otherwise, the store and increment take place and <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> returns the former value of the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> which is one less than the one it leaves in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



<DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> is just like <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> except that if the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> gets too large, <ClLinks  term={"vector"}><i>vector</i></ClLinks> is extended using <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> so that it can contain more elements. <ClLinks  term={"extension"}><i>Extension</i></ClLinks> is the minimum number of elements to be added to <ClLinks  term={"vector"}><i>vector</i></ClLinks> if it must be extended. 



<DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> and <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> return the index of *new-element* in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. If (&gt;= (fill-pointer <ClLinks  term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks  term={"vector"}><i>vector</i></ClLinks> 0)), <DictionaryLink  term={"vector-push"}><b>vector-push</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



How <ClLinks  term={"vector"}><i>vector</i></ClLinks> was created. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled by <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink> if it tries to extend <ClLinks  term={"vector"}><i>vector</i></ClLinks> and <ClLinks  term={"vector"}><i>vector</i></ClLinks> is not <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if <ClLinks  term={"vector"}><i>vector</i></ClLinks> does not have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



**See Also:** 



**adjustable-array-p**, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink>, <DictionaryLink  term={"vector-pop"}><b>vector-pop</b></DictionaryLink> 



