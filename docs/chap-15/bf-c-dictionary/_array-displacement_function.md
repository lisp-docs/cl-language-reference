**array-displacement** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-displacement"}><b>array-displacement</b></DictionaryLink> *array → displaced-to, displaced-index-offset* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*displaced-to*—an <ClLinks  term={"array"}><i>array</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*displaced-index-offset*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. 



**Description:** 



If the <ClLinks  term={"array"}><i>array</i></ClLinks> is a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>, returns the <ClLinks  term={"value"}><i>values</i></ClLinks> of the :displaced-to and :displaced-index-offset options for the <ClLinks  term={"array"}><i>array</i></ClLinks> (see the <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> and <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>). If the <ClLinks  term={"array"}><i>array</i></ClLinks> is not a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and 0 are returned. 



If <DictionaryLink  term={"array-displacement"}><b>array-displacement</b></DictionaryLink> is called on an <ClLinks  term={"array"}><i>array</i></ClLinks> for which a *non-nil object* was provided as the :displaced-to <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> or <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, it must return that <ClLinks  term={"object"}><i>object</i></ClLinks> as its first value. It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <DictionaryLink  term={"array-displacement"}><b>array-displacement</b></DictionaryLink> returns a *non-nil primary value* for any other <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**Examples:**
```lisp
(setq a1 (make-array 5)) → #<ARRAY 5 simple 46115576> 
(setq a2 (make-array 4 :displaced-to a1 
		     :displaced-index-offset 1)) 
→ #<ARRAY 4 indirect 46117134> 
(array-displacement a2) 
→ #<ARRAY 5 simple 46115576>, 1 
(setq a3 (make-array 2 :displaced-to a2 
		     :displaced-index-offset 2)) 
→ #<ARRAY 2 indirect 46122527> 

(array-displacement a3) 
→ #<ARRAY 4 indirect 46117134>, 2 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"array"}><i>array</i></ClLinks> is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> 



