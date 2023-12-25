**vector-push, vector-push-extend** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> *new-element vector → new-index-p* 



<ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"vector"}><i>vector</i></ClLinks>—a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* . 



<ClLinks  term={"extension"}><i>extension</i></ClLinks>—a positive *integer* . The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*new-index-p*—a *valid array index* for <ClLinks  term={"vector"}><i>vector</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*new-index*—a *valid array index* for <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



**Description:** 



<ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> and <ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> store *new-element* in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. <ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> attempts to store *new-element* in the element of <ClLinks  term={"vector"}><i>vector</i></ClLinks> designated by the *fill pointer* , and to increase the *fill pointer* by one. If the (&gt;= (fill-pointer <ClLinks  term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks  term={"vector"}><i>vector</i></ClLinks> 0)), neither <ClLinks  term={"vector"}><i>vector</i></ClLinks> nor its *fill pointer* are affected. Otherwise, the store and increment take place and <ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> returns the former value of the *fill pointer* which is one less than the one it leaves in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



<ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> is just like <ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> except that if the *fill pointer* gets too large, <ClLinks  term={"vector"}><i>vector</i></ClLinks> is extended using <ClLinks  term={"adjust-array"}><b>adjust-array</b></ClLinks> so that it can contain more elements. <ClLinks  term={"extension"}><i>Extension</i></ClLinks> is the minimum number of elements to be added to <ClLinks  term={"vector"}><i>vector</i></ClLinks> if it must be extended. 



<ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> and <ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> return the index of *new-element* in <ClLinks  term={"vector"}><i>vector</i></ClLinks>. If (&gt;= (fill-pointer <ClLinks  term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks  term={"vector"}><i>vector</i></ClLinks> 0)), <ClLinks  term={"vector-push"}><b>vector-push</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



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



The value of the *fill pointer* . 



How <ClLinks  term={"vector"}><i>vector</i></ClLinks> was created. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled by <ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> if it tries to extend <ClLinks  term={"vector"}><i>vector</i></ClLinks> and <ClLinks  term={"vector"}><i>vector</i></ClLinks> is not *actually adjustable*. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled if <ClLinks  term={"vector"}><i>vector</i></ClLinks> does not have a *fill pointer* . 



**See Also:** 



**adjustable-array-p**, <ClLinks  term={"fill-pointer"}><b>fill-pointer</b></ClLinks>, <ClLinks  term={"vector-pop"}><b>vector-pop</b></ClLinks> 



