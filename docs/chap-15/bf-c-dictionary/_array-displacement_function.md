**array-displacement** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-displacement"}><b>array-displacement</b></DictionaryLink> *array → displaced-to, displaced-index-offset* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*displaced-to*—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*displaced-index-offset*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



**Description:** 



If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a *displaced array*, returns the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the :displaced-to and :displaced-index-offset options for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> (see the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> and <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>). If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not a *displaced array*, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and 0 are returned. 



If <DictionaryLink styled={true} term={"array-displacement"}><b>array-displacement</b></DictionaryLink> is called on an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> for which a *non-nil object* was provided as the :displaced-to <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> or <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, it must return that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as its first value. It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <DictionaryLink styled={true} term={"array-displacement"}><b>array-displacement</b></DictionaryLink> returns a *non-nil primary value* for any other <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq a1 (make-array 5)) *→* #<ARRAY 5 simple 46115576> 
(setq a2 (make-array 4 :displaced-to a1 
		     :displaced-index-offset 1)) 
*→* #<ARRAY 4 indirect 46117134> 
(array-displacement a2) 
*→* #<ARRAY 5 simple 46115576>, 1 
(setq a3 (make-array 2 :displaced-to a2 
		     :displaced-index-offset 2)) 
*→* #<ARRAY 2 indirect 46122527> 



(array-displacement a3) 
*→* #<ARRAY 4 indirect 46117134>, 2 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



