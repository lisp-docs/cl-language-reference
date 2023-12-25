**vector-push, vector-push-extend** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> *new-element vector → new-index-p* 



<ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>—a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* . 



<ClLinks styled={true} term={"extension"}><i>extension</i></ClLinks>—a positive *integer* . The default is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*new-index-p*—a *valid array index* for <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-index*—a *valid array index* for <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> and <ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> store *new-element* in <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. <ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> attempts to store *new-element* in the element of <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> designated by the *fill pointer* , and to increase the *fill pointer* by one. If the (&gt;= (fill-pointer <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> 0)), neither <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> nor its *fill pointer* are affected. Otherwise, the store and increment take place and <ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> returns the former value of the *fill pointer* which is one less than the one it leaves in <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. 



<ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> is just like <ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> except that if the *fill pointer* gets too large, <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is extended using <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> so that it can contain more elements. <ClLinks styled={true} term={"extension"}><i>Extension</i></ClLinks> is the minimum number of elements to be added to <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> if it must be extended. 



<ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> and <ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> return the index of *new-element* in <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. If (&gt;= (fill-pointer <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>) (array-dimension <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> 0)), <ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



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



How <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> was created. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled by <ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks> if it tries to extend <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> and <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is not *actually adjustable*. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> does not have a *fill pointer* . 



**See Also:** 



**adjustable-array-p**, <ClLinks styled={true} term={"fill-pointer"}><b>fill-pointer</b></ClLinks>, <ClLinks styled={true} term={"vector-pop"}><b>vector-pop</b></ClLinks> 



